import { CenterComponent } from "center/center.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentTest } from "../../test/test-bed/component";


describe('CenterComponent', () => {
    let fixture: ComponentFixture<CenterComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [CenterComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CenterComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});