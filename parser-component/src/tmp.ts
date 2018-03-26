import { Parser } from './index';
import { PageData, Page } from './models';
import { Data } from './data';

let data = new Data();
const pages: Page[] = [data.page1];

let parser = new Parser();
let result: PageData[] = parser.parse(pages);
// console.log('***** Output:', result);

result.forEach( (page: PageData) => {
    console.log('*****', page.name, ':', page);
});
