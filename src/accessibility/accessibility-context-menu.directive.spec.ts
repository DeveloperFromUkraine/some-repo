import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentTest } from '../../test/test-bed/component';

import { AccessibleContextMenuViewDirective } from './accessibility.directive';
import { TranslationMap } from '../localization/translation-map';

@Component({
  template: `<button mat-icon-button ignA11yContextMenuViewAccessible>
                <span>
                    <mat-icon class="mat-24 menu">more_vert</mat-icon>
                </span>
            </button>
            <button mat-icon-button ignA11yContextMenuViewAccessible>
                <span>
                    <mat-icon></mat-icon>
                </span>
            </button>
            <button mat-icon-button ignA11yContextMenuViewAccessible>
                <span>
                    <mat-icon class="mat-24 menu">more</mat-icon>
                </span>
            </button>`,
})
class DirectiveHostComponent {}

describe('ContextMenu Accessibility Directive', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  let de: DebugElement[];
  let ne: HTMLElement;

  beforeEach(() => {
    ComponentTest.createTestBed([], [
      DirectiveHostComponent,
      AccessibleContextMenuViewDirective,
    ] as Component[]);

    fixture = TestBed.createComponent(DirectiveHostComponent);
    de = fixture.debugElement.queryAll(By.css('[mat-icon-button]'));

    fixture.detectChanges();
  });

  it('Should have aria-label set to context menu if its a legitimate context menu', () => {
    ne = de[0].nativeElement;

    expect(ne.getAttribute('aria-label')).toContain(TranslationMap['CONTEXT_MENU']);
  });

  it('Should have aria-hidden set to false if its a legitimate context menu', () => {
    ne = de[0].nativeElement;

    expect(ne.getAttribute('aria-hidden')).toContain('false');
  });

  it('Should not have aria-label set to context menu if its not a legitimate context menu (1)', () => {
    ne = de[1].nativeElement;

    expect(ne.getAttribute('aria-label')).toBeNull();
  });

  it('Should not have aria-hidden set to false if its not a legitimate context menu (1)', () => {
    ne = de[1].nativeElement;

    expect(ne.getAttribute('aria-hidden')).toBeNull();
  });

  it('Should not have aria-label set to context menu if its not a legitimate context menu (2)', () => {
    ne = de[2].nativeElement;

    expect(ne.getAttribute('aria-label')).toBeNull();
  });

  it('Should not have aria-hidden set to false if its not a legitimate context menu (2)', () => {
    ne = de[2].nativeElement;

    expect(ne.getAttribute('aria-hidden')).toBeNull();
  });
});
