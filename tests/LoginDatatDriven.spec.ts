import{test,expect} from '@playwright/test'

import { HomePage } from '../pages/HomePage.ts'
import { LoginPage } from '../pages/LoginPage.ts'
import { MyAccountPage } from '../pages/MyAccountPage.ts'
import { TestConfig } from '../test.config'
import { DataProvider } from '../utils/dataProvider.ts'
import { config } from 'node:process'

const jsonpath="testdata/logindata.json"

const jsonTestData=DataProvider.getTestDataFromJSON(jsonpath);

for(const data of jsonTestData){
    test(`Login test with Json Data: ${data.testName}`,async({page})=>{
        const Config=new TestConfig();
        await page.goto(Config.appUrl);

        const hp=new HomePage(page);
        await hp.clickMyAccount();
        await hp.clickLogin();

        const loginPage=new LoginPage(page);
        await loginPage.setEmail(data.email);
        await loginPage.setPassword(data.password)
        await loginPage.clickLogin();

        if(data.expected.toLowerCase()==='success'){
            const MyAccountPage=new MyAccountPage(page);
        }



    })
}