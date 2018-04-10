import { Component, DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentTest } from '../../test/test-bed/component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

import { ToolTipDirective } from './accessibility.directive';

@Component({
    template: `<p class="directive" matTooltip="Iamatooltip"> I am a paragraph with a tooltip. </p>
    <p class="directive" tabindex="-1" aria-label="Iamanarialabel"> I am a paragraph without a tooltip. </p>
    <p class="directive" matTooltip="Iamatooltip"> I am a paragraph with a tooltip and aria label. </p>`,
})
class DirectiveHostComponent {
}

describe('ToolTip', () => {
    let fixture: ComponentFixture<DirectiveHostComponent>;
    let de: DebugElement[];
    let ne: HTMLElement;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [DirectiveHostComponent, ToolTipDirective]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DirectiveHostComponent);
        de = fixture.debugElement.queryAll(By.css('.directive'));
        fixture.detectChanges();
    });

    it('should have a tabindex of 0 by default if no aria label', () => {
        ne = de[0].nativeElement;

        expect(ne.getAttribute('tabindex')).toBe("0");
    });

    it('should have a tabindex of -1 by default if aria label', () => {
        ne = de[1].nativeElement;

        expect(ne.getAttribute('tabindex')).toBe("-1");
    });
    it('should have an aria label different from tooltip if aria label', () => {
        ne = de[1].nativeElement;

        expect(ne.getAttribute('aria-label') === ne.getAttribute('matTooltip')).toBe(false);
    });
    it('should have an aria label same as tooltip if no aria label', () => {
        ne = de[0].nativeElement;

        expect(ne.getAttribute('aria-label') === ne.getAttribute('matTooltip')).toBe(true);
    });
    it('should have no aria label if no mattooltip', () => {
        ne = de[1].nativeElement;

        expect(ne.getAttribute('aria-label') == "Iamanarialabel").toBe(true);
    });
    it('should have tabindex -1 if no mattooltip', () => {
        ne = de[1].nativeElement;

        expect(ne.getAttribute('tabindex') == '-1').toBe(true);
    });
});