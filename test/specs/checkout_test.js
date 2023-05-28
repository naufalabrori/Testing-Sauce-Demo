const loginPage = require('../pageobjects/login.page');
const productsPage = require('../pageobjects/products.page');
const productDetail = require('../pageobjects/product.detail');
const cartPage = require('../pageobjects/cart.page');
const checkoutStepOne = require('../pageobjects/checkoutOne.page');
const checkoutStepTwo = require('../pageobjects/checkoutTwo.page');
const checkoutComplete = require('../pageobjects/checkoutComplete');

describe("User want to checkout product in cart", () => {
    describe("User checkout product with valid information", () => {
        it("User input all checkout information field", async () => {
            await loginPage.open()
            await loginPage.login('standard_user', 'secret_sauce')
            await productsPage.chooseProduct()
            await productDetail.clickAddToCart()
            await productDetail.clickCartIcon()
            
            await cartPage.clickBtnCheckout()
            await checkoutStepOne.continue("Naufal", "Abrori", "62264")
            
            await expect(checkoutStepTwo.overviewTitle).toBeExisting()
            await expect(checkoutStepTwo.cartList).toBeExisting()
            await expect(checkoutStepTwo.summaryInfo).toBeExisting()
        })

        it("User click finish button to checkout product", async () => {
            await checkoutStepTwo.clickBtnFinish()

            await expect(checkoutComplete.completeTitle).toBeExisting()
            await expect(checkoutComplete.completeHeader).toBeExisting()
            await expect(checkoutComplete.completeText).toBeExisting() 
        })
    })

    describe("User checkout without product", () => {
        it("User checkout without selected product", async () => {
            await cartPage.open()
            await cartPage.clickBtnCheckout()

            await expect(checkoutStepOne.checkoutTittle).not.toBeExisting()
        })
    })

    describe("User input checkout information field without firstname", () => {
        it("User input data without firstname", async () => {
            await cartPage.open()
            await cartPage.clickBtnCheckout()
            await checkoutStepOne.continue("", "Abrori", "62264")

            await expect(checkoutStepOne.errorMessage).toBeExisting()
            await expect(checkoutStepOne.errorMessage).toHaveTextContaining("Error: First Name is required")
        })
    })

    describe("User input checkout information field without lastname", () => {
        it("User input data without lastname", async () => {
            await cartPage.open()
            await cartPage.clickBtnCheckout()
            await checkoutStepOne.continue("Naufal", "", "62264")

            await expect(checkoutStepOne.errorMessage).toBeExisting()
            await expect(checkoutStepOne.errorMessage).toHaveTextContaining("Error: Last Name is required")
        })
    })

    describe("User input checkout information field without postal code", () => {
        it("User input data without postal code", async () => {
            await cartPage.open()
            await cartPage.clickBtnCheckout()
            await checkoutStepOne.continue("Naufal", "Abrori", "")

            await expect(checkoutStepOne.errorMessage).toBeExisting()
            await expect(checkoutStepOne.errorMessage).toHaveTextContaining("Error: Postal Code is required")
        })
    })
})