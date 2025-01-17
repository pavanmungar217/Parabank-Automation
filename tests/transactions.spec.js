const { test, expect } = require('@playwright/test');
const { Helper } = require('../src/utils/helper');
const { PageFactory } = require('../src/ui/pageFactory');
const { faker } = require('@faker-js/faker');
const { APIFactory } = require('../src/api/apiFactory');
const { PrivateApiClient } = require('../src/api/privateApiClient');


test.describe('Para Bank UI Tests', () => {
  let pageFactory;
  let newUser;
  let accountId;
  let billDetails;

  test.beforeAll(() => {
    newUser = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      phoneNumber: faker.phone.number(),
      ssn: faker.helpers.replaceSymbols('###-##-####'),
      userName: Helper.generateRandomUsername(),
      password: 'password123',
    };

    billDetails = {
      payeeName: faker.person.fullName(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      phoneNumber: faker.phone.number(),
      accountNumber: faker.finance.accountNumber(5),
      amount: '20'
    };
    
  });
  test.beforeEach(async ({ page }) => {
    pageFactory = new PageFactory(page);
    await page.goto('/');
  });

  test('Verify user can register in the portal successfully', async () => {
    const homePage = pageFactory.homePage;
    const registrationPage = pageFactory.registrationPage;
    
    await registrationPage.registerUser(newUser);
    await expect( homePage.successMessage).toBeVisible();
    await expect( homePage.welcomeMessage(newUser.userName)).toBeVisible();
  });

  test('Verify user can login in the portal successfully', async () => {
    const accountsOverviewPage = pageFactory.accountsOverviewPage;
    const loginPage = pageFactory.loginPage;
    await loginPage.login(newUser.userName, newUser.password);
    await expect( accountsOverviewPage.accountOverviewPage).toBeVisible();
  });

  test('Verify user can create savings account successfully', async () => {
    const loginPage = pageFactory.loginPage;
    const homePage = pageFactory.homePage;
    const openAccountPage = pageFactory.openAccountPage;
    await loginPage.login(newUser.userName, newUser.password);
    await homePage.gotoOpenNewAccount();
    await openAccountPage.openNewAccount('SAVINGS');
    await expect( openAccountPage.successMessage).toBeVisible();
    await expect( openAccountPage.accountNumber).toBeVisible();
    accountId = await openAccountPage.getAccountNumber();
    
  });

  test('Verify user can view balance and transfer amount to another account successfully', async () => {
    const accountsOverviewPage = pageFactory.accountsOverviewPage;
    const loginPage = pageFactory.loginPage;
    const transferFundsPage = pageFactory.transferFundsPage;
    const homePage = pageFactory.homePage;
    await loginPage.login(newUser.userName, newUser.password);
    const amount = '10';

    //view account balance
    expect( await accountsOverviewPage.getAccountBalance(accountId)).toEqual('$100.00');
    
    //Transfer funds
    await homePage.gotoTransferFunds();
    await transferFundsPage.transferFunds(amount, accountId);
    await expect( transferFundsPage.transferCompleteMessage).toBeVisible();
    await expect(  transferFundsPage.successMessage).toContainText(`$${amount}.00 has been transferred from account #${accountId}`);
    await homePage.gotoAccountsOverview();
    expect( await accountsOverviewPage.getAccountBalance(accountId)).toEqual('$90.00');
    
  });
  
  test('verify user can do bill payment successfully', async () => {
    const homePage = pageFactory.homePage;
    const loginPage = pageFactory.loginPage;
    const billPayPage = pageFactory.billPayPage;

    await loginPage.login(newUser.userName, newUser.password);
    await homePage.gotoBillPay();
    billDetails.fromAccountId = accountId;
    await billPayPage.payBill(billDetails);
    await expect( billPayPage.billPayCompleteMessage).toBeVisible();
    await expect(  billPayPage.successMessage).toContainText(`Bill Payment to ${billDetails.payeeName} in the amount of $${billDetails.amount}.00 from account ${billDetails.fromAccountId} was successful`);
  });

  test('verify global navigation links are working successfully', async ({page}) => {
    const homePage = pageFactory.homePage;
    const loginPage = pageFactory.loginPage;

    await loginPage.login(newUser.userName, newUser.password);
    // Verify About us link
    await homePage.aboutUsLink.click();
    expect(page.url()).toContain('about.htm');
    await page.goBack();
    // Verify Services link
    await homePage.servicesLink.click();
    expect(page.url()).toContain('services.htm');
    await page.goBack();
    // Verify Products link
    await homePage.productsLink.click();
    expect(page.url()).toContain('products');
    await page.goBack();
    // Verify Locations link
    await homePage.locationsLink.click();
    expect(page.url()).toContain('solutions');
    await page.goBack();
    // Verify Admin Page Link
    await homePage.adminPageLink.click();
    expect(page.url()).toContain('admin.htm');
    
  });

  test('verify traansaction search api gives valid response', async ({page}) => {
    const loginPage = pageFactory.loginPage;

    await loginPage.login(newUser.userName, newUser.password);

    //creating api client from browser session
    const apiClient = new PrivateApiClient();
    await apiClient.initializeFromPage(page);

    const apiFactory = new APIFactory(apiClient);
    const transactionService = apiFactory.transactionService;

    const response = await transactionService.findTransactionsByAmount(accountId, billDetails.amount);
    const actualResult = response[0];
    expect(actualResult.accountId.toString()).toEqual(billDetails.fromAccountId);
    expect(actualResult.type).toEqual('Debit');
    expect(actualResult.amount.toString()).toEqual(billDetails.amount);
    expect(actualResult.description).toContain(billDetails.payeeName);
    
  });

});
