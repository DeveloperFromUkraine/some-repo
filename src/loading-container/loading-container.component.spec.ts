import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoadingContainerComponent } from "./loading-container.component";
import { ComponentTest } from "../../test/test-bed/component";
import { MatProgressSpinnerModule } from "@angular/material";
import { DebugElement } from "@angular/core/src/debug/debug_node";
import { By } from '@angular/platform-browser';


describe('LoadingContainer', () => {
    let fixture: ComponentFixture<LoadingContainerComponent>;
    let component: LoadingContainerComponent;
    let de: DebugElement;
    let ne: HTMLElement;

    beforeEach(async () => {
        await ComponentTest.createTestBed([MatProgressSpinnerModule], [LoadingContainerComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoadingContainerComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    }); 

    it('should have spinner-container if loading', async () => {
        component.pastDelay = true;

        await fixture.detectChanges();
        de = fixture.debugElement.query(By.css('.spinner-container'));

        expect(de).toBeTruthy();
    });

    it('should not have spinner-container if not loading', async () => {
        component.loading = false;

        await fixture.detectChanges();
        de = fixture.debugElement.query(By.css('.spinner-container'));

        expect(de).toBeNull();
    });

    it('should match snapshot', async () => {
        expect(fixture).toMatchSnapshot();
    });
});