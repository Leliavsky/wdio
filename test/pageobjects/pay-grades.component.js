const { $ } = require('@wdio/globals')
const Page = require('./page');

class PayGradesComponent extends Page {

    get inputName() {
        return $('//form//input[@class="oxd-input oxd-input--active"]')
    }

    get btnAdd () {
        return $('//button[@class=\'oxd-button oxd-button--medium oxd-button--secondary\']');
    }

    get btnSubmit() {
        return $('//button[@type="submit"]');
    }

    get currenciesAddBtn() {
        return $('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]');
    }

    async clickOnAddBtn () {
        await this.btnAdd.click();
    }

    async setName(name){
        await this.inputName.setValue(name);
    }

    async clickOnSubmitBtn() {
        await this.btnSubmit.click();
    }

    async clickOnCurrenciesAddBtn() {
        await this.currenciesAddBtn.click();
    }
}

module.exports = new PayGradesComponent();