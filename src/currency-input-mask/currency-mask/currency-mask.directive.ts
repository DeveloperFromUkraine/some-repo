import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ignCurrencyMask]',
  exportAs: 'ignCurrencyMask',
})
export class CurrencyMaskDirective {
  @Input() ignCurrencyMask: (string)[];

  @HostListener('input', ['$event'])
  onInputWrapper($event: any): void {
    const targetValue = $event.target.value;

    if (isNaN(targetValue)) {
      let tempString = targetValue;
      $event.preventDefault();
      $event.target.value = tempString.substr(0, targetValue.length - 1);
    } else {
      if (targetValue.indexOf('.') > -1) {
        let tempString = targetValue;
        if (
          targetValue.substring($event.target.value.indexOf('.'), targetValue.length).length > 5
        ) {
          $event.preventDefault();
          $event.target.value = tempString.substr(0, targetValue.length - 1);
        }
      }
    }
  }
}
