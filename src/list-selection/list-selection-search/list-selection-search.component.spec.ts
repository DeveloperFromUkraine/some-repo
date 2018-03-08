import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListSelectionSearchComponent } from "./index";
import { ComponentTest } from "../../../test/test-bed/component";
import { ReactiveFormsModule } from "@angular/forms";

describe('List Selection Search', () => {
    let fixture: ComponentFixture<ListSelectionSearchComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([ReactiveFormsModule], [ListSelectionSearchComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListSelectionSearchComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});