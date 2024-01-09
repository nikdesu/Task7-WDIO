import loginPage from "../pageobjects/login.page.ts";
import homePage from "../pageobjects/home.page.ts";
import credentials from "../fixtures/credentials.ts";

describe("Burger button functionality", () => {
  it("should hide sidemenu after clicking", async () => {
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await homePage.burgerBtn.click();
    await expect(homePage.sideMenu).toHaveAttr("style", RegExp("visibility: hidden"));
    await homePage.burgerBtn.click();
    await expect(homePage.sideMenu).not.toHaveAttr("style", RegExp("visibility: hidden"));
  });
});
