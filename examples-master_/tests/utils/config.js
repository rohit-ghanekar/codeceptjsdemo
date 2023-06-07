module.exports = {
    baseUrl: "https://www.saucedemo.com/",
    isHeadless: false,
    defaultTimeout: 10000,
    helperPath: ['./tests/helpers/puppeteer.helper.js','./tests/helpers/playwright.helper.js'],
    featuresPath: './tests/features/*.feature',
}