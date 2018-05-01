import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TranslationMap } from './translation-map';

@Injectable()
export class TranslationService {
  static changeTranslationObservable = new Subject<any>();
  static translationMap = TranslationMap;

  static getTranslation() {
    return TranslationService.translationMap;
  }

  static updateTranslation(translationKey: string, translationValue: string) {
    if (TranslationService.translationMap[translationKey]) {
      TranslationService.translationMap[translationKey] = translationValue;
      TranslationService.changeTranslationObservable.next(TranslationService.translationMap);
    }
  }

  constructor() {}
}
