import { AfterContentInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector:
  '[ignA11yViewAccessible], ign-field, ign-empty-state-title, ign-empty-state-description,' +
  'ign-card-title, ign-card-section-title, ign-card-section-subtitle, ign-footer, ign-text-list-item,' +
  'ign-list-selection-item',
})
export class AccessibleViewDirective implements AfterContentInit {
  /* tslint:disable-next-line:no-input-rename */
  @Input('tabindex') tabIndex: string;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterContentInit() {
    if (typeof this.tabIndex === 'undefined') {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'tabindex', '0');
    }
  }
}
