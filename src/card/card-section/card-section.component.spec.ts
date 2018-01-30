import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardSectionComponent } from "index";
import { ComponentTest } from '../../../test/test-bed/component';

describe('CardSectionComponent', () => {
    let fixture: ComponentFixture<CardSectionComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [CardSectionComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardSectionComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    }); 
});