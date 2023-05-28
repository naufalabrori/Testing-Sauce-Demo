const Page = require('./page');

class loginPage extends Page {

    get inputUsername () {
        return $('//*[@id="user-name"]');
    }

    get inputPassword () {
        return $('//*[@id="password"]');
    }

    get btnSubmit () {
        return $('//*[@id="login-button"]');
    }

    get invalidData () {
        return $('//*[@id="login_button_container"]/div/form/div[3]/h3')
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new loginPage();
