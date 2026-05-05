import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  username = this.page.getByPlaceholder('Username');
  password = this.page.getByPlaceholder('Password');
  loginButton = this.page.getByRole('button', { name: 'Login' });
  error = this.page.locator('[data-test="error"]');

  async open() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async isLoaded() {
    await this.page.getByText('Swag Labs').isVisible();
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }
}
