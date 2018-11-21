import { Component } from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { By } from '@angular/platform-browser';
import {AccessibilityModule} from './accessibility.module';

@Component({
  template: `
        <a class="directive" ignA11yViewAccessibleRemove>anchor</a>
        <button class="directive" tabindex="1" ignA11yViewAccessibleRemove>button</button>
        <a class="directive"></a>
    `,
})
class DirectiveHostComponent {}

describe('Accessible Remove View', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  let de: DebugElement[];
  let ne: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccessibilityModule],
      declarations: [DirectiveHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    de = fixture.debugElement.queryAll(By.css('.directive'));

    fixture.detectChanges();
  });

  it('should set tabindex to -1 for attribute directive with no tabindex defined in element', () => {
    ne = de[0].nativeElement;

    expect(ne.getAttribute('tabindex')).toBe('-1');
  });

  it('should not set tabindex for attribute directive with tabindex defined in element', () => {
    ne = de[1].nativeElement;

    expect(ne.getAttribute('tabindex')).toBe('1');
  });

  it('should not set tabindex for element with no tabindex defined in element', () => {
    ne = de[2].nativeElement;

    expect(ne.getAttribute('tabindex')).toBe(null);
  });
});
