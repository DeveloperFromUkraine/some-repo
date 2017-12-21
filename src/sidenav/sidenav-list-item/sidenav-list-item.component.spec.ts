import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SideNavListItemComponent } from './index';
import { ComponentTest } from "../../../test/test-bed/component";
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";
import { EventEmitter } from "@angular/core/src/event_emitter";
import { dispatchEvent } from "@angular/core/src/view/util";

describe('SideNavListItemComponent', () => {
    let fixture: ComponentFixture<SideNavListItemComponent>;
    let component: SideNavListItemComponent;
    let de: DebugElement;
    let ne: HTMLElement;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [SideNavListItemComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SideNavListItemComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should set icon', async () => {
        component.icon = 'icon';

        await fixture.detectChanges();
        ne = fixture.debugElement.query(By.css('.app-link-icon')).nativeElement;

        expect(ne.textContent).toContain(component.icon);
    });

    it('should set description', async () => {
        component.description = 'description';

        await fixture.detectChanges();
        ne = fixture.debugElement.query(By.css('.app-link-text')).nativeElement;

        expect(ne.textContent).toContain(component.description);
    });

    /*it('should call handleClick with event', () => {
        let spy = jest.spyOn(component, 'handleClick');
        let event = new Event('keyup.enter');

        component.handleClick(event);
        fixture.detectChanges();

        expect(spy).toHaveBeenCalledWith(event);
    });*/

    xit('should emit onClick when click event emitted', () => {
        de = fixture.debugElement.query(By.css('.app-link'));
        ne = de.nativeElement;
        let spy = jest.fn();
        let event = new Event('click');

        component.onClick.subscribe(spy);
        ne.dispatchEvent(event);
        fixture.detectChanges();

        expect(spy).toHaveBeenCalled();
    });

    it('should call handleClick when keyup.enter event emitted', () => {
        de = fixture.debugElement.query(By.css('.app-link'));
        ne = de.nativeElement;
        let event = new KeyboardEvent('keyup.enter');
        jest.spyOn(component, 'handleClick');
        //let spy = jest.spyOn(window, 'dispatchEvent');
        
        //window.dispatchEvent(event);
        de.triggerEventHandler('keyup.enter', {});
        //ne.dispatchEvent(event);
        //document.dispatchEvent(event);
        
        fixture.detectChanges();

        //expect(spy).toHaveBeenCalledWith(event);
        expect(component.handleClick).toHaveBeenCalled();
    });

    it('should emit onClick when keyup.space event emitted', () => {

    });

    it('should emit onClick event with key value', async () => {

    });

    it('should match snapshot', async () => {
        component.icon = 'mail';
        component.description = 'test description';

        await fixture.detectChanges();
        
        expect(fixture).toMatchSnapshot();
    });
});