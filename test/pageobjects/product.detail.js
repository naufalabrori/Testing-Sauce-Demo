const Page = require('./page');

class productDetail extends Page {

    get productName () {
        return $('//*[@id="inventory_item_container"]/div/div/div[2]/div[1]')
    }

    get productDescription () {
        return $('//*[@id="inventory_item_container"]/div/div/div[2]/div[2]')
    }

    get productPrice () {
        return $('//*[@id="inventory_item_container"]/div/div/div[2]/div[3]')
    }

    get productImage () {
        return $('//*[@id="inventory_item_container"]/div/div/div[1]/img')
    }

    get btnAddToCart () {
        return $('//*[@id="add-to-cart-sauce-labs-backpack"]')
    }

    get btnRemove () {
        return $('//*[@id="remove-sauce-labs-backpack"]')
    }

    get cartIcon () {
        return $('//*[@id="shopping_cart_container"]/a')
    }

    async clickAddToCart () {
        await this.btnAddToCart.click()
    }

    async clickBtnRemove () {
        (await this.btnRemove).click()
    }

    async clickCartIcon () {
        (await this.cartIcon).click()
    }
}

module.exports = new productDetail()