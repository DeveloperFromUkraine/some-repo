import {Attribute, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[matTooltip]',
})
export class AccessibleTooltipDirective {
  constructor(
    @Attribute(`matTooltip`)
        matTooltip: string,
    @Attribute('aria-label') ariaLabel: string,
    renderer: Renderer2,
    elementRef: ElementRef
  ) {
    if (matTooltip && !ariaLabel) {
      renderer.setAttribute(elementRef.nativeElement, `aria-label`, matTooltip);
      renderer.setAttribute(elementRef.nativeElement, 'tabindex', '0');
    }
  }
}
