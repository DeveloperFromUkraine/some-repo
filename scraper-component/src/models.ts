//Class for storing all page links
export interface Links {
    self: string;
}

export interface Page {
    id: string;
    title: string;
    _links: Links;
}

export interface Pages {
    results: Page[];
}

//Class for storing single plage response
export interface View { 
    value : string;
}

export interface Body{ 
    view : View;
}

export interface ResultList { 
    body : Body;
}

//Class for storing json output
export interface DownloadedImage { 
    imageUrl: string;
    downloadedImage: string;
}

export interface PageInformation { 
    pageTitle: string;
    pageHtml: string;
    downloadedImageList: DownloadedImage[];
}


