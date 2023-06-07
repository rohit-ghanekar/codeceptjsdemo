const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      waitForTimeout: 5000,
      show: true,
      //browser:'webkit'
    },

    REST: {},

    CustomHelper: {
      require: './tests/helpers/playwright.helper.js'
    }
  },

  gherkin: {
    features: './tests/features/*.feature',
    steps: [
      './tests/step-definitions/create-todos.steps.js'
    ]
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
    TodosPage: './tests/pages/todos.page.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept demo tests'
}