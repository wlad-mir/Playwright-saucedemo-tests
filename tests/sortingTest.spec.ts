import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';

test('inventory page sort products A to Z', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');
  await inventory.isLoaded();

  await inventory.sortBy('az');
  const names = await inventory.getProductNames();

  const sorted = [...names].sort();
  expect(names).toEqual(sorted);
});

test('inventory page sort products Z to A', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');
  await inventory.isLoaded();

  await inventory.sortBy('za');
  const names = await inventory.getProductNames();

  const sorted = [...names].sort().reverse();
  expect(names).toEqual(sorted);
});

test('inventory page sort products low to high', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');
  await inventory.isLoaded();

  await inventory.sortBy('lohi');
  const prices = await inventory.getProductPrices();

  const sorted = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sorted);
});

test('inventory page sort products high to low', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.open();
  await login.login('standard_user', 'secret_sauce');
  await inventory.isLoaded();

  await inventory.sortBy('hilo');
  const prices = await inventory.getProductPrices();

  const sorted = [...prices].sort((a, b) => b - a);
  expect(prices).toEqual(sorted);
});
