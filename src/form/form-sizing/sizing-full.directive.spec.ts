import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ComponentTest } from '../../../test/test-bed/component';
import { SizingFullDirective } from './index';
import { By } from '@angular/platform-browser';

@Component({
  template: `
        <p ignSizeFull>one</p>
        <p nuSizeFull>two</p>
    `,
})
class DirectiveHostComponent {}

describe('Form Sizing Full', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  let de: DebugElement[];
  const maxWidth = '100%';
  const width = '100%';

  beforeEach(() => {
    ComponentTest.createTestBed([], [DirectiveHostComponent, SizingFullDirective] as Component[]);

    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
    de = fixture.debugElement.queryAll(By.css('p'));
  });

  it('should set max-width to 100%', () => {
    expect(de[0].nativeElement.style.maxWidth).toBe(maxWidth);
    expect(de[1].nativeElement.style.maxWidth).toBe(maxWidth);
  });

  it('should set width to 100%', () => {
    expect(de[0].nativeElement.style.width).toBe(width);
    expect(de[1].nativeElement.style.width).toBe(width);
  });
});
