import { ComponentTest } from '../../test/test-bed/component';
import { ExpandableFabItemComponent } from 'index';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';

describe('ExpandableFabItemComponent', () => {
    let fixture: ComponentFixture<ExpandableFabItemComponent>;
    let component: ExpandableFabItemComponent;
    let de: DebugElement;
    let ne: HTMLElement;

    beforeEach(async () => {
        await ComponentTest.createTestBed([MatIconModule], [ExpandableFabItemComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpandableFabItemComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should set tooltipText', async () => {
        de = fixture.debugElement.query(By.css('.mat-tooltip'));
        ne = de.nativeElement;

        component.tooltipText = 'toolTip';
        await fixture.detectChanges();

        expect(ne.textContent).toEqual(component.tooltipText);
    });

    it('should set icon', async () => {
        de = fixture.debugElement.query(By.css('mat-icon'));
        ne = de.nativeElement;

        component.icon = 'email';
        await fixture.detectChanges();

        expect(ne.textContent).toContain(component.icon);
    });

    it('should set href', async () => {
        de = fixture.debugElement.query(By.css('a'));
        ne = de.nativeElement;

        component.href = 'updatedHref';
        await fixture.detectChanges();

        expect(ne.getAttribute('href')).toBe(component.href);
    });

    it('should emit clicked event', () => {
        de = fixture.debugElement.query(By.css('a'));
        let spy = jest.fn();

        component.clicked.subscribe(spy);
        de.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(spy).toHaveBeenCalled();
    });

    it('should match snapshot', async () => {
        component.tooltipText = 'toolTip';
        component.icon = 'email';
        component.href = 'updatedHref';
        
        await fixture.detectChanges();

        expect(fixture).toMatchSnapshot();
    });
});