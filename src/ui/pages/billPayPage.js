class BillPayPage {
    constructor(page) {
      this.page = page;
      this.payeeNameField = page.locator('//*[@name="payee.name"]');
      this.addressField = page.locator('//*[@name="payee.address.street"]');
      this.cityField = page.locator('//*[@name="payee.address.city"]');
      this.stateField = page.locator('//*[@name="payee.address.state"]');
      this.zipCodeField = page.locator('//*[@name="payee.address.zipCode"]');
      this.phoneNumberField = page.locator('//*[@name="payee.phoneNumber"]');
      this.accountField = page.locator('//*[@name="payee.accountNumber"]');
      this.verifyAccountField = page.locator('//*[@name="verifyAccount"]');
      this.amountField = page.locator('//*[@name="amount"]');
      this.fromAccountSelect = page.locator('//*[@name="fromAccountId"]').and(page.locator('select'));
      this.sendPaymentButton = page.getByRole('button', { name: 'Send Payment' });
      this.billPayCompleteMessage = page.getByRole('heading', { name: 'Bill Payment Complete' });
      this.successMessage = page.locator('#billpayResult');
    }
  
    async payBill(billDetails) {
      await this.payeeNameField.fill(billDetails.payeeName);
      await this.addressField.fill(billDetails.address);
      await this.cityField.fill(billDetails.city);
      await this.stateField.fill(billDetails.state);
      await this.zipCodeField.fill(billDetails.zipCode);
      await this.phoneNumberField.fill(billDetails.phoneNumber);
      await this.accountField.fill(billDetails.accountNumber);
      await this.verifyAccountField.fill(billDetails.accountNumber);
      await this.amountField.fill(billDetails.amount);
      await this.page.waitForTimeout(2000);
      await this.sendPaymentButton.click();
    }
  }
  
  module.exports = { BillPayPage };