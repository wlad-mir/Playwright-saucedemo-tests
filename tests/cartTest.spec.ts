import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';

test('add product to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');
  await inventory.isLoaded();

  await inventory.addToCart('Sauce Labs Backpack');
  expect(await inventory.getCartBadgeCount()).toBe(1);

  await inventory.openCart();
  await cart.isLoaded();

  expect(await cart.getCartCount()).toBe(1);
});

test('remove product from cart', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');
  await inventory.isLoaded();

  await inventory.addToCart('Sauce Labs Backpack');
  await inventory.openCart();
  await cart.isLoaded();

  await cart.removeItem('Sauce Labs Backpack'); // ← THAT'S RIGHT
  expect(await cart.getCartCount()).toBe(0);
});

test('cart badge updates correctly', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');
  await inventory.isLoaded();

  await inventory.addToCart('Sauce Labs Backpack');
  await inventory.addToCart('Sauce Labs Bike Light');
  expect(await inventory.getCartBadgeCount()).toBe(2);
});
