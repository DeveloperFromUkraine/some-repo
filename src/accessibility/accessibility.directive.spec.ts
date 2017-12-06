import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ComponentTest } from '../../test/test-bed/component';
import { AccessibleClickDirective } from '../accessibility/accessibility.directive';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <button class="directive" ignA11yClick>button</button>
        <button class="directive" routerLink="*">routerLink</button>
        <a class="directive" src="#" routerLink="*">anchor</a>
    `
})
class DirectiveHostComponent {

}

describe('AccessibleClickDirective', () => {
    let fixture: ComponentFixture<DirectiveHostComponent>;
    let de: DebugElement[];
    let directive: AccessibleClickDirective;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [DirectiveHostComponent, AccessibleClickDirective]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DirectiveHostComponent);
        fixture.detectChanges();
        de = fixture.debugElement.queryAll(By.css('.directive'));                
    });

    it('should be truthy', () => {
        directive = de[0].injector.get(AccessibleClickDirective);


        expect(directive).toBeTruthy();
    });

    it('should trigger onAccessibleClick when keyup.enter event emitted', () => {
        directive = de[0].injector.get(AccessibleClickDirective);
        let ne: HTMLElement = de[0].nativeElement;
        let spy = jest.spyOn(directive, 'onAccessibleClick').mockImplementation(() => {
            ne.style.color = 'blue';
        });

        de[0].triggerEventHandler('keyup.enter', null);
        fixture.detectChanges();

        expect(ne.style.color).toBe('blue');
        expect(directive.onAccessibleClick).toHaveBeenCalled();
    });

    it('should not trigger onAccessibleClick with routerLink in button', () => {
        directive = de[1].injector.get(AccessibleClickDirective);
        let ne: HTMLElement = de[1].nativeElement;
        let spy = jest.spyOn(directive, 'onAccessibleClick').mockImplementation(() => {
            ne.style.color = 'red';
        });

        de[1].triggerEventHandler('keyup.enter', null);
        fixture.detectChanges();

        expect(directive.onAccessibleClick).toHaveBeenCalled();
    });

    it('should not trigger onAccessibleClick with routerLink in button', () => {
        directive = de[2].injector.get(AccessibleClickDirective);
        let ne: HTMLElement = de[2].nativeElement;
        let spy = jest.spyOn(directive, 'onAccessibleClick').mockImplementation(() => {
            ne.style.color = 'red';
        });

        de[2].triggerEventHandler('keyup.enter', null);
        fixture.detectChanges();

        expect(directive.onAccessibleClick).toHaveBeenCalled();
    });
});