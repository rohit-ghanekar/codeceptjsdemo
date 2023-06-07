const { I, BasePage } = inject();
const JsonParse=require('../utils/jsonParser')
const loc = require('../utils/locators')
const config = require('../utils/config')
var fs = require('fs');
var json=JSON.parse(fs.readFileSync('data/data.json','utf8'));
const data = JSON.parse(fs.readFileSync('data/data.json'));
const fields = Object.values(json);


var jsondata=new JsonParse();

Given('Launch Application', () => {
  BasePage.launchApp();
  I.saveScreenshot('pptr.png')
})

Given('Launch Mobile Application and calculate', () => {
  BasePage.calcMobile();
  //I.saveScreenshot('pptr.png')
})

Then('I login to the application',() =>{
  BasePage.login(data.uid,data.pwd) 
  I.wait(1)
})

Then('I add {string} product to cart',(productName) =>{
  BasePage.addToCart(productName)
  I.wait(1)
})

Then('I initiate checkout process',() =>{
  BasePage.checkoutFromCart(data)

})
