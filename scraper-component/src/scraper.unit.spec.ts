import { ScraperMock } from './scraper-mock';
import { Data } from './data';
import { PageInformation } from './models';
import { Fixture } from './scraper-mock';

describe('Scrape Component', () => {
    let scraper: ScraperMock
    let fixture: Fixture;
    let data: Data;

    beforeEach(() => {
        data = new Data();
    })

    describe("When calling scrape", () => { 
        it('should return null if data not returned', () => { 
            fixture = {data: null};
            scraper = new ScraperMock(fixture);

            let result = scraper.scrape();

            expect(result).toBeNull();
        });

        it('should return empty list if no data is returned', () => { 
            fixture = {data: {results: []} };
            scraper = new ScraperMock(fixture);
            let spy = spyOn(scraper, 'parsePage').and.returnValue(data.emptyPageInfo);

            let result = scraper.scrape();

            expect(spy).not.toHaveBeenCalled();
            expect(result.length).toBe(0);
        });

        it('should return pageData if data was returned', () => { 
            fixture = {data: data.pagesData};
            scraper = new ScraperMock(fixture);
            let spy = spyOn(scraper, 'parsePage').and.returnValues(data.page1Info, data.page2Info, '');

            let result: PageInformation[] = scraper.scrape();

            expect(spy).toHaveBeenCalledTimes(3);
            expect(result.length).toBe(2);
        });
    });

    describe('When calling parsePage', () => {
        beforeEach(() => {
            fixture = {data: data.pagesData};
            scraper = new ScraperMock(fixture);
            spyOn(scraper, 'getData').and.callFake((pageUrl: string) => {
                let pageTitle: string = pageUrl.substring(0, 5);
                return data.pagesHTML[pageTitle];
            })

            spyOn(scraper, 'fetchImage').and.callFake((imgSrc: string) => {
                return imgSrc;
            })
        })

        it('should return page information for a page with status complete', () => { 
            let page1 = data.page1.title;

            let result = scraper.parsePage(page1, page1);

            expect(result).not.toBe("");
            expect((<PageInformation>result).pageTitle).toContain(data.page1.title);
            expect((<PageInformation>result).pageHtml).toContain(data.page1HTML);
            expect((<PageInformation>result).downloadedImageList.length).toBe(2);
        });

        it('should not return page information for a page with status not complete', () => { 
            let page2 = data.page2.title;

            let result = scraper.parsePage(page2, page2);

            expect(result).toBe("");
        });

        it('should not return page information for a page with no status', () => { 
            let page3 = data.page3.title;

            let result = scraper.parsePage(page3, page3);

            expect(result).toBe("");
        });
    });

    describe('When calling imageDownload', () => {
        beforeEach(() => {
            fixture = {data: data.pagesData};
            scraper = new ScraperMock(fixture);
        })

        it('should return imageId if given valid image src', () => { 
            let imgSrc = '/download/attachments/testImg.png';

            let result = scraper.fetchImage(imgSrc);

            expect(result).not.toBeNull();
            if (result != null) { 
                expect(result.length).not.toBeNull();
            }
        });

        it('should not imageId if given invalid image src', () => { 
            let imgSrc = 'https://ultidev/images/icons/issuetypes/test.png';

            let result = scraper.fetchImage(imgSrc);

            expect(result).toBeNull();
        });
    });
});
