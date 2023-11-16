const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const AdminPage = require('../pageobjects/admin.page')
const SideBarMenuPage = require('../pageobjects/side-bar-menu.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        
        await LoginPage.open()
        await LoginPage.login('Admin', 'admin123')

        await SideBarMenuPage.clickOnAdmin()

        await AdminPage.dropDownJob.click()
        await AdminPage.payGrades.click()
        
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})

