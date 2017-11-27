import { sandboxOf } from 'angular-playground';
import { ErrorBannerComponent } from './error-banner.component';

export default sandboxOf([ErrorBannerComponent])
  .add('error banner as component with text inside', {
    template: `
  <div>
    <ign-error-banner>error</ign-error-banner>
  </div>
  `,
  })
  .add('error banner as directive with text inside', {
    template: `
  <div ignErrorBanner>
    error
  </div>
  `,
  });
