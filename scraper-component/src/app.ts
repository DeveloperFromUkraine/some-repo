
import { Scraper } from './scraper';

let scraper = new Scraper();

scraper.scrape("username", "password").then((res) => {
    console.log('End: ', res);
}).catch((err) => {
    console.log('Error: ' + err);
})