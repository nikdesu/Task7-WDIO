import loginPage from "../pageobjects/login.page.ts";
import homePage from "../pageobjects/home.page.ts";
import credentials from "../fixtures/credentials.ts";
import settingsPage from "../pageobjects/settings.pahe.ts";
import { Key } from 'webdriverio'
import { faker } from "@faker-js/faker";

describe("Settings change", () => {
  const email = faker.internet.email();
  const phone = faker.string.numeric(6);

  it("should save changes that were made", async () => {
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await homePage.myAccBtn.click();
    await settingsPage.emailSettingsInput.clearValue();
    await settingsPage.emailSettingsInput.click();
    await browser.keys([Key.Ctrl, 'a', Key.Backspace])
    await settingsPage.emailSettingsInput.setValue(email);
    await settingsPage.phoneSettingsInput.click();
    await browser.keys([Key.Ctrl, 'a', Key.Backspace])
    await settingsPage.phoneSettingsInput.setValue(phone);
    await settingsPage.submitBtn.click();
    await browser.refresh();
    await expect(settingsPage.emailSettingsInput).toHaveValue(email);
    await expect(settingsPage.phoneSettingsInput).toHaveValue(phone);
  });
});
