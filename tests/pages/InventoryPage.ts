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
    await this.sortDropdown.selectOption(option);
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

  async addToCart(productName: string) {
    const item = this.page.locator('.inventory_item').filter({
      has: this.page.locator('.inventory_item_name', { hasText: productName }),
    });

    await item.locator('button').click();
  }

  async getCartBadgeCount(): Promise<number> {
    const badge = this.page.locator('.shopping_cart_badge');
    if (await badge.isVisible()) {
      return Number(await badge.innerText());
    }
    return 0;
  }
}
