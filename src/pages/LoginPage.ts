import { Page, Locator } from 'playwright';
import { CommonPage } from './CommonPage';

export class LoginPage extends CommonPage {
  public usernameInput: Locator
  public passwordInput: Locator
  public loginButton: Locator
  public wrongLoginMessage: Locator

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.usernameInput = page.locator('#user-name')
    this.passwordInput = page.locator('#password')
    this.loginButton = page.locator('#login-button')
    this.wrongLoginMessage = page.locator('[data-test="error-button"]')
  }

  async navigate() {
    await super.navigate('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
