import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentTest } from '../../test/test-bed/component';

import { ToolTipDirective } from './accessibility.directive';

@Component({
  template: `<p class="directive" matTooltip="Iamatooltip"> I am a paragraph with a tooltip. </p>
    <p class="directive" tabindex="-1" aria-label="Iamanarialabel"> I am a paragraph without a tooltip. </p>
    <p class="directive" tabindex="-1" matTooltip="Iamatooltip" aria-label="Iamanarialabel"> I am a paragraph with both.</p>
    <p class="directive" tabindex="-1"> I am a paragraph without neither. </p>`,
})
class DirectiveHostComponent {}

describe('Accessibility ToolTip', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  let de: DebugElement[];
  let ne: HTMLElement;

  beforeEach(() => {
    ComponentTest.createTestBed([], [DirectiveHostComponent, ToolTipDirective] as Component[]);

    fixture = TestBed.createComponent(DirectiveHostComponent);
    de = fixture.debugElement.queryAll(By.css('.directive'));

    fixture.detectChanges();
  });

  it('should set tabindex to 0 if matToolTip exists and aria label doesnt exist', () => {
    ne = de[0].nativeElement;

    expect(ne.getAttribute('tabindex')).toBe('0');
  });

  it('should set aria-label to matToolTip if matToolTip exists and aria label doesnt exist', () => {
    ne = de[0].nativeElement;

    expect(ne.getAttribute('aria-label') === ne.getAttribute('matTooltip')).toBeTruthy();
  });

  it('should not change tabindex if aria label is set', () => {
    ne = de[1].nativeElement;

    expect(ne.getAttribute('tabindex')).toBe('-1');
  });

  it('should not change aria-label if aria label is set', () => {
    ne = de[1].nativeElement;

    expect(ne.getAttribute('aria-label') === 'Iamanarialabel').toBeTruthy();
  });

  it('should not change tabindex if both are present', () => {
    ne = de[2].nativeElement;

    expect(ne.getAttribute('tabindex') === '-1').toBeTruthy();
  });

  it('should not change aria-label if both are present', () => {
    ne = de[2].nativeElement;

    expect(ne.getAttribute('aria-label') === 'Iamanarialabel').toBeTruthy();
  });

  it('should not change tabindex if neither are present', () => {
    ne = de[3].nativeElement;

    expect(ne.getAttribute('tabindex') === '-1').toBeTruthy();
  });

  it('should not change aria-label if neither are present', () => {
    ne = de[3].nativeElement;

    expect(ne.getAttribute('aria-label')).toBeNull();
  });
});
