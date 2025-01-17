const { Helper } = require('../../utils/helper');

class AccountsOverviewPage {
  constructor(page) {
    this.page = page;
    this.accountOverviewPage = page.getByRole('heading', { name: 'Accounts Overview' });
    this.accountTable = page.getByRole('table').and(page.locator('#accountTable'));
  }

  async getAccountBalance(accountNumber) {
    return await Helper.getCellValue(this.accountTable, accountNumber, 'Balance');
  }
}

module.exports = { AccountsOverviewPage };