const { faker } = require('@faker-js/faker');

class Helper {
  static generateRandomUsername() {
    const randomString = faker.string.alphanumeric(8);
    return `pe${randomString}`;
  }

  static async getCellValue(tableLocator, tableRow, tableColumn) {
    const columnIndex = await tableLocator.locator(`//th[contains(text(), '${tableColumn}')]/preceding-sibling::th`).count() + 1;
    const row = await tableLocator.getByRole('row').filter({ hasText: tableRow}).locator('td').nth(columnIndex);
    return await row.textContent();
  }

}

module.exports = { Helper };