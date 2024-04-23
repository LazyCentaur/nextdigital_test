import { Page, Locator } from 'playwright';

export class CommonPage {
  protected page: Page

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }
}
