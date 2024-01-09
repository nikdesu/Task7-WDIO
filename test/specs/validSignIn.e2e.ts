import loginPage from "../pageobjects/login.page.ts";
import credentials from "../fixtures/credentials.ts";
import homePage from "../pageobjects/home.page.ts";

describe("Valid login", () => {
  it("should login with valid credentials", async () => {
    await loginPage.open()
    await loginPage.inputUsernameField.setValue(credentials.username);
    await loginPage.inputPasswordField.setValue(credentials.password);
    await loginPage.btnSignIn.click();
    await expect(homePage.userNameText).toBeDisplayed();
  });
});
