import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListItemComponent } from "../index";
import { ComponentTest } from "../../test/test-bed/component";

describe('List Item', () => {
    let fixture: ComponentFixture<ListItemComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [ListItemComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListItemComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});