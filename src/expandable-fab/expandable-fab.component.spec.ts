import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpandableFabComponent } from 'index';
import { ComponentTest } from '../../test/test-bed/component';
import { MatIconModule } from '@angular/material';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser';

describe('ExpandableFabComponent', () => {
    let fixture: ComponentFixture<ExpandableFabComponent>;
    let component: ExpandableFabComponent;
    let de: DebugElement;
    let ne: HTMLElement;

    beforeEach(async () => {
        ComponentTest.createTestBed([MatIconModule], [ExpandableFabComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpandableFabComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should trigger handleClick when click event emitted', () => {
        de = fixture.debugElement.query(By.css('.icon-container'));
        let spy = jest.spyOn(component, 'handleClick');

        de.triggerEventHandler('click', null);

        expect(spy).toHaveBeenCalled;
    });

    it('should set activeClass(null) when handleClick triggered', () => {
        de = fixture.debugElement.query(By.css('.icon-container'));

        de.triggerEventHandler('click', null);

        expect(component.activeClass).toBe('active');
    });

    it('should set activeClass(!null) when handleClick triggered', () => {
        de = fixture.debugElement.query(By.css('.icon-container'));

        component.activeClass = 'not null';
        de.triggerEventHandler('click', null);

        expect(component.activeClass).toBe(null);
    });

    it('should have active classes if isOpen is true', async () => {
        component.isOpen = true;

        await fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('.active'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.icon-primary-active'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.icon-secondary-active'))).toBeTruthy();
    });

    it('should not have active class if isOpen is false', () => {
        expect(fixture.debugElement.query(By.css('.active'))).not.toBeTruthy();
        expect(fixture.debugElement.query(By.css('.icon-primary-active'))).not.toBeTruthy();
        expect(fixture.debugElement.query(By.css('.icon-secondary-active'))).not.toBeTruthy();
    });
});