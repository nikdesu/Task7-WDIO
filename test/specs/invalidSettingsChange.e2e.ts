import loginPage from "../pageobjects/login.page.ts";
import homePage from "../pageobjects/home.page.ts";
import credentials from "../fixtures/credentials.ts";
import settingsPage from "../pageobjects/settings.pahe.ts";
import { faker } from "@faker-js/faker";

describe("Invalid settings change", () => {
  const email = faker.lorem.sentence();
  const phone = faker.phone.number();

  it("shouldn't save changes that were made", async () => {
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await homePage.myAccBtn.click();
    await settingsPage.emailSettingsInput.clearValue();
    await settingsPage.emailSettingsInput.setValue(email);
    await settingsPage.phoneSettingsInput.clearValue();
    await settingsPage.phoneSettingsInput.setValue(phone);
    await expect(settingsPage.emailErr).toBeDisplayed();
    await expect(settingsPage.phoneErr).toBeDisplayed();
  });
});
