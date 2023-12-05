const { $ } = require('@wdio/globals');
const Page = require('./page');

class PayGradesComponent extends Page {

    get inputName() {
        return $('//form//input[@class="oxd-input oxd-input--active"]');
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

    get findName() {
        return $('//*[contains(text(),\'CancelGrade\')]');
    }

    get findTrashBtn() {
        return $('//*[contains(text(),\'CancelGrade\')]/../following-sibling::div[2]//button[@class=\'oxd-icon-button oxd-table-cell-action-space\'][1]');
    }

    get findTrashBtnOfSuperGrade() {
        return $('//*[contains(text(),\'SuperGrade\')]/../following-sibling::div[2]//button[@class=\'oxd-icon-button oxd-table-cell-action-space\'][1]');
    }

    get findCurrencyField() {
        return $('//*[contains(text(),\'CancelGrade\')]/../following-sibling::div[1]');
    }

    get confirmYesDelete() {
        return $('//button[@class=\'oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin\']');
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

    async clickOnTrashBtn() {
        await this.findTrashBtn.click();
    }

    async clickOnTrashBtnSuperGrade() {
        await this.findTrashBtnOfSuperGrade.click();
    }

    async clickConfirmYesDelete() {
        await this.confirmYesDelete.click();
    }

    async getTextCurrencyField() {
        await this.findCurrencyField.getText();
    }
    
}

module.exports = new PayGradesComponent();