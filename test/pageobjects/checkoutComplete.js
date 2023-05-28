const Page = require('./page');

class checkoutComplete extends Page {
    open () {
        return super.open('checkout-complete.html')
    }

    get completeTitle () {
        return $('//*[@id="header_container"]/div[2]/span')
    }

    get completeHeader () {
        return $('//*[@id="checkout_complete_container"]/h2')
    }

    get completeText () {
        return $('//*[@id="checkout_complete_container"]/div')
    }
}

module.exports = new checkoutComplete ()