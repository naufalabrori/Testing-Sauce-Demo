const loginPage = require('../pageobjects/login.page');
const productsPage = require('../pageobjects/products.page');

describe("User logout", () => {
    describe("User logout his account from sauce demo web app", () => {
        it("User successfully logout his account", async () => {
            await loginPage.open()
            await loginPage.login('standard_user', 'secret_sauce')

            await productsPage.clickMenu()
            await productsPage.btnLogout.waitForDisplayed()
            await productsPage.logout()

            await expect(loginPage.btnSubmit).toBeExisting()
        })
    })
})