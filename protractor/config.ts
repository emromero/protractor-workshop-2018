import​ { browser, Config } from​ 'protractor';
import​ { reporter } from​ './helpers/reporter';

export​ const​ config: Config = {
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  noGlobals: true​,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
    },   
  onPrepare: () => {
    browser.ignoreSynchronization = true​;
    reporter();
    browser.manage().timeouts().implicitlyWait(0)
  }
};
