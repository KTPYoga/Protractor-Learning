// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

/*global jasmine */
//var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/qbankHome-spec.ts'
 // './e2e/**/qbankHome-spec.js'
 //'./e2e/**/javascript.check.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  chromeDriver: "node_modules/chromedriver/bin/chromedriver",
 // baseUrl: 'http://localhost:4200/',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  plugins: [{
        package: 'protractor-screenshoter-plugin',
        screenshotPath:'./reports',
        screenshotOnExpect: 'failure',
        screenshotOnSpec: 'none',
        withLogs: 'false',
        writeReportFreq: 'asap',
        clearFoldersBeforeTest: true,
      }],  
  onPrepare: function() {
     // returning the promise makes protractor wait for the reporter config before executing tests 
        return global.browser.getProcessedConfig().then(function (config) {
 
        });
  }
};
