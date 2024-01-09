import { $ } from "@wdio/globals";
import Page from "./page.ts";

class HomePage extends Page {
  get userNameText() {
    return $('[data-test="sidenav-username"]');
  }

  get logoutBtn() {
    return $('[data-test="sidenav-signout"]');
  }

  get myAccBtn() {
    return $('[data-test="sidenav-user-settings"]');
  }

  get bankAccBtn() {
    return $('[data-test="sidenav-bankaccounts"]');
  }

  get notificationsBtn() {
    return $('[data-test="sidenav-notifications"]');
  }

  get bellNotifBtn() {
    return $('[data-test="nav-top-notifications-link"]');
  }

  get new$Btn() {
    return $('[data-test="nav-top-new-transaction"]');
  }

  get burgerBtn() {
    return $('[data-test="sidenav-toggle"]');
  }

  get sideMenu() {
    return $(
      '[class="MuiPaper-root MuiDrawer-paper makeStyles-drawerPaper-212 makeStyles-drawerPaperClose-213 MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft MuiPaper-elevation0"]'
    );
  }

  get edgarJUser() {
    return $('[data-test="user-list-item-t45AiwidW"]');
  }

  get amountInputField() {
    return $("#amount");
  }

  get noteInputField() {
    return $("#transaction-create-description-input");
  }

  get payBtn() {
    return $('[data-test="transaction-create-submit-payment"]');
  }

  get friendsBtn() {
    return $('[data-test="nav-contacts-tab"]');
  }

  get mineBtn() {
    return $('[data-test="nav-personal-tab"]');
  }

  get paymentLink() {
    return $(
      "div > div > div:nth-child(1) > li > div > div > div:nth-child(1)"
    );
  }

  get commentInput() {
    return $('[placeholder="Write a comment..."]');
  }

  get createBankAccBtn() {
    return $('[data-test="bankaccount-new"]');
  }

  get commentsList() {
    return $('[data-test="comments-list"]');
  }

  get returnToTransactionsBtn() {
    return $('[data-test="new-transaction-return-to-transactions"]');
  }

  get createTransactionBtn() {
    return $('[data-test="new-transaction-create-another-transaction"]');
  }
}

export default new HomePage();
