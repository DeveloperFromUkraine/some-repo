import { TranslationService } from './translation.service';

describe('Translation Service', () => {
  it('should update new key-value translations', () => {
    TranslationService.updateTranslation('SEARCH', 'newSearch');

    const translationMap = TranslationService.getTranslation();

    expect(translationMap['SEARCH']).toContain('newSearch');
  });

  it('should not update if key is invalid', () => {
    TranslationService.updateTranslation('INVALID', 'newSearch');

    const translationMap = TranslationService.getTranslation();

    expect(translationMap['INVALID']).toBeUndefined();
  });
});
