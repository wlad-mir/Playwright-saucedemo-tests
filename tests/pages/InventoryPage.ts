import { type Page, type Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  title = this.page.getByText('Products', { exact: true });
  items = this.page.locator('.inventory_item');
  sortDropdown = this.page.locator('.product_sort_container');
  cartButton = this.page.locator('.shopping_cart_link');

  async isLoaded() {
    await this.title.isVisible();
    await expect(this.page).toHaveURL(/inventory/);
  }

  async getProductCount() {
    return await this.items.count();
  }

  async sortBy(option: string) {
    await this.sortDropdown.selectOption(option); // error
  }

  async openCart() {
    await this.cartButton.click();
  }

  async getProductNames(): Promise<string[]> {
    return await this.page.locator('.inventory_item_name').allInnerTexts();
  }

  async getProductPrices(): Promise<number[]> {
    const prices = await this.page.locator('.inventory_item_price').allInnerTexts();
    return prices.map((p) => Number(p.replace('$', '')));
  }
}
