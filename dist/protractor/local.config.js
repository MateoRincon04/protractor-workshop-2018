"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
exports.config = {
    framework: 'jasmine',
    specs: ['../test/google.spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
    },
    capabilities: {
        browserName: 'chrome',
        count: 1,
        chromeOptions: {
            args: ['--headless'],
        },
    },
};
//# sourceMappingURL=local.config.js.map