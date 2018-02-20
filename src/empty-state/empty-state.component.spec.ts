import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EmptyStateComponent } from "../index";
import { ComponentTest } from "../../test/test-bed/component";


describe('EmptyStateComponent', () => {
    let fixture: ComponentFixture<EmptyStateComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [EmptyStateComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EmptyStateComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});