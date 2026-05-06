import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutOverviewPage extends BasePage {
  title = this.page.getByText('Checkout: Overview', { exact: true });
  finishButton = this.page.locator('[data-test="finish"]');

  async isLoaded() {
    await this.title.isVisible();
    await expect(this.page).toHaveURL(/checkout-step-two/);
  }

  async finishOrder() {
    await this.finishButton.click();
  }
}
