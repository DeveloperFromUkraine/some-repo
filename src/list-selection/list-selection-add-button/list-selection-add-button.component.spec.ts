import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListSelectionAddButtonComponent } from "index";
import { ComponentTest } from "../../../test/test-bed/component";

describe('ListSelectionAddButtonComponent', () => {
    let fixture: ComponentFixture<ListSelectionAddButtonComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [ListSelectionAddButtonComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListSelectionAddButtonComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});