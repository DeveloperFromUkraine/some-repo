import {AfterViewInit, Attribute, ChangeDetectorRef, Directive, ElementRef, Renderer2} from '@angular/core';
import { TranslationPipe } from '../localization/translation.pipe';

@Directive({
  selector: '[ignA11yContextMenuViewAccessible], button',
})
export class AccessibleContextMenuViewDirective implements AfterViewInit {
  elementRef: ElementRef;
  renderer: Renderer2;
  ariaLabel: string;
  translatePipe: TranslationPipe;

  constructor(
    @Attribute('aria-label') ariaLabel: string,
    renderer: Renderer2,
    elementRef: ElementRef,
    changeRef: ChangeDetectorRef
  ) {
      this.elementRef = elementRef;
      this.renderer = renderer;
      this.ariaLabel = ariaLabel;
      this.translatePipe = new TranslationPipe(changeRef);
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
          this.renderer.setAttribute(
            this.elementRef.nativeElement,
            'aria-label',
            this.translatePipe.transform('CONTEXT_MENU')
          );
          this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-hidden', 'false');
        }
      }
    }
  }
}
