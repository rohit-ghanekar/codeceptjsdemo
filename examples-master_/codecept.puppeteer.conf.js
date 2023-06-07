const { setHeadlessWhen } = require('@codeceptjs/configure');
const conf = require('./tests/utils/config')

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
 // tests: './todomvc-tests/**/*_test.js',
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
    REST: {},
    CustomHelper: {
      require: conf.helperPath
    }
  },

  gherkin: {
    features: conf.featuresPath,
    steps: './tests/step-definitions/*.js'
    
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure:{
 enabled:true,
//require:'@codeceptjs/allure-legacy',
outputDir:'./AllureReport',
screenshotsForAllureReport: true,
}
  },
  include: {
    BasePage: './tests/pages/BasePage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept demo tests'
}