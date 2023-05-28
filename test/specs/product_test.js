const loginPage = require('../pageobjects/login.page')
const productsPage = require('../pageobjects/products.page')
const productDetail = require('../pageobjects/product.detail')

describe("View, Add and Remove Product in Sauce Demo Web App", () => {
    describe("User choose the product he wants to view", async () => {
        it("User choose the product", async () => {
            await loginPage.open()
            await loginPage.login('standard_user', 'secret_sauce')
            await productsPage.chooseProduct()

            await expect(productDetail.productName).toBeExisting()
            await expect(productDetail.productName).toHaveTextContaining('Sauce Labs Backpack')
            await expect(productDetail.productDescription).toBeExisting()
            await expect(productDetail.productPrice).toBeExisting()
            await expect(productDetail.productPrice).toHaveTextContaining('$29.99')
            await expect(productDetail.productImage).toBeExisting()
            await expect(productDetail.btnAddToCart).toBeExisting()
        })
    })

    describe("User add product to cart via product detail", () => {
        it("User click button add to cart", async () => {
            await productDetail.clickAddToCart()
    
            await expect(productDetail.btnRemove).toBeExisting()
            await expect(productDetail.btnRemove).toHaveTextContaining('Remove')
            await expect(productDetail.cartIcon).toHaveChildren()
        })
    })

    describe("User remove product in product detail", () => {
        it("User click remove button in product detail", async () => {
            await  productDetail.clickBtnRemove()

            await expect(productDetail.btnAddToCart).toBeExisting()
            await expect(productDetail.btnAddToCart).toHaveTextContaining('Add to cart')
            await expect(productDetail.cartIcon).not.toHaveChildren()
        })
    })

    describe("User add product to cart directly", () => {
        it("User click button add to cart", async () => {
            await productsPage.open()
            await productsPage.clickAddToCart()
    
            await expect(productsPage.btnRemove).toBeExisting()
            await expect(productsPage.btnRemove).toHaveTextContaining('Remove')
            await expect(productsPage.cartIcon).toHaveChildren()
        })
    })

    describe("User remove product in product page", () => {
        it("User click remove button in product page", async () => {
            await  productDetail.clickBtnRemove()

            await expect(productsPage.btnAddToCart).toBeExisting()
            await expect(productsPage.btnAddToCart).toHaveTextContaining('Add to cart')
            await expect(productsPage.cartIcon).not.toHaveChildren()
        })
    })
})