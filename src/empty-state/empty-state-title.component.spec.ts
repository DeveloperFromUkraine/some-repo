import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EmptyStateTitleComponent } from "../index";
import { ComponentTest } from "../../test/test-bed/component";

describe('Empty State Title', () => {
    let fixture: ComponentFixture<EmptyStateTitleComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [EmptyStateTitleComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EmptyStateTitleComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});