import loginPage from "../pageobjects/login.page.ts";
import homePage from "../pageobjects/home.page.ts";
import credentials from "../fixtures/credentials.ts";
import { faker } from "@faker-js/faker";

describe("Writing a comment", () => {
  it("should write a comment and show it after", async () => {
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await homePage.paymentLink.click();
    await homePage.commentInput.setValue(faker.lorem.words());
    await browser.keys("Enter");
    await expect(homePage.commentsList).toBeDisplayed();
  });
});
