import loginPage from "../pageobjects/login.page.ts";
import homePage from "../pageobjects/home.page.ts";
import credentials from "../fixtures/credentials.ts";
import endpoints from "../fixtures/endpoints.ts";

describe("Friends button functionality", () => {
  it("should redirect user to friends transactions page", async () => {
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await homePage.friendsBtn.click();
    await expect(browser).toHaveUrl(RegExp(endpoints.contacts));
  });
});
