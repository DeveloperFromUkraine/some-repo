import { sandboxOf } from 'angular-playground';
import { SharedChildModule } from 'app/modules/shared.module';
import { FieldComponent } from './field.component';

export default sandboxOf(FieldComponent, {
  imports: [SharedChildModule],
  declarations: [],
  providers: [],
  declareComponent: false,
}).add('standalone', {
  template: `<ign-field label="Label">Value</ign-field>`,
  styles: [],
});
