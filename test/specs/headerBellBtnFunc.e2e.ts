import loginPage from "../pageobjects/login.page.ts";
import homePage from "../pageobjects/home.page.ts";
import endpoints from "../fixtures/endpoints.ts";
import credentials from "../fixtures/credentials.ts";

describe("Bell button functionality", () => {
  it("should redirect user to notifications page", async () => {
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await homePage.bellNotifBtn.click();
    await expect(browser).toHaveUrl(RegExp(endpoints.notifications));
  });
});