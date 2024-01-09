import loginPage from "../pageobjects/login.page.ts";
import { faker } from "@faker-js/faker";
import credentials from "../fixtures/credentials.ts";

describe("Invalid login", () => {
  it("shouldn't login with invalid username", async () => {
    await loginPage.open()
    await loginPage.inputUsernameField.setValue(faker.internet.userName());
    await loginPage.inputPasswordField.setValue(credentials.password);
    await loginPage.btnSignIn.click();
    await expect(loginPage.errorMsgInvCreds).toBeDisplayed();
  });
});