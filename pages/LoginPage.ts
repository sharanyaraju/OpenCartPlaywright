import {test,expect, Locator, Page} from '@playwright/test'

export class LoginPage{
    private readonly page:Page;
    private readonly txtEmailAddress:Locator;
    private readonly txtPassword:Locator;
    private readonly btnLogin:Locator;
    private readonly txtErrorMessage:Locator;


constructor(page:Page){
    this.page=page;
    this.txtEmailAddress=page.locator('#input-email')
    this.txtPassword=page.locator('#input-password');
    this.btnLogin=page.locator('[type="submit"]')
    this.txtErrorMessage=page.locator('.alert.alert-danger');
}


async setEmail(email:string){
    await this.txtEmailAddress.fill(email);
}

async setPassword(pwd:string){
    await this.txtPassword.fill(pwd);
}

async clickLogin(){
    await this.btnLogin.click();
}

async getloginErrorMessage(){
    return (this.txtErrorMessage.textContent())
}
}