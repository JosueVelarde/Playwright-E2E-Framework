import { Page, Locator } from '@playwright/test';

export class RegisterSauceDemo {
    readonly page:Page;
    readonly email:Locator;
    readonly password:Locator;
    readonly registerButton: Locator;
    readonly firstName:Locator;
    readonly lastName:Locator;

    constructor(page:Page){
        this.page = page;
        //se usa page.locator() ya que dicha pagina no usan data-set
        this.email = page.locator('input[name="customer[email]"]');
        this.password = page.locator('input[name="customer[password]"]');
        this.firstName = page.locator('input[name="customer[first_name]"]');
        this.lastName = page.locator('input[name="customer[last_name]"]');
        //se usa page.getByRole() para el boton "Create"
        this.registerButton = page.getByRole('button', {name: 'Create'});
    }

    async goTo(){
        await this.page.goto('https://sauce-demo.myshopify.com/account/register');
    }

    async register(firstName:string, lastName:string, emailAddress:string, password:string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(emailAddress);
        await this.password.fill(password);
        await this.registerButton.click();
    }

}