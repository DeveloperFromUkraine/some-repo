import { RightDrawerComponent } from 'index';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ComponentTest } from '../../test/test-bed/component';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { MatIconModule } from '@angular/material';

describe('RightDrawerComponent', () => {
    let fixture: ComponentFixture<RightDrawerComponent>;
    let component: RightDrawerComponent;
    let de: DebugElement;
    let ne: HTMLElement;

    beforeEach(async () => {
        await ComponentTest.createTestBed([MatIconModule], [RightDrawerComponent]);
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(RightDrawerComponent);
        component = fixture.componentInstance;

        component.title = 'test';
        fixture.detectChanges();
    });

    it('should create title-container if title is set', () => {
        de = fixture.debugElement.query(By.css('.title-container'));

        expect(de).toBeTruthy();
    });

    it('should net create title-container if title is not set', () => {
        component.title = '';
        
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('.title-container'));

        expect(de).not.toBeTruthy();
    });

    it('should set title', () => {
        de = fixture.debugElement.query(By.css('.title'));
        ne = de.nativeElement;

        expect(ne.textContent).toContain(component.title);
    });

    it('should emit openChange event', () => {
        de = fixture.debugElement.query(By.css('.close-icon'));
        ne = de.nativeElement;
        let spy = jest.fn();

        component.openChange.subscribe(spy);
        ne.dispatchEvent(new Event('click'));

        expect(spy).toHaveBeenCalled();
    });

    it('should call closeDrawer when click event emitted', () => {
        de = fixture.debugElement.query(By.css('.close-icon'));
        ne = de.nativeElement;
        jest.spyOn(component, 'closeDrawer');

        ne.dispatchEvent(new Event('click'));

        expect(component.closeDrawer).toHaveBeenCalled();
    });

    it('should call toggleDrawer when click event emitted', () => {
        de = fixture.debugElement.query(By.css('.close-icon'));
        ne = de.nativeElement;
        jest.spyOn(component, 'toggleDrawer');

        ne.dispatchEvent(new Event('click'));

        expect(component.toggleDrawer).toHaveBeenCalled();
    });

    it('should set open to false when click event emitted', () => {
        de = fixture.debugElement.query(By.css('.close-icon'));
        ne = de.nativeElement;

        component.open = true;
        ne.dispatchEvent(new Event('click'));

        expect(component.open).toBe(false);
    });

    it('should match snapshot', async () => {
        component.title = 'test';

        await fixture.detectChanges();

        expect(fixture).toMatchSnapshot();
    });
});