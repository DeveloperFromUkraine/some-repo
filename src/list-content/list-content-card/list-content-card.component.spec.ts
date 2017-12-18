import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListContentCardComponent } from "index";
import { ComponentTest } from "../../../test/test-bed/component";
import { MatCardModule } from "@angular/material";

describe('ListContentCardComponent', () => {
    let fixture: ComponentFixture<ListContentCardComponent>;

    beforeEach(async () => {
        ComponentTest.createTestBed([MatCardModule], [ListContentCardComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListContentCardComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});