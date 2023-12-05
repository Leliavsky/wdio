const { $ } = require('@wdio/globals');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SideBarMenuPage extends Page {

    get btnAdmin () {
        return $('.oxd-text.oxd-text--span.oxd-main-menu-item--name');
    }

    async clickOnAdmin () {
        await this.btnAdmin.click();
    }
}

module.exports = new SideBarMenuPage();