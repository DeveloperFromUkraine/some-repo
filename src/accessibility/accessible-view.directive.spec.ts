import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AccessibleViewDirective } from './accessibility.directive';
import { ComponentTest } from '../../test/test-bed/component';

import { By } from '@angular/platform-browser';

@Component({
    template: `
        <a class="directive" ignA11yView>anchor</a>
        <button class="directive" tabindex="1" ignA11yView>button</button>
        <ign-field class="directive"></ign-field>
        <mat-error class="directive" tabindex="1"></mat-error>
    `
})
class DirectiveHostComponent {

}

describe('Accessible View', () => {
    let fixture: ComponentFixture<DirectiveHostComponent>;
    let de: DebugElement[];
    let ne: HTMLElement;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [DirectiveHostComponent, AccessibleViewDirective]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DirectiveHostComponent);
        de = fixture.debugElement.queryAll(By.css('.directive'));

        fixture.detectChanges();
    });

    it('should set tabindex for attribute directive with no tabindex defined in element', () => {
        ne = de[0].nativeElement;

        expect(ne.getAttribute('tabindex')).toBe('0');
    });

    it('should not set tabindex for attribute directive with tabindex defined in element', () => {
        ne = de[1].nativeElement;

        expect(ne.getAttribute('tabindex')).not.toBe('0');
    });

    it('should set tabindex for element with no tabindex defined in element', () => {
        ne = de[2].nativeElement;

        expect(ne.getAttribute('tabindex')).toBe('0');
    });

    it('should set tabindex for element with tabindex defined', () => {
        ne = de[3].nativeElement;

        expect(ne.getAttribute('tabindex')).not.toBe('0');
    });
});
