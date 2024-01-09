import { $ } from "@wdio/globals";
import Page from "./page.ts";


class SignUpPage extends Page {
 
  get signUpBtn() {
    return $("[data-test='signup-submit'] span");
  }

  get errorMsgFirstNameInvalid() {
    return $("#firstName-helper-text");
  }

  get firstNameField() {
    return $("#firstName");
  }

  get firstNameErr() {
    return $("#firstName-helper-text")
  }

  get lastNameField() {
    return $("#lastName");
  }

  get usernameField() {
    return $("#username");
  }

  get passwordField() {
    return $("#password");
  }

  get confirmPasswordField() {
    return $("#confirmPassword");
  }

  open() {
    return super.open("signup");
  }
}

export default new SignUpPage();
