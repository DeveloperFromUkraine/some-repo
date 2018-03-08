import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DateRangeComponent } from './date-range.component';
import { ComponentTest } from "../../test/test-bed/component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from "@angular/material";

describe('Date Range', () => {
    let fixture: ComponentFixture<DateRangeComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            ReactiveFormsModule, MatNativeDateModule], [DateRangeComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DateRangeComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});