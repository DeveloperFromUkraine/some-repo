import {AfterContentInit, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  /* tslint:disable-next-line */
  selector: 'mat-list-item, ign-list-item, ign-list-selection-item',
})
export class AccessibleListItemRoleDirective implements AfterContentInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterContentInit() {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'role', 'listitem');
  }
}
