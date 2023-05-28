const loginPage = require('../pageobjects/login.page')
const productsPage = require('../pageobjects/products.page')

describe('Login Sauce Demo Web App', () => {
    describe("User login with valid credentials", () => {
        it('User input valid username and password', async () => {
            await loginPage.open()
            await loginPage.login('standard_user', 'secret_sauce')
    
            await expect(productsPage.productHeader).toBeExisting()
            await expect(productsPage.productHeader).toHaveTextContaining('Products')
        })
    })

    describe("User login with invalid credentials", () => {
        it('User input invalid username or password', async () => {
            await browser.reloadSession()
            await loginPage.open()
            await loginPage.login('standard_user', 'qwerty123')
    
            await expect(loginPage.invalidData).toBeExisting()
            await expect(loginPage.invalidData).toHaveTextContaining(
                "Epic sadface: Username and password do not match any user in this service")
        })
    })

    describe("User login without input credentials", () => {
        it('User not input username and password', async () => {
            await loginPage.open()
            await loginPage.login('', '')
    
            await expect(loginPage.invalidData).toBeExisting()
            await expect(loginPage.invalidData).toHaveTextContaining("Epic sadface: Username is required")
        })
    })

    describe("User login without input password", () => {
        it("User input data without password", async () => {
            await loginPage.open()
            await loginPage.login('standard_user', '')
    
            await expect(loginPage.invalidData).toBeExisting()
            await expect(loginPage.invalidData).toHaveTextContaining("Epic sadface: Password is required")
        })
    })
})


