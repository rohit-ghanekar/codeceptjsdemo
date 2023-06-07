const { setHeadlessWhen } = require('@codeceptjs/configure');
const conf = require('./tests/utils/config')
const path = require("path");
const directoryName = __dirname;

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: conf.baseUrl,
      waitForTimeout: conf.defaultTimeout,
      show: !conf.isHeadless,
      emulate: {
        recordVideo: {
          dir: "./recordings"
        }
      }
    },
    Playwright: {
      url: 'http://localhost',
      waitForTimeout: 5000,
      show: true,
      //browser:'webkit'
    },
    REST: {},
    CustomHelper: {
      require: conf.helperPath
    },
    Appium: {
      app: directoryName + '\\app\\calc.apk', // appium little tricky to get the relative path. So made small workaround. 
      platform: 'Android',
      device: 'emulator'
    }
  },

  gherkin: {
    features: conf.featuresPath,
    steps:'./tests/step-definitions/*.js'    
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    testomatio: {
      enabled: true,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: '2p53a8deerrj',
    },
    allure:{
 enabled:true,
//require:'@codeceptjs/allure-legacy',
outputDir:'./AllureReport',
screenshotsForAllureReport: true,
}
  },
  include: {
    BasePage: './tests/pages/BasePage.js',
    TodosPage: './tests/pages/todos.page.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept demo tests'
}