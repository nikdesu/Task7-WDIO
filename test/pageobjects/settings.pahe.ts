import { $ } from "@wdio/globals";
import Page from "./page.ts";

class SettingsPage extends Page {
  get emailSettingsInput() {
    return $("#user-settings-email-input");
  }

  get phoneSettingsInput() {
    return $("#user-settings-phoneNumber-input");
  }

  get submitBtn() {
    return $('[data-test="user-settings-submit"]');
  }

  get emailErr() {
    return $("#user-settings-email-input-helper-text");
  }

  get phoneErr() {
    return $("#user-settings-phoneNumber-input-helper-text");
  }
}

export default new SettingsPage();
