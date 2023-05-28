const Page = require('./page')

class cartPage extends Page {
    open () {
        return super.open('cart.html')
    }

    get cartIcon () {
        return $('//*[@id="shopping_cart_container"]/a')
    }

    get cartTitle () {
        return $('//*[@id="header_container"]/div[2]/span')
    }

    get productName () {
        return $('//*[@id="item_4_title_link"]/div')
    }

    get btnRemove () {
        return $('//*[@id="remove-sauce-labs-backpack"]')
    }

    get btnCheckout () {
        return $('//*[@id="checkout"]')
    }

    async clickBtnCheckout () {
        await this.btnCheckout.click()
    }

}

module.exports = new cartPage()