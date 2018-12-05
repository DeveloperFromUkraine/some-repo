import { PlaygroundModule } from 'angular-playground';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: []
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);