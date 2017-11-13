import { ComponentTest } from '../../../../../test/component/component-test';
import { LayoutModule } from '../../layout/layout.module';
import { FieldComponent } from './field.component';

describe('Field Component Tests', () => {
  const FIELD_LABEL = '.label';

  let componentTest: ComponentTest<FieldComponent>;
  let component: FieldComponent;

  beforeEach(async () => {
    componentTest = await ComponentTest.init([LayoutModule], FieldComponent);
    component = componentTest.getComponent();
  });

  describe('when a view field is displayed', () => {
    beforeEach(() => {
      component.label = 'myLabel';
    });

    it('should display the correct values', () => {
      expect(componentTest.getElement(FIELD_LABEL).getText()).toBe('myLabel');
    });
  });
});
