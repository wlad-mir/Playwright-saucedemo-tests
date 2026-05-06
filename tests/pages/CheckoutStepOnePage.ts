import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutStepOnePage extends BasePage {
  title = this.page.getByText('Checkout: Your Information', { exact: true });
  firstName = this.page.locator('[data-test="firstName"]');
  lastName = this.page.locator('[data-test="lastName"]');
  postalCode = this.page.locator('[data-test="postalCode"]');
  continueButton = this.page.locator('[data-test="continue"]');

  async isLoaded() {
    await this.title.isVisible();
    await expect(this.page).toHaveURL(/checkout-step-one/);
  }

  async fillForm(first: string, last: string, zip: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
    await this.continueButton.click();
  }
}
