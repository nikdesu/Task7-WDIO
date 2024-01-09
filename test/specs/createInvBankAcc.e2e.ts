import loginPage from "../pageobjects/login.page.ts";
import homePage from "../pageobjects/home.page.ts";
import bankAccCreatePage from "../pageobjects/bankAcc.create.page.ts";
import credentials from "../fixtures/credentials.ts";
import { faker } from "@faker-js/faker";

describe("Invalid bank account creation", () => {
  it("should not create bank acc with invalid data", async () => {
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await homePage.bankAccBtn.click();
    await homePage.createBankAccBtn.click();
    await bankAccCreatePage.bankNameInput.setValue(faker.lorem.word());
    await bankAccCreatePage.routingNumInput.setValue(
      faker.finance.accountNumber(8)
    );
    await bankAccCreatePage.accNum.setValue(faker.finance.accountNumber(8));
    await expect(bankAccCreatePage.accNumErr).toBeDisplayed();
    await expect(bankAccCreatePage.routingErr).toBeDisplayed();
  });
});