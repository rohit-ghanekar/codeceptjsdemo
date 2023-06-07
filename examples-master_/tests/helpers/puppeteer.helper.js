const config = require('../utils/config')
let Helper = codecept_helper;

const toString = sel => {
    if (typeof(sel) === 'string') return sel
    if (typeof(sel) === 'object') {
        return sel.css || sel.xpath
    }
}

class CustomHelper extends Helper {
    
    async hover(selector) {
        let client = this.helpers['Puppeteer'];
        await client.page.hover(toString(selector))
    }

    async typeText(selector,text) {
        let client = this.helpers['Puppeteer'];
        await client.page.waitForSelector(selector);
        await client.page.type(selector,text);
    }

    async waitAndClick(selector) {
        let client = this.helpers['Puppeteer'];
        await client.page.waitForSelector(selector)
        await client.page.click(selector)
      }

}

module.exports = CustomHelper;