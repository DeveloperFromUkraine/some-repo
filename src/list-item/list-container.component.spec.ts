import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListContainerComponent } from "index";
import { ComponentTest } from "../../test/test-bed/component";

describe('ListContainerComponent', () => {
    let fixture: ComponentFixture<ListContainerComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [ListContainerComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListContainerComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});