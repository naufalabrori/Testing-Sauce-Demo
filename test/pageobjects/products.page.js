const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class productsPage extends Page {

    open () {
        return super.open('inventory.html');
    }
    /**
     * define selectors using getter methods
     */
    get productHeader () {
        return $('//*[@id="header_container"]/div[2]/span');
    }

    get productBackpack () {
        return $('//*[@id="item_4_title_link"]/div')
    }

    get filterOption () {
        return $('//*[@id="header_container"]/div[2]/div/span/select')
    }

    get activeFilterOption () {
        return $('//*[@id="header_container"]/div[2]/div/span/span')
    }

    get ascendingName () {
        return $('//*[@id="header_container"]/div[2]/div/span/select/option[1]')
    }

    get descendingName () {
        return $('//*[@id="header_container"]/div[2]/div/span/select/option[2]')
    }

    get ascendingPrice () {
        return $('//*[@id="header_container"]/div[2]/div/span/select/option[3]')
    }

    get descendingPrice () {
        return $('//*[@id="header_container"]/div[2]/div/span/select/option[4]')
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

    get menu () {
        return $('//*[@id="react-burger-menu-btn"]')
    }

    get btnLogout () {
        return $('//*[@id="logout_sidebar_link"]')
    }

    async chooseProduct () {
        await this.productBackpack.click()
    }

    async filterNameDescending () {
        await this.filterOption.click()
        await this.descendingName.waitForDisplayed()
        await this.descendingName.click()
    }

    async filterNameAscending () {
        await this.filterOption.click()
        await this.ascendingName.waitForDisplayed()
        await this.ascendingName.click()
    }

    async filterPriceAscending () {
        await this.filterOption.click()
        await this.ascendingPrice.waitForDisplayed()
        await this.ascendingPrice.click()
    }

    async filterPriceDescending () {
        await this.filterOption.click()
        await this.descendingPrice.waitForDisplayed()
        await this.descendingPrice.click()
    }

    async clickAddToCart () {
        await this.btnAddToCart.click()
    }

    async clickMenu () {
        (await this.menu).click()
    }

    async logout () {
        (await this.btnLogout).click()
    }
}

module.exports = new productsPage();
