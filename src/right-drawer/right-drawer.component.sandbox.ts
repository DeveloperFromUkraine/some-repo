import { sandboxOf } from 'angular-playground';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedChildModule } from 'app/modules/shared.module';
import { RightDrawerComponent } from './right-drawer.component';
import { MatButtonModule } from '@angular/material';

export default sandboxOf(RightDrawerComponent, {
  imports: [RouterTestingModule.withRoutes([]), SharedChildModule, MatButtonModule],
  declarations: [],
}).add('standalone', {
  template: `
    <ign-right-drawer [startOpen]="true" title="drawer title">
      <ign-list-selection-item
        key="1"
        title="meow"
        subtitle="meow subtitle"
      >
      <ign-list-selection-item
        key="2"
        title="meow"
        subtitle="meow subtitle"
      >
    </ign-right-drawer>
  `,
});
