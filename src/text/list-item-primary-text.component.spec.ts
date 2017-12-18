import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListItemPrimaryTextComponent } from "index";
import { ComponentTest } from "../../test/test-bed/component";

describe('ListItemPrimaryTextComponent', () => {
    let fixture: ComponentFixture<ListItemPrimaryTextComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [ListItemPrimaryTextComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListItemPrimaryTextComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});