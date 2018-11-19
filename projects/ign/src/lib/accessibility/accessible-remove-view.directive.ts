import { AfterContentInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[ignA11yViewAccessibleRemove], mat-error, ign-empty-state-image',
})
export class AccessibleRemoveViewDirective implements AfterContentInit {
    // tslint:disable-next-line:no-input-rename
    @Input('tabindex') tabIndex: string;
    constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

    ngAfterContentInit() {
        if (typeof this.tabIndex === 'undefined') {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'tabindex', '-1');
        }
    }
}
