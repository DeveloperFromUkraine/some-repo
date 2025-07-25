import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';

PlaygroundModule.configure({
  selector: 'app-root',
  overlay: true,
  modules: [],
});

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
