import { $ } from "@wdio/globals";
import Page from "./page.ts";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  get inputUsernameField() {
    return $("#username");
  }

  get inputPasswordField() {
    return $("#password");
  }

  get btnSignIn() {
    return $('button[type="submit"]');
  }

  get errorMsgInvCreds() {
    return $("[data-test='signin-error']");
  }

  get signUpLink() {
    return $('[data-test="signup"]');
  }

  async login(username: string, password: string) {
    await this.inputUsernameField.setValue(username);
    await this.inputPasswordField.setValue(password);
    await this.btnSignIn.click();
  }

  open() {
    return super.open("");
  }
}

export default new LoginPage();
