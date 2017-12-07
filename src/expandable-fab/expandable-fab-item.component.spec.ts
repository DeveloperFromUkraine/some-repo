import { ComponentTest } from '../../test/test-bed/component';
import { ExpandableFabItemComponent } from 'index';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';

describe('ExpandableFabItemComponent', () => {
    let fixture: ComponentFixture<ExpandableFabItemComponent>;
    let component: ExpandableFabItemComponent;

    beforeEach(async () => {
        await ComponentTest.createTestBed([MatIconModule], [ExpandableFabItemComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpandableFabItemComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should be truthy', () => {
        expect(component).toBeTruthy();
    });

    it('should set tooltipText', async () => {
        let ne: HTMLElement = fixture.debugElement.query(By.css('.mat-tooltip')).nativeElement;

        component.tooltipText = 'toolTip';
        await fixture.detectChanges();

        expect(ne.textContent).toEqual(component.tooltipText);
    });

    it('should set icon', async () => {
        let ne: HTMLElement = fixture.debugElement.query(By.css('mat-icon')).nativeElement;

        component.icon = 'email';
        await fixture.detectChanges();

        expect(ne.textContent).toContain(component.icon);
    });

    it('should set href', async () => {
        let ne: HTMLElement = fixture.debugElement.query(By.css('a')).nativeElement;

        component.href = 'updatedHref';
        await fixture.detectChanges();

        expect(ne.getAttribute('href')).toBe(component.href);
    });

    it('should emit clicked event', () => {
        let de: DebugElement = fixture.debugElement.query(By.css('a'));
        let ne: HTMLElement = de.nativeElement;
        let spy = jest.fn();

        component.clicked.subscribe(spy);
        de.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(spy).toHaveBeenCalled();
    });
});