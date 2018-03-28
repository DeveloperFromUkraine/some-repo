import { Attribute, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[ignA11yClick], [routerLink]:not(button), [routerLink]:not(a)' })
export class AccessibleClickDirective {
  constructor(public elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  @HostListener('keyup.enter', ['$event'])
  @HostListener('keyup.space', ['$event'])
  onAccessibleClick(event: KeyboardEvent) {
    event.preventDefault();

    this.elementRef.nativeElement.click();
  }
}

@Directive({
  selector:
    '[ignA11yViewAccessible], ign-field, ign-empty-state-title, ign-empty-state-description,',
})
export class AccessibleViewDirective {
  constructor(
    @Attribute('tabindex') tabIndex: string,
    renderer: Renderer2,
    elementRef: ElementRef
  ) {
    if (!tabIndex) {
      renderer.setAttribute(elementRef.nativeElement, 'tabindex', '0');
    }
  }
}

@Directive({
  selector:
    '[ignA11yViewAccessibleRemove], ign-card-title, ign-card-subtitle, mat-error' +
    'ign-empty-state-image',
})
export class AccessibleRemoveViewDirective {
  constructor(
    @Attribute('tabindex') tabIndex: string,
    renderer: Renderer2,
    elementRef: ElementRef
  ) {
    if (!tabIndex) {
      renderer.setAttribute(elementRef.nativeElement, 'tabindex', '-1');
    }
  }
}
      
@Directive({
  selector:
    'mat-list-item, ign-list-item, ign-list-selection-item',
})
export class ListItemRoleDirective {
  constructor(
    @Attribute('role') role: string,
    //@Attribute('tabindex') tabIndex: string,
    renderer: Renderer2,
    elementRef: ElementRef
  ) {
    if (!role || role) {
      renderer.setAttribute(elementRef.nativeElement, 'role', 'listitem');
    }
  }
}
