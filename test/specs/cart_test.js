const loginPage = require('../pageobjects/login.page');
const productsPage = require('../pageobjects/products.page');
const productDetail = require('../pageobjects/product.detail');
const cartPage = require('../pageobjects/cart.page');

describe("User view cart in Sauce Demo Web App", () => {
    describe("User view his selected product in cart", () => {
        it("Showing selected product in cart", async () => {
            await loginPage.open()
            await loginPage.login('standard_user', 'secret_sauce')
            await productsPage.chooseProduct()
            await productDetail.clickAddToCart()

            await productDetail.clickCartIcon()

            await expect(cartPage.cartTitle).toBeExisting()
            await expect(cartPage.cartTitle).toHaveTextContaining('Your Cart')
            await expect(cartPage.btnCheckout).toBeExisting()

        })
    })
})