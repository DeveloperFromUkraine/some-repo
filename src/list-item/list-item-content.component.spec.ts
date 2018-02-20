import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListItemContentComponent } from "../index";
import { ComponentTest } from "../../test/test-bed/component";

describe('ListItemContentComponent', () => {
    let fixture: ComponentFixture<ListItemContentComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [ListItemContentComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListItemContentComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});