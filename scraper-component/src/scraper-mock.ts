import { Pages, Page, Links, ResultList, Body, View, PageInformation, DownloadedImage } from './models';
const jsdom = require("jsdom");
const crypto = require("crypto");
const { JSDOM } = jsdom;

const confluencePageListUrl = 'https://confluence.ultimatesoftware.com/rest/api/content/103390770/child/page?limit=100';
const notSupportedImageUrl = 'https://ultidev/images/icons/issuetypes/';
const imageUrlPrefix = 'https://confluence.ultimatesoftware.com'

export interface Fixture { 
    data: Pages | null;
}
export class ScraperMock {

    constructor(public fixture: Fixture) {}

    scrape: any = () => {
        if (this.fixture.data === null) { return null; }

        const pageData = this.getPageInformationList(this.fixture.data);
        return pageData;
    };

    getPageInformationList = (data : Pages) => {
        let pageInformationList : PageInformation[] = []; 

        let i = 0;
        for (i = 0; i < data.results.length; i++) { 
            const page: Page = data.results[i];

            const pageData: any = this.downloadPage(page._links.self)
            if (pageData != null) { 
                const pageInfo: any = this.parsePage(pageData, page.title);
                if (pageInfo != "") { 
                    pageInformationList.push(pageInfo);
                }
            }
        }

        return pageInformationList;
    }

    downloadPage = (pageUrl: string) => { 
        const data: ResultList = this.getData(pageUrl + '?expand=body.view');
        return data;
    }

    parsePage = (pageUrl : string, title : string) => { 
        let data: ResultList = this.getData(pageUrl + '?expand=body.view');
        if (data === null) { return ""; }

        let pageInformation: PageInformation = {} as PageInformation; 
        pageInformation.pageTitle = title;
        pageInformation.pageHtml = data.body.view.value;

        //send the confluenceHTML to the Parser
        const dom = new JSDOM(pageInformation.pageHtml);
        const document = dom.window.document;
        const statusElements: HTMLSpanElement[] = document.querySelectorAll(".status-macro");

        if (statusElements.length == 0) { return ""; } 
        
        const status = statusElements[0].textContent;
        if (status == null || status.toLowerCase().indexOf('complete') == -1 ) { return "" }

        const imageLinks: HTMLImageElement[] = document.querySelectorAll("img")
        pageInformation.downloadedImageList = [];

        let i: 0;
        for (i = 0; i < imageLinks.length; i++) { 
            const imageLink = imageLinks[i];
            const downloadedImageName = this.fetchImage(imageLink.src);
            if (downloadedImageName != null) { 
                let downloadedImage = {imageUrl : imageLink.src, downloadedImage : downloadedImageName} as DownloadedImage;
                pageInformation.downloadedImageList.push(downloadedImage);
            }
        }

        return pageInformation;
    }

    fetchImage = (imageUrl: string) => {
        if (imageUrl.startsWith(notSupportedImageUrl)) { 
            return null;
        }
        else if (imageUrl.startsWith("/")) { 
            if (imageUrl.startsWith("/download")) { 
                imageUrl = imageUrlPrefix + imageUrl;
            }
            else { return null }
        }

        const imageData = this.getData(imageUrl);
        if (!imageData) { 
            return null;
        }
        
        return this.saveImage(imageData);
    }

    saveImage (imageData: string) : string  {
        const imageId = crypto.randomBytes(20).toString('hex') + ".png";
        return imageId;
    }


    getData: any = (uri: string) => {
        return uri;
    }
}