export interface Page {
    pageTitle: string;
    pageHtml: string;
    downloadedImageList: DownloadedImage[];
}
export interface DownloadedImage { 
    imageUrl: string;
    downloadedImage: string;
}

export interface PageData {
    [index: string]: string | Subheader[] | TSCode[] | HTMLCode[];
}

export class Subheader {
    tag: string;
    content: string;

    constructor(tag: string, content: string) {
        this.tag = tag;
        this.content = content;
    }
}

export class TSCode {
    tsCode: string;

    constructor(tsCode: string) {
        this.tsCode = tsCode;
    }
}

export class HTMLCode {
    htmlCode: string;

    constructor(htmlCode: string) {
        this.htmlCode = htmlCode;
    }
}