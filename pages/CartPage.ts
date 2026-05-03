import { Page,Locator } from "@playwright/test";

export class CartPage{
    private readonly page:Page;
    private readonly productNameInCart:Promise<Array<Locator>>;

    constructor(page:Page){
        this.page=page;
        this.productNameInCart=this.page.locator('.success').all();
    }


    async checkProductInCart(productNmae:string){
        const products=await this.productNameInCart;

        for(const product of products){
            const name= (await product.textContent())?.trim();
            console.log(name);
            if(name===productNmae){
                return true;
            }

        }
            return false;
    }


}