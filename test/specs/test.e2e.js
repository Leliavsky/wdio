const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const AdminPage = require('../pageobjects/admin.page')
const SideBarMenuPage = require('../pageobjects/side-bar-menu.page')
const PayGradesComponent = require('../pageobjects/pay-grades.component')
const CurrenciesComponent = require('../pageobjects/currencies.component')

describe('Add new pay grades', () => {
    it('should add new pay grades', async () => {
        
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');

        await SideBarMenuPage.clickOnAdmin();

        await AdminPage.clickOnJob();
        await AdminPage.payGrades.click();

        await PayGradesComponent.clickOnAddBtn();
        await PayGradesComponent.setName('SuperUser');
        await PayGradesComponent.clickOnSubmitBtn();
        await PayGradesComponent.clickOnCurrenciesAddBtn();

        await CurrenciesComponent.currencyDropDown.click();
        await CurrenciesComponent.selectCurrency.click();
        await CurrenciesComponent.setMinMaxSelary();
        await browser.pause(3000)


        
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})

