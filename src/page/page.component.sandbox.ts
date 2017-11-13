import { sandboxOf } from 'angular-playground';
import { PageComponent } from './page.component';

export default sandboxOf(PageComponent).add('with simple text', {
  template: `<ign-page>Hey playground!</ign-page>`,
});
