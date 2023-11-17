const { $ } = require('@wdio/globals')
const Page = require('./page');

class CurrenciesComponent extends Page {

    get currencyDropDown() {
        return $('//i[@class=\'oxd-icon bi-caret-down-fill oxd-select-text--arrow\']')
    }

    get selectDD() {
        return $('//div[@role=\'listbox\']');
    }

    get selectCurrency() {
        return $('//span[@data-v-13cf171c="" and text()="AED - Utd. Arab Emir. Dirham"]')
    }

    setMinMaxSelary(){
        const inputElements = $$("//input[@class='oxd-input oxd-input--active']");

        const thirdElement = inputElements[2];
        const fourthElement = inputElements[3];

        thirdElement.setValue("1000");
        fourthElement.setValue("10000000");
        const btnSubmit = $$('//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
        btnSubmit[1].click()
    }
    
    // async pickUsd(text) {
    //     const selectBox = await $('#div[role="listbox"]');
    //     const value = await selectBox.getValue();
    //     await selectBox.selectByVisibleText(text)
    //     console.log(value); // returns "someValue0"
    //     console.log(await selectBox.getValue());
    
    //     // await selectBox.selectByAttribute('value', 'someValue3');
    // }
}

module.exports = new CurrenciesComponent();

