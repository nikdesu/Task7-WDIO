import loginPage from "../pageobjects/login.page.ts";
import homePage from "../pageobjects/home.page.ts";
import endpoints from "../fixtures/endpoints.ts";
import credentials from "../fixtures/credentials.ts";

describe("Logout", () => {
  it("should logout after succesful login", async () => {
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await homePage.logoutBtn.click();
    await expect(browser).toHaveUrl(RegExp(endpoints.signIn));
  });
});
