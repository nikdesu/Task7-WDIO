import signupPage from "../pageobjects/signup.page.ts";
import { faker } from "@faker-js/faker";
import endpoints from "../fixtures/endpoints.ts";

const password = faker.internet.password();

describe("Valid sign up", () => {
  it("should sign up with valid credentials", async () => {
    await signupPage.open();
    await signupPage.firstNameField.setValue(faker.person.firstName());
    await signupPage.lastNameField.setValue(faker.person.lastName());
    await signupPage.usernameField.setValue(faker.internet.userName());
    await signupPage.passwordField.setValue(password);
    await signupPage.confirmPasswordField.setValue(password);
    await signupPage.signUpBtn.click();
    await expect(browser).toHaveUrl(RegExp(endpoints.signIn));
  });
});
