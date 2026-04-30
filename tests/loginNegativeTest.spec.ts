import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test('error on incorrect password', async ({ page }) => {
  const login = new LoginPage(page);

  await login.login('standard_user', 'wrong_password');

  await expect(login.error).toBeVisible();
  await expect(login.error).toContainText(
    'Epic sadface: Username and password do not match any user in this service',
  );
  await expect(page).not.toHaveURL(/inventory/);
});

test('error on incorrect username', async ({ page }) => {
  const login = new LoginPage(page);

  await login.login('wrong_user', 'secret_sauce');

  await expect(login.error).toBeVisible();
  await expect(login.error).toContainText(
    'Epic sadface: Username and password do not match any user in this service',
  );
  await expect(page).not.toHaveURL(/inventory/);
});

test('error on empty fields', async ({ page }) => {
  const login = new LoginPage(page);

  await login.login('', '');

  await expect(login.error).toBeVisible();
  await expect(login.error).toContainText('Epic sadface: Username is required');
  await expect(page).not.toHaveURL(/inventory/);
});
