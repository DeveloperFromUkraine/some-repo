import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListContentPanelComponent } from "index";
import { ComponentTest } from "../../../test/test-bed/component";


describe('ListContentPanelComponent', () => {
    let fixture: ComponentFixture<ListContentPanelComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [ListContentPanelComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListContentPanelComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});