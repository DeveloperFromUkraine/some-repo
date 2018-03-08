import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ErrorBannerComponent } from "../index";
import { ComponentTest } from "../../test/test-bed/component";

describe('Error Banner', () => {
    let fixture: ComponentFixture<ErrorBannerComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [ErrorBannerComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ErrorBannerComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});