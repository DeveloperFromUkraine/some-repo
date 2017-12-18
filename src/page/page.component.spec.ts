import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PageComponent } from "index";
import { ComponentTest } from "../../test/test-bed/component";

describe('PageComponent', () => {
    let fixture: ComponentFixture<PageComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [PageComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});