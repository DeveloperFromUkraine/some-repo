import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListContentComponent, ListContentCardComponent } from "./index";
import { ComponentTest } from "../../test/test-bed/component";

describe('ListContentComponent', () => {
    let fixture: ComponentFixture<ListContentComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [ListContentComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListContentComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});