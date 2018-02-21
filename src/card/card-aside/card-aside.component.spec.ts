import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardAsideComponent } from "./index";
import { ComponentTest } from '../../../test/test-bed/component';

describe('Card Aside', () => {
    let fixture: ComponentFixture<CardAsideComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [CardAsideComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardAsideComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
}); 