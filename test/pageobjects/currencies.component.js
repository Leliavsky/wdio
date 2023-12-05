const { $ } = require('@wdio/globals');
const Page = require('./page');

class CurrenciesComponent extends Page {

    get currencyDropDown() {
        return $('//i[@class=\'oxd-icon bi-caret-down-fill oxd-select-text--arrow\']');
    }

    get selectDD() {
        return $('//div[@role=\'listbox\']');
    }

    get selectCurrency() {
        return $('//span[@data-v-13cf171c="" and text()="AED - Utd. Arab Emir. Dirham"]');
    }

    get inputElements() {
        return $$('//input[@class=\'oxd-input oxd-input--active\']');
    }

    get submitBtn (){
        const btnSubmit = $$('//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]');
        return btnSubmit[1];
    }

    get cancelBtn (){
        const btnSubmit = $$('//button[@class="oxd-button oxd-button--medium oxd-button--ghost"]');
        return btnSubmit[1];
    }

    get currencyBlock(){
        return $('//div[@class="oxd-table-card"]');
    }

    get elementsOfCurrencyBlock() {
        return $$('//div[@class=\'oxd-table-cell oxd-padding-cell\']');
    }

    async setMinMaxSalary(min, max){
        await this.inputElements[3].setValue(max);
        await this.inputElements[2].setValue(min);
    }

    async clickOnBtnSubmit(){
        await this.submitBtn.click();
    }

    async clickOnBtnCancel(){
        await this.cancelBtn.click();
    }
}

module.exports = new CurrenciesComponent();

