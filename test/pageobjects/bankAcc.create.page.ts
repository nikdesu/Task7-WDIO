import { $ } from "@wdio/globals";
import Page from "./page.ts";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BankPage extends Page {
  get bankNameInput() {
    return $('#bankaccount-bankName-input')
  }
  
  get routingNumInput() {
    return $('#bankaccount-routingNumber-input')
  }

  get accNum() {
    return $('#bankaccount-accountNumber-input')
  }

  get routingErr() {
    return $('#bankaccount-routingNumber-input-helper-text')
  }

  get accNumErr() {
    return $('#bankaccount-accountNumber-input-helper-text')
  }
}

export default new BankPage();