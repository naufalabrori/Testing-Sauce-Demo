const Page = require('./page');

class checkoutStepTwo extends Page{
    open () {
        return super.open('checkout-step-two.html')
    }

    get overviewTitle () {
        return $('//*[@id="header_container"]/div[2]/span')
    }

    get cartList () {
        return $('//*[@id="checkout_summary_container"]/div/div[1]')
    }

    get summaryInfo () {
        return $('//*[@id="checkout_summary_container"]/div/div[2]')
    }

    get btnFinish () {
        return $('//*[@id="finish"]')
    }

    async clickBtnFinish () {
        await this.btnFinish.click()
    }
}

module.exports = new checkoutStepTwo()