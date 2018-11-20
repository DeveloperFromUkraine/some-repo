import {AfterContentInit, Attribute, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTooltip]',
})
export class AccessibleTooltipDirective implements AfterContentInit {
  constructor(
    @Attribute(`matTooltip`) private matTooltip: string,
    @Attribute('aria-label') private ariaLabel: string,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngAfterContentInit() {
    if (this.matTooltip && !this.ariaLabel) {
      this.renderer.setAttribute(this.elementRef.nativeElement, `aria-label`, this.matTooltip);
      this.renderer.setAttribute(this.elementRef.nativeElement, 'tabindex', '0');
    }
  }
}
