import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ComponentTest } from '../../../test/test-bed/component';
import { SizingSmallDirective } from './index';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

@Component({
  template: `
        <p ignSizeSmall>one</p>
        <p nuSizeSmall>two</p>
    `,
})
class DirectiveHostComponent {}

describe('Form Sizing Small', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  let de: DebugElement[];
  const maxWidth = '192px';
  const flex = '1 1 0%';

  beforeEach(() => {
    ComponentTest.createTestBed([], [DirectiveHostComponent, SizingSmallDirective] as Component[]);

    fixture = TestBed.createComponent(DirectiveHostComponent);

    fixture.detectChanges();
    de = fixture.debugElement.queryAll(By.css('p'));
  });

  it('should set max-width to 192px', () => {
    expect(de[0].nativeElement.style.maxWidth).toBe(maxWidth);
    expect(de[1].nativeElement.style.maxWidth).toBe(maxWidth);
  });

  it('should set flex to "1 1 0%"', () => {
    for (let i = 0; i < de.length; i++) {
      expect(de[i].nativeElement.style.flex).toBe(flex);
    }
  });
});
