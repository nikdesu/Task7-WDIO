import loginPage from "../pageobjects/login.page.ts";
import { faker } from "@faker-js/faker";
import credentials from "../fixtures/credentials.ts";

describe("Invalid login", () => {
  it("shouldn't login with invalid password", async () => {
    await loginPage.open()
    await loginPage.inputUsernameField.setValue(credentials.username);
    await loginPage.inputPasswordField.setValue(faker.internet.password());
    await loginPage.btnSignIn.click();
    await expect(loginPage.errorMsgInvCreds).toBeDisplayed();
  });
});