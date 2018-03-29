import { Parser } from './index';
import { Page, PageData, DownloadedImage, Subheader, HTMLCode, TSCode } from './models';
import { Data } from './data';

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Parser', () => {
    let parser: Parser;
    let data: Data;
    let pages: Page[];
    let page: Page;
    
    beforeEach(() => {
        parser = new Parser();
        data = new Data();
    });

    describe('When parse is called', () => {
        it('should return an empty array if no pages are given', () => {
            pages = [];

            let result: PageData[] = parser.parse(pages);

            expect(result.length).toBe(0);
        });

        it('should return parsed pages if pages are given', () => {
            pages = [data.page1, data.page2];

            let result: PageData[] = parser.parse(pages);

            expect(result.length).toBe(2);
            expect(result[0].name).toBe(data.page1.pageTitle);
            expect(result[1].name).toBe(data.page2.pageTitle);
        });
    })

    describe('When there are no segments', () => { // aka when innerCells == 0
        it('should return parsed page with Intro subheaders', () => {
            page = data.page6;
            let spy = spyOn(parser, 'parseIntro').and.callThrough();

            let result: PageData = parser.parsePage(page.pageTitle, page.pageHtml, []);

            expect(spy).toHaveBeenCalled();
            expect(result.Intro).not.toBeNull();
        });
    })

    describe('When there are multiple segments', () => { 
        it('should return all segments of the page', () => {
            page = data.page5;
            let segments = ['name', 'Intro', 'Use', 'Code', 'TS', 'HTML', 'Styles', 'Content', 'Known issues'];

            let result: PageData = parser.parsePage(page.pageTitle, page.pageHtml, []);
            let resultProperties: string[] = Object.keys(result);

            expect(segments.sort()).toEqual(resultProperties.sort());
        });
    })
  
    describe('When code is present', () => { 
        beforeEach(() => {
            page = data.page1;
        });
        it('should return parsed TS code', () => {
            let parsedTSCode: string = `constructor(fb: FormBuilder) { this.fb = fb; this.form = this.fb.group({ registeredAddress:[] }) } ngOnChanges(changes: SimpleChanges) { const someChange = changes[&#39;someChange&#39;]; if (someChange &amp;&amp; someChange.currentValue) { this.form.reset({ registeredAddress: { line1: legalEntity.currentValue.registeredAddress.line1, line2: legalEntity.currentValue.registeredAddress.line2, city: legalEntity.currentValue.registeredAddress.city, subdivision: { code: legalEntity.currentValue.registeredAddress.subdivision.code }, postalCode: legalEntity.currentValue.registeredAddress.postalCode, country: { code: legalEntity.currentValue.registeredAddress.country.code }, } }) } }`;

            let result: PageData = parser.parsePage(page.pageTitle, page.pageHtml, []);

            expect(result.TS.length).toBe(1);
            expect((<TSCode>result.TS[0]).tsCode).toContain(parsedTSCode);
        });

        it('should return parsed HTML code', () => {
            let parsedHTMLCode: string = `&lt;ign-card-section&gt; &lt;ign-card-section-title&gt;Address&lt;/ign-card-section-title&gt; &lt;ign-address formControlName=&quot;registeredAddress&quot; [required]=&quot;false&quot; &gt; &lt;/ign-address&gt;&lt;/ign-card-section&gt;`;

            let result: PageData = parser.parsePage(page.pageTitle, page.pageHtml, []);

            expect(result.HTML.length).toBe(1);
            expect((<HTMLCode>result.HTML[0]).htmlCode).toContain(parsedHTMLCode);
        });
    })

    describe('When parseIntro is called', () => { 
        let imgSrc: string;
        let downloadedImages: DownloadedImage[];
        let textSubheader: Subheader;
        let imgSubheader: Subheader;
        beforeEach(() => {
            page = data.page1;
            imgSrc = "/download/thumbnails/108284811/Screen%20Shot%202017-12-19%20at%2012.07.56%20PM.png?version=1&modificationDate=1513703645927&api=v2";
            downloadedImages = [ {imageUrl: imgSrc, downloadedImage: 'test.png'} ]
            textSubheader = {tag: 'P', content: 'The address is a common set of fields, the component helps maintain consistency and re-use.'}
            imgSubheader = {tag: 'IMG', content: 'test.png'};
        });

        it('should return relevant text and image subheaders', () => {
            let result: PageData = parser.parsePage(page.pageTitle, page.pageHtml, downloadedImages);

            expect(result.Intro.length).toBe(2);
            expect(result.Intro).toEqual(jasmine.arrayContaining([textSubheader]));
            expect(result.Intro).toEqual(jasmine.arrayContaining([imgSubheader]));
        });

        it('should only return text subheaders if image is not found in downloaded image list', () => {
            let result: PageData = parser.parsePage(page.pageTitle, page.pageHtml, []);

            expect(result.Intro).not.toEqual(jasmine.arrayContaining([imgSubheader]));
        });
    })

    describe('When trim is called', () => { 
        it('should remove all extraneous whitespace', () => {
            let text: string = `Don't use &quot;Yes&quot; or &quot;No&quot; for button actions,\n      instead use verbs.  `;
            let parsedText: string = `Don't use "Yes" or "No" for button actions, instead use verbs.`;
        
            let result: string = parser.trim(text, false);

            expect(result).toBe(parsedText);
        });

        it('should remove all tags except anchors', () => {
            let text: string = `for implementing size:&nbsp;<em><em>see&nbsp;</em></em><a href=\ "https://material.angular.io/components/form-field/overview\" class=\ "external-link\" rel=\ "nofollow\">MatDialogConfig </a>in Angular Material docs for dialogs.`;
            let parsedText: string = `for implementing size: see <a href=\ "https://material.angular.io/components/form-field/overview\" class=\ "external-link\" rel=\ "nofollow\">MatDialogConfig </a>in Angular Material docs for dialogs.`
        
            let result: string = parser.trim(text, false);

            expect(result).toBe(parsedText);
        });

        it('should not format escaped characters if passed code', () => {
            let code: string = `<![CDATA[&lt;ign-card-section&gt;\n    &lt;ign-card-section-title&gt;Address&lt;/ign-card-section-title&gt;\n    &lt;ign-address\n      formControlName=&quot;registeredAddress&quot; [required]=&quot;false&quot;\n    &gt;\n    &lt;/ign-address&gt;\n&lt;/ign-card-section&gt;]]>`;
            let parsedCode: string = `&lt;ign-card-section&gt; &lt;ign-card-section-title&gt;Address&lt;/ign-card-section-title&gt; &lt;ign-address formControlName=&quot;registeredAddress&quot; [required]=&quot;false&quot; &gt; &lt;/ign-address&gt;&lt;/ign-card-section&gt;`;
        
            let result: string = parser.trim(code, true);

            expect(result).toBe(parsedCode);
        });
    });

    describe('When traverseListElement is called', () => { 
        let segmentElements: any;
        let dlImgList: DownloadedImage[];
        beforeEach(() => {
            const DOM = new JSDOM(data.segmentList);
            const document = DOM.window.document;
            segmentElements = document.querySelectorAll('ul');
            dlImgList = [ {imageUrl: 'testImg.png', downloadedImage: 'downloadedImg.png'} ]
        });

        it('should return all subheaders in list', () => {
            let listSubheaders: Subheader[] = parser.traverseListElements(segmentElements[0], dlImgList);

            expect(listSubheaders.length).toBe(13);
        })

        it('should return list parsed in correct order', () => {
            let listSubheaders: Subheader[] = parser.traverseListElements(segmentElements[0], dlImgList);

            expect(listSubheaders[0]).toEqual({tag: 'UL', content: ''});
            expect(listSubheaders[1]).toEqual({tag: 'LI', content: ''});
            expect(listSubheaders[8]).toEqual({tag: '/LI', content: ''});
            expect(listSubheaders[12]).toEqual({tag: '/UL', content: ''});
        });

        it ('should contain enclosed texts and images', () => {
            let listSubheaders: Subheader[] = parser.traverseListElements(segmentElements[0], dlImgList);

            expect(listSubheaders).toEqual(jasmine.arrayContaining([{tag: 'P', content: 'List item 1'}]));
            expect(listSubheaders).toEqual(jasmine.arrayContaining([{tag: 'P', content: 'Sublist item 1'}]));
            expect(listSubheaders).toEqual(jasmine.arrayContaining([{tag: 'IMG', content: dlImgList[0].downloadedImage}]));
        });
    });

    describe('When traverseTableElement is called', () => { 
        let segmentElements: any;
        let dlImgList: DownloadedImage[];

        beforeEach(() => {
            const DOM = new JSDOM(data.segmentTable);
            const document = DOM.window.document;
            segmentElements = document.querySelectorAll('table');
            dlImgList = [ {imageUrl: 'testImg.png', downloadedImage: 'downloadedImg.png'} ]
        });

        it('should return all subheaders in table', () => {
            let tableSubheaders: Subheader[] = parser.traverseTableElements(segmentElements[0], dlImgList);

            expect(tableSubheaders.length).toBe(22);
        })

        it('should return table parsed in correct order', () => {
            let tableSubheaders: Subheader[] = parser.traverseTableElements(segmentElements[0], dlImgList);

            expect(tableSubheaders[0]).toEqual({tag: 'TABLE', content: ''});
            expect(tableSubheaders[1]).toEqual({tag: 'TBODY', content: ''});
            expect(tableSubheaders[2]).toEqual({tag: 'TR', content: ''});
            expect(tableSubheaders[3]).toEqual({tag: 'TH', content: ''});
            expect(tableSubheaders[5]).toEqual({tag: '/TH', content: ''});
            expect(tableSubheaders[19]).toEqual({tag: '/TR', content: ''});
            expect(tableSubheaders[20]).toEqual({tag: '/TBODY', content: ''});
            expect(tableSubheaders[21]).toEqual({tag: '/TABLE', content: ''});
        });

        it ('should contain enclosed texts and images', () => {
            let tableSubheaders: Subheader[] = parser.traverseTableElements(segmentElements[0], dlImgList);

            expect(tableSubheaders).toEqual(jasmine.arrayContaining([{tag: 'H2', content: 'Table'}]));
            expect(tableSubheaders).toEqual(jasmine.arrayContaining([{tag: 'P', content: 'Table Data 1'}]));
            expect(tableSubheaders).toEqual(jasmine.arrayContaining([{tag: 'P', content: 'List item 1'}]));
            expect(tableSubheaders).toEqual(jasmine.arrayContaining([{tag: 'IMG', content: dlImgList[0].downloadedImage}]));
        });
    })

    describe('When findAncestorElement is called', () => { 
        let segmentElements: any;

        beforeEach(() => {
            const DOM = new JSDOM(data.segmentTable);
            const document = DOM.window.document;
            segmentElements = document.querySelectorAll('tr');
        });

        it('should return true if ancestor element is found', () => {
            let result: boolean = parser.findAncestorElement(segmentElements[0], 'TABLE');

            expect(result).toBeTruthy();
        });

        it('should return false if ancestor element is not found', () => {
            let result: boolean = parser.findAncestorElement(segmentElements[0], 'UL');

            expect(result).toBeFalsy();
        });
    });
});