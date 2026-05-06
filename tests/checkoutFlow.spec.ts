import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';
import { CheckoutStepOnePage } from './pages/CheckoutStepOnePage';
import { CheckoutOverviewPage } from './pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from './pages/CheckoutCompletePage';

test('complete checkout flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const stepOne = new CheckoutStepOnePage(page);
  const overview = new CheckoutOverviewPage(page);
  const complete = new CheckoutCompletePage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');
  await inventory.isLoaded();

  await inventory.addToCart('Sauce Labs Backpack');
  await inventory.openCart();
  await cart.isLoaded();

  await cart.clickCheckout();
  await stepOne.isLoaded();

  await stepOne.fillForm('Wlad-mir', 'QA', '881190');
  await overview.isLoaded();

  await overview.finishOrder();
  await complete.isLoaded();
});
