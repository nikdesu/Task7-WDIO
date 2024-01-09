import loginPage from "../pageobjects/login.page.ts";
import homePage from "../pageobjects/home.page.ts";
import bankAccCreatePage from "../pageobjects/bankAcc.create.page.ts";
import endpoints from "../fixtures/endpoints.ts";
import credentials from "../fixtures/credentials.ts";
import { faker } from "@faker-js/faker";

describe("Bank account creation", () => {
  it("should create new bank acc", async () => {
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await homePage.bankAccBtn.click();
    await homePage.createBankAccBtn.click();
    await bankAccCreatePage.bankNameInput.setValue(faker.lorem.word());
    await bankAccCreatePage.routingNumInput.setValue(
      faker.finance.accountNumber(9)
    );
    await bankAccCreatePage.accNum.setValue(faker.finance.accountNumber(9));
    await expect(browser).toHaveUrl(RegExp(endpoints.bankacc));
  });
});
