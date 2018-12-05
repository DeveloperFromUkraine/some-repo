import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccessibilityModule} from './accessibility.module';

@Component({
  template: `<mat-list-item class="directive"> I am a mat list item </mat-list-item>
    <mat-list-item role="overwriteme" class="directive"> I am also a mat list item </mat-list-item>`,
})
class DirectiveHostComponent {}

describe('Accessibility List Item Role', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  let de: DebugElement[];
  let ne: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccessibilityModule],
      declarations: [DirectiveHostComponent]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    de = fixture.debugElement.queryAll(By.css('.directive'));

    fixture.detectChanges();
  });

  it('should have a role of "listitem" by default', () => {
    ne = de[0].nativeElement;

    expect(ne.getAttribute('role')).toBe('listitem');
  });

  it('should have a role of "listitem" even when a role currently exists', () => {
    ne = de[1].nativeElement;

    expect(ne.getAttribute('role')).toBe('listitem');
  });
});
