import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  title = this.page.getByText('Products', { exact: true });
  items = this.page.locator('.inventory_item');
  sortDropdown = this.page.locator('[data-test="product_sort_container"]');
  cartButton = this.page.locator('.shopping_cart_link');

  async getProductCount() {
    return await this.items.count();
  }

  async sortBy(option: string) {
    await this.sortDropdown.selectOption(option);
  }

  async openCart() {
    await this.cartButton.click();
  }
}
