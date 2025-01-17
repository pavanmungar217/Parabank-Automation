class TransferFundsPage {
    constructor(page) {
      this.page = page;
      this.amountField = page.locator('#amount');
      this.fromAccountSelect = page.locator('#fromAccountId').and(page.locator('select'));
      this.toAccountSelect = page.locator('#toAccountId').and(page.locator('select'));
      this.transferButton = page.getByRole('button', { name: 'Transfer' });
      this.transferCompleteMessage = page.getByRole('heading', { name: 'Transfer Complete!' });
      this.successMessage = page.locator('#showResult');
    }
  
    async transferFunds(amount, fromAccountId, toAccountId = null) {
      await this.amountField.fill(amount);
      if (toAccountId) {
        await this.toAccountSelect.selectOption(toAccountId);
      }
      await this.fromAccountSelect.selectOption(fromAccountId);
      await this.transferButton.click();
    }
  }
  
  module.exports = { TransferFundsPage };