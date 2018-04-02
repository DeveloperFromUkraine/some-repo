import { Attribute, Directive, ElementRef, HostListener, Renderer2, AfterViewInit } from '@angular/core';

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
  selector: '[ignA11yContextMenuViewAccessible], button',
})
export class AccessibleContextMenuViewDirective implements AfterViewInit {
  elementRef: ElementRef;
  renderer: Renderer2;
  ariaLabel: string;

  constructor(
    @Attribute('aria-label') ariaLabel: string,
    renderer: Renderer2,
    elementRef: ElementRef
  ) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.ariaLabel = ariaLabel;
  }

  ngAfterViewInit() {
    if (this.ariaLabel) {
      return;
    }
    const buttonViewChildren: HTMLCollection = this.elementRef.nativeElement.children;

    for (let i = 0; i < buttonViewChildren.length; i++) {
      if (buttonViewChildren.item(i).localName === 'span') {
        const spanChildren = buttonViewChildren.item(i).children;
        if (
          spanChildren.length &&
          spanChildren.item(0).localName === 'mat-icon' &&
          spanChildren.item(0).innerHTML === 'more_vert'
        ) {
          this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-label', 'Context Menu');
          this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-hidden', 'false');
        }
      }
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
    renderer: Renderer2,
    elementRef: ElementRef
  ) 
  {
    renderer.setAttribute(elementRef.nativeElement, 'role', 'listitem');
  }
}

@Directive({
  selector:
    '[matTooltip]',
})

export class ToolTipDirective {
  constructor(
    @Attribute(`matTooltip`) matTooltip: string,
    @Attribute('aria-label') ariaLabel: string,
    renderer: Renderer2,
    elementRef: ElementRef
  ) 
  {
    if (matTooltip && !ariaLabel) {
      renderer.setAttribute(elementRef.nativeElement, `aria-label`, matTooltip);
      renderer.setAttribute(elementRef.nativeElement, 'tabindex', '0');
    }
  }
}