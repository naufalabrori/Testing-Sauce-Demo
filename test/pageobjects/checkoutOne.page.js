const Page = require('./page');

class checkoutStepOne extends Page{
    open () {
        return super.open('checkout-step-one.html')
    }

    get checkoutTittle () {
        return $('//*[@id="header_container"]/div[2]/span')
    }

    get inputFirstname () {
        return $('//*[@id="first-name"]')
    }

    get inputLastname () {
        return $('//*[@id="last-name"]')
    }

    get inputPostalCode () {
        return $('//*[@id="postal-code"]')
    }

    get btnContinue () {
        return $('//*[@id="continue"]')
    }

    get errorMessage() {
        return $('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]')
    }

    async continue (firstname, lastname, postalCode) {
        await this.inputFirstname.setValue(firstname)
        await this.inputLastname.setValue(lastname)
        await this.inputPostalCode.setValue(postalCode)
        await this.btnContinue.click()
    }
}

module.exports = new checkoutStepOne()
