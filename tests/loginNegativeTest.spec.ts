import { test, expect } from '@playwright/test';

test.describe('Login negative tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('error on incorrect password', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect.soft(page.locator('[data-test="error"]')).toBeVisible();
    await expect
      .soft(page.locator('[data-test="error"]'))
      .toContainText('Epic sadface: Username and password do not match any user in this service');
    await expect.soft(page).not.toHaveURL(/inventory/);
  });

  test('error on incorrect usernamer', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('wrong_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect.soft(page.locator('[data-test="error"]')).toBeVisible();
    await expect
      .soft(page.locator('[data-test="error"]'))
      .toContainText('Epic sadface: Username and password do not match any user in this service');
    await expect.soft(page).not.toHaveURL(/inventory/);
  });

  test('error on empty fields', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('');
    await page.getByPlaceholder('Password').fill('');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect.soft(page.locator('[data-test="error"]')).toBeVisible();
    await expect
      .soft(page.locator('[data-test="error"]'))
      .toContainText('Epic sadface: Username is required');
    await expect.soft(page).not.toHaveURL(/inventory/);
  });
});
