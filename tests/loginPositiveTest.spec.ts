import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test('successful login redirects to products page', async ({ page }) => {
  const login = new LoginPage(page);

  await login.login('standard_user', 'secret_sauce');

  await expect(page.getByText('Products')).toBeVisible();
  await expect(page).toHaveURL(/inventory/);
});
