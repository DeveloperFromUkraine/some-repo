import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { TranslationService } from './translation.service';
@Pipe({
  name: 'translateIDS',
  pure: false,
})
export class TranslationPipe implements PipeTransform {
  constructor(private _ref: ChangeDetectorRef) {
    TranslationService.changeTranslationObservable.subscribe(translation => {
      this._ref.markForCheck();
    });
  }

  transform(translationKey: string): any {
    if (!translationKey || translationKey.length === 0) {
      return translationKey;
    }

    return this.getTranslation(translationKey);
  }

  getTranslation(translationKey: string) {
    const translationMap = TranslationService.getTranslation();
    return translationMap[translationKey] || translationKey;
  }
}
