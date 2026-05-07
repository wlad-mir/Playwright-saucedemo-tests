# 🧪 Saucedemo E2E Automation Framework

### Playwright + TypeScript + Page Object Model

A fully automated testing framework for an e-commerce application
https://www.saucedemo.com/, implemented using Playwright, TypeScript, and a clean Page Object Model (POM) architecture.

The project covers the entire user journey:
from login to checkout.

---

## 🚀 Framework Features

### ✔ Complete e-commerce scenario

- Login
- View products
- Sorting
- Add to cart
- Remove from cart
- Checkout (form → overview → checkout)

### ✔ Middle automation engineer architecture

- Abstract `BasePage`
- Inheritance
- `isLoaded()` method for stability
- `open()` method for start pages
- Clean Page Objects
- Minimal duplication
- Concise and readable tests

### ✔ 20+ automated tests

- Positive and negative login tests
- Sorting tests (A→Z, Z→A, price ↑↓)
- Cart tests
- Complete checkout flow

---

## 📂 Project structure

project/
>>> pages/
>>>>> BasePage.ts
>>>>> LoginPage.ts
>>>>> InventoryPage.ts
>>>>> CartPage.ts
>>>>> CheckoutStepOnePage.ts
>>>>> CheckoutOverviewPage.ts
>>>>> CheckoutCompletePage.ts
>>> tests/
>>>>> loginTest.spec.ts
>>>>> sortingTest.spec.ts
>>>>> cartTest.spec.ts
>>>>> checkoutFlow.spec.ts
>>> playwright.config.ts
>>> README.md

---

## 🏗 Stack used

- **Playwright**
- **TypeScript**
- **Node.js**
- **Page Object Model (POM)** ​​
- **ESLint / Prettier** (optional)

---

## 🔧 Installing dependencies:

```bash
npm install
```

## ▶ Running tests

- npx playwright test

## Launch in UI mode:

- npx playwright test --ui

---

🧱 Architecture

BasePage (abstract)

- stores the page

- defines the required isLoaded() method

LoginPage

- open() method

- login() method

InventoryPage

- sort() method

- add() method

- remove() methoding

- cart badge

CartPage

- checkout transition

- removing items

Checkout Pages

- Step One → Form

- Overview → Confirmation

- Complete → Final Screen

🎓 Author

wlad-mir — QA Automation Engineer
The project was created as a training and practical framework,
demonstrating test automation skills
at the intermediate automation engineer level.
