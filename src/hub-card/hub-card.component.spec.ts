import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HubCardComponent } from 'index';
import { ComponentTest } from '../../test/test-bed/component';
import { MatIconModule, MatRippleModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core/src/debug/debug_node';

describe('HubCardComponent', () => {
    let fixture: ComponentFixture<HubCardComponent>;
    let component: HubCardComponent;
    let de: DebugElement;
    let ne: HTMLElement;

    beforeEach(async () => {
        ComponentTest.createTestBed([MatIconModule, MatRippleModule], [HubCardComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HubCardComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should be truthy', () => {
        expect(component).toBeTruthy();
    });

    it('should set background color if valid color provided', async () => {
        de = fixture.debugElement.query(By.css('.card-container'));
        ne = de.nativeElement;

        component.color = 'gray';
        await fixture.detectChanges();

        expect(ne.style.backgroundColor).not.toBe("");
    });

    it('should not set background color if invalid color provided', async () => {
        de = fixture.debugElement.query(By.css('.card-container'));
        ne = de.nativeElement;

        component.color = 'sdfsdfsdf';
        await fixture.detectChanges();

        expect(ne.style.backgroundColor).toBe("");
    });

    it('should not set background color if no value passed', () => {
        de = fixture.debugElement.query(By.css('.card-container'));
        ne = de.nativeElement;

        expect(ne.style.backgroundColor).toBe("");
    });

    it('should call handleClick when click event emitted', () => {
        de = fixture.debugElement.query(By.css('.card-container'));
        ne = de.nativeElement;
        let spy = jest.fn();

        component.onClick.subscribe(spy);
        de.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(spy).toHaveBeenCalled();
    });

    it('should call handleClick when keyup.enter event emitted', () => {
        de = fixture.debugElement.query(By.css('.card-container'));
        ne = de.nativeElement;
        let spy = jest.fn();

        component.onClick.subscribe(spy);
        de.triggerEventHandler('keyup.enter', null);
        fixture.detectChanges();

        expect(spy).toHaveBeenCalled();
    });

    it('should set icon if valid icon passed', async () => {
        de = fixture.debugElement.query(By.css('mat-icon'));
        ne = de.nativeElement;

        component.icon = 'checkmark';
        await fixture.detectChanges();

        expect(ne.textContent).toContain(component.icons[component.icon]);
    });

    it('should not set icon if invalid icon passed', async () => {
        de = fixture.debugElement.query(By.css('mat-icon'));
        ne = de.nativeElement;

        component.icon = 'dsfdsfdsfsd';
        await fixture.detectChanges();

        expect(ne.textContent).not.toContain(component.icons[component.icon]);
    });

    it('should not set icon if no value passed', () => {
        de = fixture.debugElement.query(By.css('mat-icon'));
        ne = de.nativeElement;

        expect(ne.textContent).toContain('');
    });

    it('should set text', async () => {
        let title = fixture.debugElement.query(By.css('.primary-text'));
        let subTitle = fixture.debugElement.query(By.css('.secondary-text'));
        let primaryActionText = fixture.debugElement.query(By.css('.action-text'));

        component.title = 'titleTest';
        component.subtitle = 'subTitleTest';
        component.primaryActionText = 'primaryActionTextTest';
        await fixture.detectChanges();

        expect(title.nativeElement.textContent).toContain(component.title);
        expect(subTitle.nativeElement.textContent).toContain(component.subtitle);
        expect(primaryActionText.nativeElement.textContent).toContain(component.primaryActionText);
    });
});