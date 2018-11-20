import {Attribute, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  /* tslint:disable-next-line */
  selector: 'mat-list-item, ign-list-item, ign-list-selection-item',
})
export class AccessibleListItemRoleDirective {
  constructor(@Attribute('role') role: string, renderer: Renderer2, elementRef: ElementRef) {
    renderer.setAttribute(elementRef.nativeElement, 'role', 'listitem');
  }
}
