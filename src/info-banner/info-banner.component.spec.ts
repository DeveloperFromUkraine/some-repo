import { ComponentFixture, TestBed } from "@angular/core/testing";
import { InfoBannerComponent } from "index";
import { ComponentTest } from "../../test/test-bed/component";

describe('InfoBannerComponent', () => {
    let fixture: ComponentFixture<InfoBannerComponent>;

    beforeEach(async () => {
        ComponentTest.createTestBed([], [InfoBannerComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InfoBannerComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});