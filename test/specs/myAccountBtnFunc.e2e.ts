import loginPage from "../pageobjects/login.page.ts";
import homePage from "../pageobjects/home.page.ts";
import endpoints from "../fixtures/endpoints.ts";
import credentials from "../fixtures/credentials.ts";

describe("My account button", () => {
  it("should redirect user to user settings page", async () => {
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await homePage.myAccBtn.click();
    await expect(browser).toHaveUrl(RegExp(endpoints.settings));
  });
});
