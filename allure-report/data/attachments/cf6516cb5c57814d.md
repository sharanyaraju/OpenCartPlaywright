# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pomtest.spec.ts >> User can login , add product to cart
- Location: tests\pomtest.spec.ts:6:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://demoblaze.com/
Call log:
  - navigating to "https://demoblaze.com/", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | import {LoginPage} from '../pages/LoginPage'
  3  | import {HomePage} from '../pages/HomePage'
  4  | import {CartPage} from '../pages/CartPage'
  5  | 
  6  | test('User can login , add product to cart',async({page})=>{
> 7  |     await page.goto("https://demoblaze.com");
     |                ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://demoblaze.com/
  8  |     const lp=new LoginPage(page);
  9  |     await lp.performLogin("sharan281","sharan281")
  10 |     await page.waitForLoadState('load');
  11 | 
  12 |     const hp=new HomePage(page);
  13 |     await hp.addProductToCart("Samsung galaxy s6");
  14 |     await hp.addProductToCart("Nexus 6");
  15 |     await hp.clickOnCartLink();
  16 | 
  17 |     const cp=new CartPage(page);
  18 |     await cp.checkProductInCart('Samsung galaxy s6');
  19 |     await cp.checkProductInCart('Nexus 6')
  20 | 
  21 | 
  22 | })
```