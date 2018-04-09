import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TranslationMap } from './translation-map';

@Injectable()
export class TranslationService {

    static changeTranslationObservable = new Subject<any>();
    static translationMap = TranslationMap;

    static getTranslation() {
        const savedTranslationMap = localStorage.getItem('TranslationMapIDS')
        if (savedTranslationMap) {
            TranslationService.translationMap = JSON.parse(savedTranslationMap);
        }

        return TranslationService.translationMap;
    }

    static updateTranslation(translationKey: string, translationValue: string) {
        if (TranslationService.translationMap[translationKey]) {
            TranslationService.translationMap[translationKey] = translationValue;

            const translationMapString = JSON.stringify(TranslationService.translationMap);
            localStorage.setItem('TranslationMapIDS', translationMapString);

            TranslationService.changeTranslationObservable.next(TranslationService.translationMap);
        }
    }

    constructor() {}
    
}

