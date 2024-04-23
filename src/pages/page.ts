import { Page, Locator } from 'playwright';
import { CommonPage } from './CommonPage';

export class CartPage extends CommonPage {
  public usernameInput: Locator

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.usernameInput = page.locator('#checkout')
  }

  async navigate() {
    await super.navigate('url');
  }
}
