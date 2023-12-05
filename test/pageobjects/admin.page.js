const { $ } = require('@wdio/globals');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AdminPage extends Page {

    get dropDownJob () {
        return $('//span[contains(text(), \'Job\')]');
    }
    
    get payGrades () {
        return $('//a[text()=\'Pay Grades\']');
    }

    async clickOnJob () {
        await this.dropDownJob.click();
    }
    
}

module.exports = new AdminPage();