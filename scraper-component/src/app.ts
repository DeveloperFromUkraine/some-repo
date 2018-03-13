
import { Scraper } from './scraper';

let scraper = new Scraper();

scraper.scrape("username", "password").then((res: any) => {
    console.log('End:', res);
})

