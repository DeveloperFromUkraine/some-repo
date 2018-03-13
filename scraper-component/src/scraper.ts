import { Pages, Page, Links, ResultList, Body, View, PageInformation, DownloadedImage } from './models';
const jsdom = require("jsdom");
const crypto = require("crypto");
const rp = require("request-promise");

const { JSDOM } = jsdom;

export class Scraper {

    username: string;
    password: string;

    scrape: any = async (username: string, password: string) => {   

        this.username =  username ;
        this.password = password;

        let data: Pages = await this.getData('https://confluence.ultimatesoftware.com/rest/api/content/103390770/child/page?limit=100');
        if (data === null) { return null; }

        const pageData = await this.getPageInformationList(data);
        return pageData;
    };

    getPageInformationList = async(data : Pages) => {
        let pageInformationList : PageInformation[] = []; 

        let i = 0;
        for (i = 0; i < data.results.length; i++) { 
            const page: Page = data.results[i];
            const pageInfo: any = await this.parsePage(page._links.self, page.title);
            if (pageInfo != "") { 
                pageInformationList.push(pageInfo);
            }
        }

        return pageInformationList;
    }


    parsePage = async (pageUrl : string, title : string) => { 
        let data: ResultList = await this.getData(pageUrl + '?expand=body.view');
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
            const downloadedImageName = await this.imageDownload(imageLink.src);
            if (downloadedImageName != null) { 
                let downloadedImage = {imageUrl : imageLink.src, downloadedImage : downloadedImageName} as DownloadedImage;
                pageInformation.downloadedImageList.push(downloadedImage);
            }
        }

        return pageInformation;
    }

    imageDownload: any = async (imageUrl: string) => {
        if (imageUrl.startsWith("https://ultidev/images/icons/issuetypes/")) { 
            return await null;
        }
        else if (imageUrl.startsWith("/")) { 
            if (imageUrl.startsWith("/download")) { 
                imageUrl = "https://confluence.ultimatesoftware.com" + imageUrl;
            }
            else { return await null }
        }

        const imageId = crypto.randomBytes(20).toString('hex') + ".png";

        const imageData = await this.getData(imageUrl);
        if (!imageData) { 
            return null;
        }
        var fs = require('fs');
        const buffer = Buffer.from(imageData, 'utf8');
        fs.writeFileSync("./imageDownloads/"+imageId, buffer);
        return imageId;
    }


    getData: any = async (uri: string) => {
        const options = {
            encoding: null, 
            uri: uri,
            json: true,
            rejectUnauthorized: false,
            headers: {
                'User-Agent': 'Request-Promise',
                'Authorization': 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64')
            }
        }

        try {
            let data = await rp(options);
            return data;
        }
        catch(err) {
            return await null;
        };
    }
}