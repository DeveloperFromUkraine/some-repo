import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoadingContainer } from "loading-container/loading-container.component";
import { ComponentTest } from "../../test/test-bed/component";
import { MatProgressSpinnerModule } from "@angular/material";


describe('LoadingContainer', () => {
    let fixture: ComponentFixture<LoadingContainer>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([MatProgressSpinnerModule], [LoadingContainer]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoadingContainer);
    }); 

    it('should match snapshot', async () => {
        expect(fixture).toMatchSnapshot();
    });
});