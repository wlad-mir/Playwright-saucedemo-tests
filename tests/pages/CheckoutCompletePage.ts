import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutCompletePage extends BasePage {
  title = this.page.getByText('Checkout: Complete!', { exact: true });
  thankYou = this.page.getByText('Thank you for your order!');

  async isLoaded() {
    await this.title.isVisible();
    await this.thankYou.isVisible();
    await expect(this.page).toHaveURL(/checkout-complete/);
  }
}
