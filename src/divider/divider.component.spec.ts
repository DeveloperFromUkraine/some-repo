import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DividerComponent } from "index";
import { ComponentTest } from "../../test/test-bed/component";


describe('DividerComponent', () => {
    let fixture: ComponentFixture<DividerComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [DividerComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DividerComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});