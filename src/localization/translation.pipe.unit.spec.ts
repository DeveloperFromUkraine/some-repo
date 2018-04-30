import { TranslationPipe } from './translation.pipe';
import { TranslationService } from './translation.service';
import { ChangeDetectorRef } from '@angular/core';

class MockChangeRef extends ChangeDetectorRef {
    markForCheck() {}
    checkNoChanges() {}
    detach() {}
    reattach() {}
    detectChanges() {}
}

describe("Translation Pipe", () => { 
    /*
        April 25 2017 | Jest Version 22.0.0
        Using beforeEach to create a new instance of the TranslationPipe makes it undefined for
        the second test run and onward. The workaround was to create the new instance of 
        TranslationPipe within each test.
    */

    it("should fire markForCheck when translation mapping is changed", () => { 
        const changeRef: ChangeDetectorRef = new MockChangeRef();
        const translationPipe: TranslationPipe = new TranslationPipe(changeRef);
        const spy = jest.spyOn(changeRef, 'markForCheck');

        TranslationService.updateTranslation("SEARCH", "Search");

        expect(spy).toHaveBeenCalled();
    )};

    it("should translate given a translation key", () => { 
        const translationPipe: TranslationPipe = new TranslationPipe(new MockChangeRef());

        const translation = translationPipe.getTranslation("SEARCH");
        
        expect(translation).toContain("Search");
    )};

    it("should get the translation when a valid string is passed into transform", () => { 
        const translationPipe: TranslationPipe = new TranslationPipe(new MockChangeRef());

        const translation = translationPipe.transform("SEARCH");

        expect(translation).toContain("Search");
    )};

    it("should return nothing if invalid string passed into transform", () => {
        const translationPipe: TranslationPipe = new TranslationPipe(new MockChangeRef());

        const translation = translationPipe.transform("INVALID");

        expect(translation).toBe(undefined);
    )};

    it("should return nothing if empty string passed in transform", () => {
        const translationPipe: TranslationPipe = new TranslationPipe(new MockChangeRef());

        const translation = translationPipe.transform("");

        expect(translation).toBe("");
    )};
});