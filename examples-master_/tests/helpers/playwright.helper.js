let Helper = codecept_helper;

const toString = sel => {
    if (typeof(sel) === 'string') return sel
    if (typeof(sel) === 'object') {
        return sel.css || sel.xpath
    }
}

class CustomHelper extends Helper {

    async launchApp(){ 
        console.log('Playwright script started...')
        let client = this.helpers['Playwright'];
        await client.page.goto('http://zero.webappsecurity.com/index.html');
    }

    async waitAndClick(selector) {
        let client = this.helpers['Playwright'];
        await client.page.waitForSelector(selector)
        await client.page.click(selector)
      }

}

module.exports = CustomHelper;