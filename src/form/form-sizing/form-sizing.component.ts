import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
// tslint:disable:max-classes-per-file

@Directive({ selector: '[ignSizeSmall], [nuSizeSmall]' })
export class SizingSmallDirective {
  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'max-width', '192px');
    renderer.setElementStyle(el.nativeElement, 'flex', '1');
  }
}

@Directive({ selector: '[ignSizeMedium], [nuSizeMedium]' })
export class SizingMediumDirective implements OnChanges {
  @Input() ignSizeMedium: boolean = null;
  @Input() nuSizeMedium: boolean = null;

  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) {
    this.applyStyleChange();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.ignSizeMedium !== null) {
      if (this.ignSizeMedium) {
        this.applyStyleChange();
      }
    } else if (this.nuSizeMedium !== null) {
      if (this.nuSizeMedium) {
        this.applyStyleChange();
      }
    } else {
      this.applyStyleChange();
    }
  }

  applyStyleChange() {
    this.renderer.setStyle(this.el.nativeElement, 'max-width', '256px');
    this.renderer.setStyle(this.el.nativeElement, 'flex', '2');
  }
}

@Directive({ selector: '[ignSizeLarge], [nuSizeLarge]' })
export class SizingLargeDirective implements OnChanges {
  @Input() nuSizeLarge: boolean = null;
  @Input() ignSizeLarge: boolean = null;

  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) {
    this.applyStyleChange();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.nuSizeLarge !== null) {
      if (this.nuSizeLarge) {
        this.applyStyleChange();
      }
    } else if (this.ignSizeLarge !== null) {
      if (this.ignSizeLarge) {
        this.applyStyleChange();
      }
    } else {
      this.applyStyleChange();
    }
  }

  applyStyleChange() {
    this.renderer.setStyle(this.el.nativeElement, 'max-width', '448px');
    this.renderer.setStyle(this.el.nativeElement, 'flex', '3');
  }
}

@Directive({ selector: '[ignSizeFull], [nuSizeFull]' })
export class SizingFullDirective {
  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'max-width', '100%');
    renderer.setElementStyle(el.nativeElement, 'width', '100%');
  }
}
