import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardContainerComponent } from "./index";
import { ComponentTest } from '../../../test/test-bed/component';
import { MatCardModule } from "@angular/material";

describe('CardContainerComponent', () => {
    let fixture: ComponentFixture<CardContainerComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([MatCardModule], [CardContainerComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardContainerComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});