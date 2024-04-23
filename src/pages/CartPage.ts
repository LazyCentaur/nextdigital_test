import { Page, Locator } from 'playwright';
import { CommonPage } from './CommonPage';

export class CartPage extends CommonPage {
  public usernameInput: Locator
  public checkoutButton: Locator
  public titleCartProduct: Locator
  public descriptionCartProduct: Locator
  public priceCartProduct: Locator

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.checkoutButton = page.locator('#checkout')
    this.titleCartProduct = page.locator('.inventory_item_name')
    this.descriptionCartProduct = page.locator('inventory_item_desc')
    this.priceCartProduct = page.locator('.inventory_item_price')
  }

  async navigate() {
    await super.navigate('https://www.saucedemo.com/cart.html');
  }
}
