class RegistrationPage {
    constructor(page) {
      this.page = page;
      this.register = page.getByRole('link', { name: 'Register' });
      this.firstNameField = page.locator('//*[@id="customer.firstName"]');
      this.lastNameField = page.locator('//*[@id="customer.lastName"]');
      this.addressField = page.locator('//*[@id="customer.address.street"]');
      this.cityField = page.locator('//*[@id="customer.address.city"]');
      this.stateField = page.locator('//*[@id="customer.address.state"]');
      this.zipCodeField = page.locator('//*[@id="customer.address.zipCode"]');
      this.phoneNumberField = page.locator('//*[@id="customer.phoneNumber"]');
      this.ssnField = page.locator('//*[@id="customer.ssn"]');
      this.userNameField = page.locator('//*[@id="customer.username"]');
      this.passwordField = page.locator('//*[@id="customer.password"]');
      this.confirmPassword = page.locator('//*[@id="repeatedPassword"]');
      this.registerButton = page.getByRole('button', { name: 'REGISTER' });
    }

    async fillRegistrationForm(user) {
      await this.firstNameField.fill(user.firstName);
      await this.lastNameField.fill(user.lastName);
      await this.addressField.fill(user.address);
      await this.cityField.fill(user.city);
      await this.stateField.fill(user.state);
      await this.zipCodeField.fill(user.zipCode);
      await this.phoneNumberField.fill(user.phoneNumber);
      await this.ssnField.fill(user.ssn);
      await this.userNameField.fill(user.userName);
      await this.passwordField.fill(user.password);
      await this.confirmPassword.fill(user.password);
    }
  
    async registerUser(user) {
      await this.register.click();
      await this.fillRegistrationForm(user);
      await this.registerButton.click();
    }
  }
  
  module.exports = { RegistrationPage };