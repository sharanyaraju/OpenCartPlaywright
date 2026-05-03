import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage.ts'
import { RegistrationPage } from '../pages/RegistrationPage.ts'
import { TestConfig } from '../test.config'
import { RandomDataUtil } from '../utils/randomDatagenerator.ts'
let homePage: HomePage;
let rp: RegistrationPage;
let config: TestConfig;


test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl)
    homePage = new HomePage(page);
    rp = new RegistrationPage(page);
})

test.afterEach(async ({ page }) => {
    await page.close();
})

test('User registration test @master @sanity @regression', async ({ page }) => {
    await (await homePage.clickMyAccount()).clickRegister();
    //await homePage.clickRegister();


    await rp.setFirstName(RandomDataUtil.getFirstName());
    await rp.setLastName(RandomDataUtil.getlastName());
    await rp.setEmail(RandomDataUtil.getEmail());
    await rp.setTelephone(RandomDataUtil.getPhoneNumber());
    const password = RandomDataUtil.getPassword();
    await rp.setPassword(password);
    await rp.setConfirmPassword(password);

    await rp.setPrivacyPolicy();
    await rp.clickContinue();

    const confirmmsg = await rp.getConfirmationMsg();
    expect(confirmmsg).toContain('Your Account Has Been Created!')


})