import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  title = this.page.getByText('Your Cart', { exact: true });
  cartItems = this.page.locator('.cart_item');
  checkoutButton = this.page.locator('[data-test="checkout"]');

  async isLoaded() {
    await this.title.isVisible();
    await expect(this.page).toHaveURL(/cart/);
  }

  async getCartCount() {
    return await this.cartItems.count();
  }

  async removeItem(productName: string) {
    const item = this.page.locator('.cart_item').filter({
      has: this.page.locator('.inventory_item_name', { hasText: productName }),
    });

    await item.locator('button').click();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}
