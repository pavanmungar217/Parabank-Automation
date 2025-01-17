const { HomePage } = require('./pages/homePage');
const { LoginPage } = require('./pages/loginPage');
const { RegistrationPage } = require('./pages/registrationPage');
const { AccountsOverviewPage } = require('./pages/AccountsOverviewPage');
const { OpenAccountPage } = require('./pages/openAccountPage');
const { BillPayPage } = require('./pages/billPayPage');
const { TransferFundsPage } = require('./pages/transferFundsPage');

class PageFactory {
  constructor(page) {
    this.page = page;
  }

  get homePage() {
    if (!this._homePage) { 
      this._homePage = new HomePage(this.page);
    }
    return this._homePage;
  }

  get loginPage() {
    if (!this._loginPage) {
      this._loginPage = new LoginPage(this.page);
    }
    return this._loginPage;
  }

  get registrationPage() {
    if (!this._registrationPage) {
      this._registrationPage = new RegistrationPage(this.page);
    }
    return this._registrationPage;
  }

  get accountsOverviewPage() {
    if (!this._accountsOverviewPage) {
      this._accountsOverviewPage = new AccountsOverviewPage(this.page);
    }
    return this._accountsOverviewPage;
  }

  get openAccountPage() {
    if (!this._openAccountPage) {
      this._openAccountPage = new OpenAccountPage(this.page);
    }
    return this._openAccountPage;
  }

  get billPayPage() {
    if (!this._billPayPage) {
      this._billPayPage = new BillPayPage(this.page);
    }
    return this._billPayPage;
  }

  get transferFundsPage() {
    if (!this._transferFundsPage) {
      this._transferFundsPage = new TransferFundsPage(this.page);
    }
    return this._transferFundsPage;
  }
}

module.exports = { PageFactory };
