// import {test,expect} from '@playwright/test'
// import {LoginPage} from '../pages/LoginPage'
// import {HomePage} from '../pages/testhp'
// import {CartPage} from '../pages/CartPage'

// test('User can login , add product to cart',async({page})=>{
//     await page.goto("https://demoblaze.com");
//     const lp=new LoginPage(page);
//     await lp.performLogin("sharan281","sharan281")
//     await page.waitForLoadState('load');

//     const hp=new HomePage(page);
//     await hp.addProductToCart("Samsung galaxy s6");
//    // await hp.addProductToCart("Nexus 6");
//     await hp.clickOnCartLink();

//     const cp=new CartPage(page);
//     await cp.checkProductInCart('Samsung galaxy s6');
//    // await cp.checkProductInCart('Nexus 6')


// })