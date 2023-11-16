const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AdminPage extends Page {

    get dropDownJob () {
        return $('span.oxd-topbar-body-nav-tab-item');
    }
    
    get payGrades () {
        return $('a.oxd-topbar-body-nav-tab-link:contains("Pay Grades")');
    }
}

module.exports = new AdminPage();