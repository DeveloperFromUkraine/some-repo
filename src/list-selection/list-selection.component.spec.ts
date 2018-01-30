import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListSelectionComponent } from "index";
import { ComponentTest } from "../../test/test-bed/component";

describe('ListSelectionComponent', () => {
    let fixture: ComponentFixture<ListSelectionComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [ListSelectionComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListSelectionComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});