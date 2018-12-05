import {Directive, ElementRef, HostListener} from '@angular/core';

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
