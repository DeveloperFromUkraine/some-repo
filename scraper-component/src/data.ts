import { Pages, Page, PageInformation, ResultList } from './models';

export class Data {
    page1: Page = {id: '1', title: 'page1', _links: {self: 'link1'}};
    page2: Page = {id: '2', title: 'page2', _links: {self: 'link2'}};
    page3: Page = {id: '3', title: 'page3', _links: {self: 'link3'}};

    pagesData: Pages = {results: [this.page1, this.page2, this.page3]};

    page1HTML: string = `<div> \n
    <span class=\ "status-macro\">Complete</span>
    <h2>List</h2>
    <ul>\n
    <li>List item 1\n
        <ul>\n
            <li>Sublist item 1</li>\n </ul>
    </li>\n
    <li> <span> <img src=\"/download/attachments/testImg.png\" /> </span> </li>
    <li> <span> <img src=\"https://ultidev/images/icons/issuetypes/test.png\" /> </span> </li>
    </ul>\n </div>`;
    page2HTML: string = `<div> \n
    <span class=\ "status-macro\">Not Ready</span>
    <h2>Table</h2>
    <table>\n <tbody> <tr>
        <th> <h2>Table</h2> </th>
        <td>Table Data 1</td>
        <td> <span> <img src=\"/download/attachments/testImg.png\" /> </span> <td>
        <td>
            <ul>\n
            <li>List item 1</li>\n
            </ul>\n  
        </td>
    </tr> </tbody> </table>\n
    </div>`;
    page3HTML: string = `<div> \n
    <h2>Empty</h2>
    </div>`;

    emptyPageInfo: PageInformation = {pageTitle: '', pageHtml: '', downloadedImageList: []};
    page1Info: PageInformation = {pageTitle: this.page1.title, pageHtml: this.page1HTML, downloadedImageList: []};
    page2Info: PageInformation = {pageTitle: this.page2.title, pageHtml: this.page2HTML, downloadedImageList: []};
    page3Info: PageInformation = {pageTitle: this.page3.title, pageHtml: this.page3HTML, downloadedImageList: []};

    pagesHTML: any = {
        page1: <ResultList>{body: {view: {value: this.page1HTML}}},
        page2: <ResultList>{body: {view: {value: this.page2HTML}}},
        page3: <ResultList>{body: {view: {value: this.page3HTML}}},
    }
}