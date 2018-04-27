import { TranslationService } from './translation.service';

describe("Translation Service", () => { 
    it("should update new key-value translations", () => { 
        TranslationService.updateTranslation("SEARCH", "newSearch");

        const translationMap = TranslationService.getTranslation();
        expect(translationMap["SEARCH"]).toContain("newSearch");
    });
}