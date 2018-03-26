const jsdom = require('jsdom');
const { JSDOM } = jsdom;

import { Page, PageData, Subheader, TSCode, HTMLCode, DownloadedImage } from './models';

export class Parser {
    parse = (pages: Page[]) => {
        let pageData: PageData[] = [];
        pages.forEach( (page: Page) => {
            let pageInfo: PageData = this.parsePage(page.pageTitle, page.pageHtml, page.downloadedImageList);
            pageData.push(pageInfo);
        });
        return pageData;
    }

    parsePage = (pageTitle: string, pageContent: string, dlImgList: DownloadedImage[]) => {
        const DOM = new JSDOM(pageContent);
        const document = DOM.window.document;

        let innerCells = document.querySelectorAll('.innerCell');

        // console.log('Parsing ', pageTitle, '...');

        let pageInfo: PageData = {name: pageTitle};

        let tsCodes: TSCode[] = [];
        let htmlCodes: HTMLCode[] = [];
        let firstCell: boolean = true;

        if (innerCells.length === 0) {
            let subheaders = this.parseIntro(document, dlImgList);
            // console.log('elements: ', segmentElements);
            pageInfo['Intro'] = subheaders;
        }
        else {
            innerCells.forEach( (segment: any) => {
                let segmentTitle: string = "";
                let segmentTitleH1: HTMLElement = segment.querySelector('h1');
                let segmentTitleH2: HTMLElement = segment.querySelector('h2');

                // console.log(segmentTitleH1, segmentTitleH2);

                if (segmentTitleH1 != null) {
                    segmentTitle = segmentTitleH1.innerHTML;
                }
                else if (segmentTitleH2 != null) {
                    segmentTitle = segmentTitleH2.innerHTML;
                }
                else if (firstCell) {
                    segmentTitle = 'Intro';
                    firstCell = false;
                }

                // let segImgElementsAll: NodeList = segment.querySelectorAll('img');
                // console.log(pageTitle, ',', segmentTitle, ': all img count:', segImgElementsAll.length);
                if (segmentTitle === 'Intro') {
                    let subheaders = this.parseIntro(segment, dlImgList);
                    // console.log('elements: ', segmentElements);
                    pageInfo[segmentTitle] = subheaders;
                }
                else if (segmentTitle != '') {
                    // console.log('segmentTitle: ', segmentTitle);
                    // console.log('segment HTML:', segment.innerHTML);

                    let TSCodeDivs = segment.querySelectorAll('div[label="TS"]');
                    let HTMLCodeDivs = segment.querySelectorAll('div[label="HTML"]');

                    TSCodeDivs.forEach( (tsCodeDiv: any) => {
                        // console.log('tscodediv:', tsCodeDiv.innerHTML);
                        let tsCodeSamples = tsCodeDiv.querySelectorAll("script");
                        tsCodeSamples.forEach( (codeSample: any) => {
                            let code: string = this.trim(codeSample.innerHTML, true);
                            tsCodes.push(new TSCode(code));
                            // console.log('code: ', code);
                        });
                    });

                    HTMLCodeDivs.forEach( (htmlCodeDiv: any) => {
                        // console.log('htmlcodediv:', htmlCodeDiv.innerHTML);
                        let htmlcodeSamples = htmlCodeDiv.querySelectorAll("script");
                        htmlcodeSamples.forEach( (codeSample: any) => {
                            let code: string = this.trim(codeSample.innerHTML, true);
                            htmlCodes.push(new HTMLCode(code));
                            // console.log('code: ', code);
                        });
                    });

                    let subheaders: Subheader[] = [];
                    let segmentElements = segment.querySelectorAll('*');

                    segmentElements.forEach( (elem: any) => {
                        let tag = elem.tagName;
                        let content = this.trim(elem.innerHTML, false);
                        let acceptedTags: string[] = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'IMG', 'UL', 'OL', 'TABLE'];
                        // console.log('tag:', tag);

                        if (acceptedTags.indexOf(tag) > -1) {
                            if (tag === 'IMG') {
                                if (!this.findAncestorElement(elem, 'TABLE') && !this.findAncestorElement(elem, 'UL') && !this.findAncestorElement(elem, 'OL')) {
                                    let imgSrc = elem.getAttribute('src');
                                    // console.log('imgsrc:', imgSrc);
                                    let dlImgName = this.testImgURL(imgSrc, dlImgList);
                                    if (dlImgName.length > 0) {
                                        subheaders.push(new Subheader('IMG', dlImgName));
                                    }
                                }
                            }
                            else if (tag === 'UL' || tag === 'OL') {
                                if (!this.findAncestorElement(elem, 'TABLE') && !this.findAncestorElement(elem, 'UL') && !this.findAncestorElement(elem, 'OL')) {
                                    let listSubheaders: Subheader[] = this.traverseListElements(elem, dlImgList);
                                    subheaders = subheaders.concat(listSubheaders);
                                }
                            }
                            else if (tag === 'TABLE') {
                                let tableSubheaders: Subheader[] = this.traverseTableElements(elem, dlImgList);
                                subheaders = subheaders.concat(tableSubheaders);
                            }
                            else if (this.testString(content)) {
                                if (!this.findAncestorElement(elem, 'TABLE') && !this.findAncestorElement(elem, 'UL') && !this.findAncestorElement(elem, 'OL')) {
                                    subheaders.push(new Subheader(tag, content));
                                }
                            }
                        }
                    });
                    // console.log('elements: ', segmentElements);
                    pageInfo[segmentTitle] = subheaders;
                    pageInfo['TS'] = tsCodes;
                    pageInfo['HTML'] = htmlCodes;
                }
            });
        }
        return pageInfo;
    }

    parseIntro = (segment: any, dlImgList: DownloadedImage[]) => {
        let subheaders: Subheader[] = [];
        let segmentParaElements = segment.querySelectorAll('p');
        let segmentImgElements = segment.querySelectorAll('img');
        // console.log('img count:', segmentImgElements.length);

        segmentParaElements.forEach( (elem: any) => {
            let tag = elem.tagName;
            let content = elem.innerHTML;
            if ( !content.includes('<style') && !content.includes('confluence')
                    && !content.includes('jira') && !content.includes('invision') 
                    && !content.includes('lozenge') && !content.includes('navmenu') ) {
                content = this.trim(elem.innerHTML, false);
                if (this.testString(content)) {
                    subheaders.push(new Subheader(tag, content));
                }
            }
        });

        segmentImgElements.forEach( (elem: any) => {
            let imgSrc = elem.getAttribute('src');
            // console.log('imgsrc:', imgSrc);
            let dlImgName = this.testImgURL(imgSrc, dlImgList);
            if (dlImgName.length > 0) {
                subheaders.push(new Subheader('IMG', dlImgName));
            }
        });

        return subheaders;
    };

    trim = (s: string, isCode: boolean) => {
        let formatted = s.replace('<![CDATA[', '').replace(']]>', '').replace(/\n|\t/g, '').replace(/&nbsp;/g, ' ').replace(/  +/g, ' ').trim();
        if (!isCode) {
            formatted = formatted.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '\"').replace(/&apos;/g, '\'');
        }
        return formatted.replace(/\<(?!(?:a|\/a)).*?\>/g, '');
    }

    testString = (s: string) => {
        return s.replace(/\s/g, '').length > 0;
    }

    testImgURL = (url: string, dlImgList: DownloadedImage[]) => {
        let downloadedImageName: string = '';
        for (let i=0; i<dlImgList.length; i++) {
            if (dlImgList[i].imageUrl === url) {
                downloadedImageName = dlImgList[i].downloadedImage;
            }
        }
        return downloadedImageName;
    }

    traverseListElements = (elem: any, dlImgList: DownloadedImage[]) => {
        let subheaders: Subheader[] = [];
        let tag = elem.tagName;
        let acceptedTextTags: string[] = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
        let acceptedListTags: string[] = ['OL', 'UL', 'LI'];
        let innerNodeTags: string[] = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'OL', 'UL', 'LI', 'IMG', 'SPAN'];
        let children = elem.childNodes;
        if (tag != 'SPAN') {
            subheaders.push(new Subheader(tag, ""));
        }
        // console.log('List tag: ', tag, 'children count: ', children.length);

        let leafNode: boolean = true;
        for (let i=0; i<children.length; i++) {
            if (children[i].tagName != undefined && innerNodeTags.indexOf(children[i].tagName) > -1)
                leafNode = false;
        }
        
        if (leafNode) {
            let content = this.trim(elem.innerHTML, false);
            if (this.testString(content)) {
                subheaders.push(new Subheader('P', content));
            }
        }
        else {
            for (let i=0; i<children.length; i++) {
                if (children[i].data != undefined) {
                    let content = this.trim(children[i].data, false);
                    if (this.testString(content)) {
                        subheaders.push(new Subheader('P', content));
                    }
                }
                else {
                    let childTag = children[i].tagName;
                    if (acceptedListTags.indexOf(childTag) > -1 || childTag === 'SPAN') {
                        let listSubheaders: Subheader[] = this.traverseListElements(children[i], dlImgList);
                        subheaders = subheaders.concat(listSubheaders);
                    }
                    else if (acceptedTextTags.indexOf(childTag) > -1) {
                        let content = this.trim(children[i].innerHTML, false);
                        if (this.testString(content)) {
                            subheaders.push(new Subheader(childTag, content));
                        }
                    }
                    else if (childTag === 'IMG') {
                        let imgElem: HTMLImageElement = children[i];
                        let imgSrc = imgElem.getAttribute('src');
                        if (imgSrc != null) {
                            let dlImgName = this.testImgURL(imgSrc, dlImgList);
                            if (dlImgName.length > 0) {
                                subheaders.push(new Subheader('IMG', dlImgName));
                            }
                        }
                    }
                }
            }
        }
        if (subheaders.length > 1) {
            if (tag != 'SPAN') {
                subheaders.push(new Subheader('/' + tag, ""));
            }
            // console.log('subheaders: ', subheaders.length, subheaders);
            return subheaders;
        }
        else if (tag === 'SPAN' && subheaders.length > 0) {
            return subheaders;
        }
        else {
            return [];
        }
    }

    traverseTableElements = (elem: any, dlImgList: DownloadedImage[]) => {
        let subheaders: Subheader[] = [];
        let tag = elem.tagName;
        let acceptedTextTags: string[] = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
        let acceptedTableTags: string[] = ['THEAD', 'TFOOT', 'TBODY', 'TR', 'TH', 'TD'];
        let acceptedListTags: string[] = ['OL', 'UL', 'LI'];
        let innerNodeTags: string[] = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'OL', 'UL', 'LI', 'IMG', 'THEAD', 'TFOOT', 'TBODY', 'TR', 'TH', 'TD', 'SPAN'];
        let children = elem.childNodes;
        if (tag != 'SPAN') {
            subheaders.push(new Subheader(tag, ""));
        }
        // console.log('Table tag: ', tag, 'children count: ', children.length);

        let leafNode: boolean = true;
        for (let i=0; i<children.length; i++) {
            if (children[i].tagName != undefined && innerNodeTags.indexOf(children[i].tagName) > -1)
                leafNode = false;
        }

        if (leafNode) {
            let content = this.trim(elem.innerHTML, false);
            if (this.testString(content)) {
                subheaders.push(new Subheader('P', content));
            }
        }
        else {
            for (let i=0; i<children.length; i++) {
                if (children[i].data != undefined) {
                    let content = this.trim(children[i].data, false);
                    if (this.testString(content)) {
                        subheaders.push(new Subheader('P', content));
                    }
                }
                else {
                    let childTag = children[i].tagName;
                    if (acceptedTableTags.indexOf(childTag) > -1 || childTag === 'SPAN') {
                        let tableSubheaders: Subheader[] = this.traverseTableElements(children[i], dlImgList);
                        subheaders = subheaders.concat(tableSubheaders);
                    }
                    if (acceptedListTags.indexOf(childTag) > -1) {
                        let listSubheaders: Subheader[] = this.traverseListElements(children[i], dlImgList);
                        subheaders = subheaders.concat(listSubheaders);
                    }
                    else if (acceptedTextTags.indexOf(childTag) > -1) {
                        let content = this.trim(children[i].innerHTML, false);
                        if (this.testString(content)) {
                            subheaders.push(new Subheader(childTag, content));
                        }
                    }
                    else if (childTag === 'IMG') {
                        let imgElem: HTMLImageElement = children[i];
                        let imgSrc = imgElem.getAttribute('src');
                        if (imgSrc != null) {
                            let dlImgName = this.testImgURL(imgSrc, dlImgList);
                            if (dlImgName.length > 0) {
                                subheaders.push(new Subheader('IMG', dlImgName));
                            }
                        }
                    }
                }
            }
        }  
        if (subheaders.length > 1) {
            if (tag != 'SPAN') {
                subheaders.push(new Subheader('/' + tag, ""));
            }
            // console.log('subheaders: ', subheaders.length, subheaders);
            return subheaders;
        }
        else if (tag === 'SPAN' && subheaders.length > 0) {
            return subheaders;
        }
        else {
            return [];
        }
    }

    findAncestorElement: any = (elem: any, target: string) => {
        let parentNode = elem.parentElement;
      //  console.log('ancestor: ', parentNode.tagName);
        if (parentNode === null) {
            // console.log('ancestor not found');
            return false;
        }
        else if (parentNode.nodeName === target) {
            // console.log('ancestor found');
            return true;
        }
        else {
            return this.findAncestorElement(parentNode, target);
        }
    }
}