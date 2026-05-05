import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';

test('successful login redirects to products page', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  await login.open();
  await login.isLoaded();
  await login.login('standard_user', 'secret_sauce');

  await inventory.isLoaded();
});
