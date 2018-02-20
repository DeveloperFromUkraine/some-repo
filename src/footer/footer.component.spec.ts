import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FooterComponent } from "./footer.component";
import { ComponentTest } from "../../test/test-bed/component";

describe('FooterComponent', () => {
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [FooterComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});