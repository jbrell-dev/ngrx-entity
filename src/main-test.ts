import './polyfills';

import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot0.js';
import 'jasmine-core/lib/jasmine-core/boot1.js';

import './test';

(function bootstrap() {
    if ((window as any).jasmineRef) {
        location.reload();
        console.log('reloading')
        return;
    }
    console.log('set jasmineRef')
    window.onload?.(new Event('anything'));
    (window as any).jasmineRef = jasmine.getEnv();
})();
