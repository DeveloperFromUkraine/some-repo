import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoadingContainerComponent } from "./loading-container.component";
import { ComponentTest } from "../../test/test-bed/component";
import { MatProgressSpinnerModule } from "@angular/material";


describe('LoadingContainer', () => {
    let fixture: ComponentFixture<LoadingContainerComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([MatProgressSpinnerModule], [LoadingContainerComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoadingContainerComponent);

        fixture.detectChanges();
    }); 

    it('should match snapshot', async () => {
        expect(fixture).toMatchSnapshot();
    });
});