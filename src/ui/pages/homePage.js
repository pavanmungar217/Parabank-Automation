class HomePage {
    constructor(page) {
      this.page = page;
      this.accountsOverviewLink = page.getByRole('link', { name: 'Accounts Overview' });
      this.openNewAccountLink = page.getByRole('link', { name: 'Open New Account' });
      this.transferFundsLink = page.getByRole('link', { name: 'Transfer Funds' });
      this.billPayLink = page.getByRole('link', { name: 'Bill Pay' });
      this.successMessage = page.getByText('Your account was created successfully');
      this.globalLinks = page.locator('#headerPanel');
      this.aboutUsLink =  this.globalLinks.getByRole('link', { name: 'About Us' });
      this.servicesLink =  this.globalLinks.getByRole('link', { name: 'Services' }); 
      this.productsLink =  this.globalLinks.getByRole('link', { name: 'Products' });
      this.locationsLink =  this.globalLinks.getByRole('link', { name: 'Locations' }); 
      this.adminPageLink =  this.globalLinks.getByRole('link', { name: 'admin page' }); 
    }
    
    welcomeMessage(username) {
      return this.page.getByText(`Welcome ${username}`);
    }
  
    async gotoAccountsOverview() {
      await this.accountsOverviewLink.click();
    }
  
    async gotoOpenNewAccount() {
      await this.openNewAccountLink.click();
    }
  
    async gotoTransferFunds() {
      await this.transferFundsLink.click();
    }
  
    async gotoBillPay() {
      await this.billPayLink.click();
    }
  
  }
  
  module.exports = { HomePage };