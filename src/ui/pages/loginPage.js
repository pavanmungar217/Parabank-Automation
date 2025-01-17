class LoginPage {
    constructor(page) {
      this.page = page;
      this.userNameField = page.locator('//input[@name="username"]');
      this.passwordField = page.locator('//input[@name="password"]');
      this.logInButton = page.getByRole('button', { name: 'Log In' });
    }
  
    async login(username, password) {
      await this.userNameField.fill(username);
      await this.passwordField.fill(password);
      await this.logInButton.click();
    }
  }
  
  module.exports = { LoginPage };