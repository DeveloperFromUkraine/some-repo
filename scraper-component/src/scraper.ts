import { Pages, Page, Links, ResultList, Body, View, PageInformation, DownloadedImage } from './models';
const jsdom = require("jsdom");
const crypto = require("crypto");
const rp = require("request-promise");
const { JSDOM } = jsdom;

const fs = require('fs');

const imageDownloadDir: string = "./imageDownloads"; 
const confluencePageListUrl = 'https://confluence.ultimatesoftware.com/rest/api/content/103390770/child/page?limit=100';
const notSupportedImageUrl = 'https://ultidev/images/icons/issuetypes/';
const imageUrlPrefix = 'https://confluence.ultimatesoftware.com'
export class Scraper {
    username: string;
    password: string;

    scrape = async (username: string, password: string): Promise<PageInformation[] | null> => {   

        this.username =  username ;
        this.password = password;

        let data: Pages = await this.getData(confluencePageListUrl);
        if (data === null) { return null; }

        this.createImageDownloadDir();

        const pageData = await this.getPageInformationList(data);
        return pageData;
    };

    createImageDownloadDir() : void { 
        if (!fs.existsSync(imageDownloadDir)){
            fs.mkdirSync(imageDownloadDir);
        }
    }

    getPageInformationList = async(data : Pages): Promise<PageInformation[] | null> => {
        let pageInformationList : PageInformation[] = []; 

        let i = 0;
        for (i = 0; i < data.results.length; i++) { 
            const page: Page = data.results[i];

            const pageData: any = await this.downloadPage(page._links.self)
            if (pageData != null) { 
                const pageInfo: any = await this.parsePage(pageData, page.title);
                if (pageInfo != "") { 
                    pageInformationList.push(pageInfo);
                }
            }
        }

        return pageInformationList;
    }

    downloadPage = async(pageUrl: string) => { 
        const data: ResultList = await this.getData(pageUrl + '?expand=body.view');
        return data;
    }

    parsePage = async (data : any, title : string) => { 
        let pageInformation: PageInformation = {} as PageInformation; 
        pageInformation.pageTitle = title;
        pageInformation.pageHtml = data.body.view.value;

        //send the confluenceHTML to the Parser
        const dom = new JSDOM(pageInformation.pageHtml);
        const document = dom.window.document;
        const statusElements: HTMLSpanElement[] = document.querySelectorAll(".status-macro");

        if (statusElements.length == 0) { 
            return ""; 
        } 
        
        const status = statusElements[0].textContent;
        if (status == null || status.toLowerCase().indexOf('complete') == -1 ) { return "" }

        const imageLinks: HTMLImageElement[] = document.querySelectorAll("img")
        pageInformation.downloadedImageList = [];

        let i: 0;
        for (i = 0; i < imageLinks.length; i++) { 
            const imageLink = imageLinks[i];
            const downloadedImageName = await this.fetchImage(imageLink.src);
            if (downloadedImageName != null) { 
                let downloadedImage = {imageUrl : imageLink.src, downloadedImage : downloadedImageName} as DownloadedImage;
                pageInformation.downloadedImageList.push(downloadedImage);
            }
        }

        return pageInformation;
    }

    fetchImage = async (imageUrl: string): Promise<string | null> => {
        if (imageUrl.startsWith(notSupportedImageUrl)) { 
            return null;
        }
        else if (imageUrl.startsWith("/")) { 
            if (imageUrl.startsWith("/download")) { 
                imageUrl = imageUrlPrefix + imageUrl;
            }
            else { return null }
        }

        const imageData = await this.getData(imageUrl);
        if (!imageData) { 
            return null;
        }
        
        return this.saveImage(imageData);
    }

    saveImage (imageData: string) : string  {
        const imageId = crypto.randomBytes(20).toString('hex') + ".png";

        const buffer = Buffer.from(imageData, 'utf8');
        if (fs.existsSync(imageDownloadDir)){
            fs.writeFileSync(imageDownloadDir + "/" + imageId, buffer);
        } else {
            throw new Error("./imageDownloads folder can not be found or written to");
        }
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

        let data = await rp(options);
        return data;
    }
}