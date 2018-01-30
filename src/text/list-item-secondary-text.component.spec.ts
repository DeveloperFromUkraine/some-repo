import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListItemSecondaryTextComponent } from "index";
import { ComponentTest } from "../../test/test-bed/component";

describe('ListItemSecondaryTextComponent', () => {
    let fixture: ComponentFixture<ListItemSecondaryTextComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [ListItemSecondaryTextComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListItemSecondaryTextComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});