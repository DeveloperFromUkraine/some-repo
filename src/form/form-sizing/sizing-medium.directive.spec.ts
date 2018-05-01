import { Component } from '@angular/core';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { ComponentTest } from '../../../test/test-bed/component';
import { SizingMediumDirective } from './index';
import { By } from '@angular/platform-browser';
import { ElementRef, DebugElement } from '@angular/core';

@Component({
  template: `
        <p class="directive" ignSizeMedium>medium</p>
        <p class="directive" nuSizeMedium>medium</p>
        <h1 class="directive" [ignSizeMedium]="sizeMedium">mediumTrue</h1>
        <h3 class="directive" [nuSizeMedium]="sizeMedium">mediumTrue</h3>
        <textarea class="directive" [ignSizeMedium]="sizeMedium">mediumFalse</textarea>
        <p class="directive" [nuSizeMedium]="sizeMedium">mediumFalse</p>
        <input class="directive" type="text" value="input" [ignSizeMedium]="sizeMedium" />
    `,
})
class DirectiveHostComponent {
  sizeMedium: boolean;
}

describe('Form Sizing Medium', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  let component: DirectiveHostComponent;
  let de: DebugElement[];
  const maxWidth: string = '256px';
  const flex: string = '2';

  beforeEach(async () => {
    await ComponentTest.createTestBed([], [DirectiveHostComponent, SizingMediumDirective]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.queryAll(By.css('.directive'));
  });

  it('should set max-width to 256px', () => {
    expect(de[0].nativeElement.style.maxWidth).toBe(maxWidth);
    expect(de[1].nativeElement.style.maxWidth).toBe(maxWidth);
  });

  it('should set max-width to 256px for ignSizeMedium and nuSizeMedium set to true', () => {
    component.sizeMedium = true;

    expect(de[2].nativeElement.style.maxWidth).toBe(maxWidth);
    expect(de[3].nativeElement.style.maxWidth).toBe(maxWidth);
  });

  it('should set max-width to 256px for ignSizeMedium and nuSizeMedium set to null', () => {
    expect(de[4].nativeElement.style.maxWidth).toBe(maxWidth);
    expect(de[5].nativeElement.style.maxWidth).toBe(maxWidth);
  });

  it('should set flex to 2', () => {
    let de = fixture.debugElement.queryAll(By.css('.directive'));

    expect(de[0].nativeElement.style.flex).toBe(flex);
    expect(de[1].nativeElement.style.flex).toBe(flex);
  });

  it('should set flex to 2 for nuSizeMedium and ignSizeMedium set to true', () => {
    component.sizeMedium = true;

    expect(de[2].nativeElement.style.flex).toBe(flex);
    expect(de[3].nativeElement.style.flex).toBe(flex);
  });

  it('should set flex to 2 for nuSizeMedium and ignSizeMedium set to null', () => {
    expect(de[4].nativeElement.style.flex).toBe(flex);
    expect(de[5].nativeElement.style.flex).toBe(flex);
  });

  describe('NgOnChanges', () => {
    let neIgnMedium: HTMLElement;
    let neNuMedium: HTMLElement;
    let directive: SizingMediumDirective;

    beforeEach(() => {
      neIgnMedium = de[5].nativeElement;
      neNuMedium = de[6].nativeElement;
      directive = de[5].injector.get(SizingMediumDirective);

      jest.spyOn(directive, 'applyStyleChange');
      jest.spyOn(directive, 'ngOnChanges');
    });

    it('should set max-width to 256px once triggered', () => {
      neIgnMedium.style.maxWidth = '450px';
      neNuMedium.style.maxWidth = '450px';
      component.sizeMedium = true;

      fixture.detectChanges();

      expect(directive.ngOnChanges).toHaveBeenCalled();
      expect(directive.applyStyleChange).toHaveBeenCalled();
      expect(neIgnMedium.style.maxWidth).toBe(maxWidth);
      expect(neNuMedium.style.maxWidth).toBe(maxWidth);
    });

    it('should set flex to 2 once triggered', () => {
      neIgnMedium.style.flex = '1';
      neNuMedium.style.flex = '1';
      component.sizeMedium = null;

      fixture.detectChanges();

      expect(directive.ngOnChanges).toHaveBeenCalled();
      expect(directive.applyStyleChange).toHaveBeenCalled();
      expect(neIgnMedium.style.flex).toBe(flex);
      expect(neNuMedium.style.flex).toBe(flex);
    });
  });
});
