import { test, expect } from '@playwright/test';

test.describe('Login positive tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('has title', async ({ page }) => {
    await expect.soft(page).toHaveTitle(/Swag Labs/);
  });

  test('successful login redirects to products page', async ({ page }) => {
    await expect.soft(page).toHaveTitle(/Swag Labs/);

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect.soft(page.getByText('Products')).toBeVisible();
    await expect.soft(page).toHaveURL(/inventory/);
  });
});
