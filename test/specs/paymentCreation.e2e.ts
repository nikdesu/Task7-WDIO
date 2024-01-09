import loginPage from "../pageobjects/login.page.ts";
import homePage from "../pageobjects/home.page.ts";
import credentials from "../fixtures/credentials.ts";
import { faker } from "@faker-js/faker";

describe("Payment Creation", () => {
  it("should successfuly create new payment", async () => {
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await homePage.new$Btn.click();
    await homePage.edgarJUser.click();
    await homePage.amountInputField.setValue(faker.number.int());
    await homePage.noteInputField.setValue(faker.lorem.sentence());
    await homePage.payBtn.click();
    await expect(homePage.returnToTransactionsBtn).toBeDisplayed();
    await expect(homePage.createTransactionBtn).toBeDisplayed();
  });
});
