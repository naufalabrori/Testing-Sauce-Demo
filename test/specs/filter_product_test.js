const loginPage = require('../pageobjects/login.page')
const productsPage = require('../pageobjects/products.page')

describe("Filter Product in Sauce Demo Web App", () => {
    describe("Filtering Product Name from Z to A", () => {
        it("User choose filter product name descending Z to A", async () => {
            await loginPage.open()
            await loginPage.login('standard_user', 'secret_sauce')
            await productsPage.filterNameDescending()

            await expect(productsPage.activeFilterOption).toHaveTextContaining('Name (Z to A)')
        })
    })

    describe("Filtering Product Name from A to Z", () => {
        it("User choose filter product name Ascending A to Z", async () => {
            await productsPage.filterNameAscending()
            await expect(productsPage.activeFilterOption).toHaveTextContaining('Name (A to Z)')
        })
    })

    describe("Filtering Product Price from Low to High", () => {
        it("User choose filter product price from low to high", async () => {
            await productsPage.filterPriceAscending()

            await expect(productsPage.activeFilterOption).toHaveTextContaining('Price (low to high)')
        })
    })

    describe("Filtering Product Price from High to Low", () => {
        it("User choose filter product price from low to high", async () => {
            await productsPage.filterPriceDescending()

            await expect(productsPage.activeFilterOption).toHaveTextContaining('Price (high to low)')
        })
    })
})