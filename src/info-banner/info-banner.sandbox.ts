import { sandboxOf } from 'angular-playground';
import { InfoBannerComponent } from './info-banner.component';
import { SharedChildModule } from '../../shared.module';
import { LayoutModule } from '../layout.module';
import { FormsModule } from '@angular/forms';

export default sandboxOf(InfoBannerComponent, {
  imports: [FormsModule, LayoutModule, SharedChildModule],
  providers: [],
  declareComponent: false,
})
  .add('info banner as component with text inside', {
    template: `
      <div style="width: 800px; margin: 16px;">
        <ign-card-title>Form with info messages component</ign-card-title>
          <form (ngSubmit)="submit()">
            <ign-info-banner>
              <ul>
                <li>This is an info message</li>
                <li>This is another info message</li>
              </ul>
            </ign-info-banner>

            <p>Form with an info message</p>

            <ign-card-actions>
              <button mat-button>Submit</button>
            </ign-card-actions>
          </form>
      </div>
  `,
    context: {
      submit() {
        alert('Submitted!');
      },
    },
  })
  .add('info banner as directive with text inside', {
    template: `
      <div style="width: 800px; margin: 16px;">
        <ign-card-title>Form multiple info messages</ign-card-title>
          <ul ignInfoBanner>
            <li>
              <a href="javascript:void(0)" (click)="click1()">The first info message</a>
            </li>
            <li>
              <a href="javascript:void(0)" (click)="click2()">The second info message</a>
            </li>
            <li>The third info message</li>
          </ul>

          <p>Form with an info message as a directive</p>
      </div>
  `,
    context: {
      click1() {
        alert('First info message click');
      },
      click2() {
        alert('Second info message click');
      },
    },
  });
