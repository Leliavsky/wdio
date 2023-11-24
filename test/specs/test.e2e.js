const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const AdminPage = require('../pageobjects/admin.page')
const SideBarMenuPage = require('../pageobjects/side-bar-menu.page')
const PayGradesComponent = require('../pageobjects/pay-grades.component')
const CurrenciesComponent = require('../pageobjects/currencies.component')
const { after, afterEach } = require('mocha');

describe('Scenario 1', () => {
    it('should add new pay grades', async () => {
        
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');

        await SideBarMenuPage.clickOnAdmin();

        await AdminPage.clickOnJob();
        await AdminPage.payGrades.click();

        await PayGradesComponent.clickOnAddBtn();
        await PayGradesComponent.setName('SuperGrade');
        await PayGradesComponent.clickOnSubmitBtn();
        await PayGradesComponent.clickOnCurrenciesAddBtn();

        await CurrenciesComponent.currencyDropDown.click();
        await CurrenciesComponent.selectCurrency.click();
        const min = "1000";
        const max = "100000"
        await CurrenciesComponent.setMinMaxSalary(min, max);
        await CurrenciesComponent.clickOnBtnSubmit();
       
        await CurrenciesComponent.currencyBlock.waitForExist({ timeout: 10000 });
        const minSalary = await CurrenciesComponent.elementsOfCurrencyBlock[2].getText();
        const maxSalary = await CurrenciesComponent.elementsOfCurrencyBlock[3].getText();
        expect(minSalary).toBe("1000.00");
        expect(maxSalary).toBe("100000.00");

        await AdminPage.clickOnJob();
        await AdminPage.payGrades.click();
        await PayGradesComponent.clickOnTrashBtnSuperGrade();
        await PayGradesComponent.clickConfirmYesDelete();
        await browser.reloadSession()
    });
});

describe('Scenario 2', () => {
    it('should data not visible after cancel', async () => {
            
        await LoginPage.open();
        await LoginPage.login('Admin', 'admin123');
    
        await SideBarMenuPage.clickOnAdmin();
    
        await AdminPage.clickOnJob();
        await AdminPage.payGrades.click();
    
        await PayGradesComponent.clickOnAddBtn();
        await PayGradesComponent.setName('CancelGrade');
        await PayGradesComponent.clickOnSubmitBtn();
        await PayGradesComponent.clickOnCurrenciesAddBtn();
    
        await CurrenciesComponent.currencyDropDown.click();
        await CurrenciesComponent.selectCurrency.click();
        const min = "1000";
        const max = "100000";
        await CurrenciesComponent.setMinMaxSalary(min, max);
        await CurrenciesComponent.clickOnBtnCancel();
           
        await AdminPage.clickOnJob();
        await AdminPage.payGrades.click();
        
        expect(await PayGradesComponent.findName.getText()).toBe('CancelGrade');
        expect(PayGradesComponent.getTextCurrencyField()).toHaveTextContaining('');
        await PayGradesComponent.clickOnTrashBtn();
        await PayGradesComponent.clickConfirmYesDelete();
        });
});

