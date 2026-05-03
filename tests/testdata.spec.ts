// import {test,expect} from '@playwright/test'

// type TestData={
//     username:string,
//     password:string
// }

// const LoginData:TestData[]=[{username:'standard_user',password:'secret_sauce'},{username:'locked_out_user',password:'secret_sauce'}]

// for( const data of LoginData){
//     test(`Login test for ${data.username}`,async({page})=>{
//     await page .goto('https://www.saucedemo.com/') 
//     await page. locator('#user-name').fill(data.username);
//     await page.locator('#password').fill(data.password);
//     await page.locator('#login-button').click();
//     })
// }