import './global-jasmine'
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';

// import jasmineRequire from 'jasmine-core/lib/jasmine-core.js';

import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


// window['jasmineRequire'] = jasmineRequire;


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
