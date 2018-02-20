import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListSelectionAddButtonComponent } from "./index";
import { ComponentTest } from "../../../test/test-bed/component";
import { MatIconModule } from "@angular/material";

describe('ListSelectionAddButtonComponent', () => {
    let fixture: ComponentFixture<ListSelectionAddButtonComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([MatIconModule], [ListSelectionAddButtonComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListSelectionAddButtonComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});