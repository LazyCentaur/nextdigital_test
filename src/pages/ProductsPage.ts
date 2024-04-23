import { Page, Locator } from 'playwright';
import { CommonPage } from './CommonPage';

export class ProductsPage extends CommonPage {
  public productsTitle: Locator
  public listProducts: Locator
  public products: Locator
  public titleProduct: Locator
  public shoppingCartButton: Locator

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.productsTitle = page.locator('.title')
    this.listProducts = page.locator('.inventory_list')
    this.products = page.locator('.inventory_item')
    this.titleProduct = page.locator('.inventory_item_name')
    this.shoppingCartButton = page.locator('.shopping_cart_link')
  }

  async navigate() {
    await super.navigate('https://www.saucedemo.com/inventory.html');
  }

  async clickShoppingCartButton() {
    await this.shoppingCartButton.click()
  }
}
