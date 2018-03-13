import { Pages, Page, Links, ResultList, Body, View, PageInformation, DownloadedImage } from './models';
const jsdom = require("jsdom");
const crypto = require("crypto");

const { JSDOM } = jsdom;

export class ScraperMock {

    constructor(public fixture: any) {}

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
            const pageInfo: any = this.parsePage(page._links.self, page.title);
            if (pageInfo != "") { 
                pageInformationList.push(pageInfo);
            }
        }

        return pageInformationList;
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
            const downloadedImageName = this.imageDownload(imageLink.src);
            if (downloadedImageName != null) { 
                let downloadedImage = {imageUrl : imageLink.src, downloadedImage : downloadedImageName} as DownloadedImage;
                pageInformation.downloadedImageList.push(downloadedImage);
            }
        }

        return pageInformation;
    }

    imageDownload: any = (imageUrl: string) => {
        if (imageUrl.startsWith("https://ultidev/images/icons/issuetypes/")) { 
            return null;
        }
        else if (imageUrl.startsWith("/")) { 
            if (imageUrl.startsWith("/download")) { 
                imageUrl = "https://confluence.ultimatesoftware.com" + imageUrl;
            }
            else { return null }
        }

        const imageId = crypto.randomBytes(20).toString('hex') + ".png";

        const imageData = this.getData(imageUrl);
        if (!imageData) { 
            return null;
        }
        return imageId;
    }


    getData: any = (uri: string) => {
        return uri;
    }
}