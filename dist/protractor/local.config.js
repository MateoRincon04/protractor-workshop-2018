"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    framework: 'jasmine',
    specs: ['../test/google.spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        count: 1,
        chromeOptions: {
            args: ['--headless'],
        },
    },
};
//# sourceMappingURL=local.config.js.map