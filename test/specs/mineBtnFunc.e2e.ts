import loginPage from "../pageobjects/login.page.ts";
import homePage from "../pageobjects/home.page.ts";
import credentials from "../fixtures/credentials.ts";
import endpoints from "../fixtures/endpoints.ts";

describe("Mine button functionality", () => {
  it("should redirect user to users transactions page", async () => {
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await homePage.mineBtn.click();
    await expect(browser).toHaveUrl(RegExp(endpoints.mine));
  });
});