class OpenAccountPage {
  constructor(page) {
    this.page = page;
    this.accountTypeSelect = page.locator('#type').and(page.locator('select'));
    this.openNewAccountButton = page.getByRole('button', { name: 'Open New Account' });
    this.successMessage = page.getByText('Account Opened!')
    this.accountNumber = page.locator('#newAccountId'); 
  }

  async openNewAccount(accountType) {
    await this.accountTypeSelect.selectOption(accountType);
    await this.page.waitForTimeout(2000);
    await this.openNewAccountButton.click();
   
  }

  async getAccountNumber() {
    return await this.accountNumber.textContent();
  }
}

module.exports = { OpenAccountPage };