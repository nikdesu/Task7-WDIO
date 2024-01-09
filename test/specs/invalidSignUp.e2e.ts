import signupPage from "../pageobjects/signup.page.ts";
import endpoints from "../fixtures/endpoints.ts";

describe("Invalid sign up", () => {
  it("shouldn't sign up with empty credentials fields", async () => {
    await signupPage.open();
    await signupPage.signUpBtn.click();
    await expect(signupPage.firstNameErr).toBeDisplayed();
    await expect(browser).toHaveUrl(RegExp(endpoints.signUp));
  });
});
