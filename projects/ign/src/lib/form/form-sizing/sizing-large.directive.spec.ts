import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentTest } from '../../../test/test-bed/component';
import { SizingLargeDirective } from './index';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

@Component({
  template: `
        <p class="directive" ignSizeLarge>large</p>
        <p class="directive" nuSizeLarge>large</p>
        <h1 class="directive" [ignSizeLarge]="sizeLarge">largeTrue</h1>
        <h3 class="directive" [nuSizeLarge]="sizeLarge">largeTrue</h3>
        <textarea class="directive" [ignSizeLarge]="sizeLarge">largeFalse</textarea>
        <p class="directive" [nuSizeLarge]="sizeLarge">largeFalse</p>
        <input class="directive" type="text" value="input" [ignSizeLarge]="sizeLarge" />
    `,
})
class DirectiveHostComponent {
  sizeLarge: boolean;
}

describe('Form Sizing Large', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  let component: DirectiveHostComponent;
  let de: DebugElement[];
  const maxWidth = '448px';
  const flex = '3 1 0%';

  beforeEach(() => {
    ComponentTest.createTestBed([], [DirectiveHostComponent, SizingLargeDirective] as Component[]);

    fixture = TestBed.createComponent(DirectiveHostComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    de = fixture.debugElement.queryAll(By.css('.directive'));
  });

  it('should set max-width to 448px', () => {
    expect(de[0].nativeElement.style.maxWidth).toBe(maxWidth);
    expect(de[1].nativeElement.style.maxWidth).toBe(maxWidth);
  });

  it('should set max-width to 448px for ignSizeLarge and nuSizeLarge set to true', () => {
    component.sizeLarge = true;

    expect(de[2].nativeElement.style.maxWidth).toBe(maxWidth);
    expect(de[3].nativeElement.style.maxWidth).toBe(maxWidth);
  });

  it('should set max-width to 448px for ignSizeLarge and nuSizeLarge set to null', () => {
    expect(de[4].nativeElement.style.maxWidth).toBe(maxWidth);
    expect(de[5].nativeElement.style.maxWidth).toBe(maxWidth);
  });

  it('should set flex to 3', () => {
    expect(de[0].nativeElement.style.flex).toBe(flex);
    expect(de[1].nativeElement.style.flex).toBe(flex);
  });

  it('should set flex to 3 for nuSizeLarge and ignSizeLarge set to true', () => {
    component.sizeLarge = true;

    expect(de[2].nativeElement.style.flex).toBe(flex);
    expect(de[3].nativeElement.style.flex).toBe(flex);
  });

  it('should set flex to 3 for nuSizeLarge and ignSizeLarge set to null', () => {
    expect(de[4].nativeElement.style.flex).toBe(flex);
    expect(de[5].nativeElement.style.flex).toBe(flex);
  });

  describe('NgOnChanges', () => {
    let neIgnLarge: HTMLElement;
    let neNuLarge: HTMLElement;
    let directive: SizingLargeDirective;

    beforeEach(() => {
      neIgnLarge = de[5].nativeElement;
      neNuLarge = de[6].nativeElement;
      directive = de[5].injector.get(SizingLargeDirective);

      spyOn(directive, 'applyStyleChange').and.callThrough();
      spyOn(directive, 'ngOnChanges').and.callThrough();
    });

    it('should set max-width to 448px once ngOnChanges is triggered', () => {
      neIgnLarge.style.maxWidth = '256px';
      neNuLarge.style.maxWidth = '256px';
      component.sizeLarge = true;

      fixture.detectChanges();

      expect(directive.ngOnChanges).toHaveBeenCalled();
      expect(directive.applyStyleChange).toHaveBeenCalled();
      expect(neIgnLarge.style.maxWidth).toBe(maxWidth);
      expect(neNuLarge.style.maxWidth).toBe(maxWidth);
    });

    it('should set flex to 3 once ngOnChanges is triggered', () => {
      neIgnLarge.style.flex = '1';
      neNuLarge.style.flex = '1';
      component.sizeLarge = null;

      fixture.detectChanges();

      expect(directive.ngOnChanges).toHaveBeenCalled();
      expect(directive.applyStyleChange).toHaveBeenCalled();
      expect(neIgnLarge.style.flex).toBe(flex);
      expect(neNuLarge.style.flex).toBe(flex);
    });
  });
});
