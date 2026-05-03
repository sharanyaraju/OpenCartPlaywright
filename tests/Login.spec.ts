import{test,expect} from '@playwright/test'

import { HomePage } from '../pages/HomePage.ts'
import { LoginPage } from '../pages/LoginPage.ts'
import { MyAccountPage } from '../pages/MyAccountPage.ts'
import { TestConfig } from '../test.config'


let homePage: HomePage;
let lp: LoginPage;
let config: TestConfig;
let ma: MyAccountPage;


test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl)
    homePage = new HomePage(page);
    lp = new LoginPage(page);
    ma = new MyAccountPage(page);
})

test.afterEach(async({page})=>{
page.close();
})


test('Login test @master @sanity @regression',async({page})=>{

    await homePage.clickMyAccount();
    await homePage.clickLogin();

    await lp.setEmail(config.email);
    await lp.setPassword(config.password);
    await lp.clickLogin();

    await ma.isMyAccountPageExists();

})