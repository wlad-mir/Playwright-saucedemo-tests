import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';

test('inventory page shows 6 products', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await page.goto('https://www.saucedemo.com/');
  await login.login('standard_user', 'secret_sauce');

  const count = await inventory.getProductCount();
  await expect(count).toBe(6);
});
