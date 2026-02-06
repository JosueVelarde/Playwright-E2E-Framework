import { Page, Locator } from '@playwright/test';

export class RegisterAutomationExercise {
    readonly page:Page;
    readonly email:Locator;
    readonly registerButton: Locator;
    readonly firstName:Locator;

    constructor(page:Page){
        this.page = page;
        //se usa page.locator() ya que dicha pagina no usan data-set
        this.email = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        //se usa page.getByRole() para el boton "Create"
        this.registerButton = page.getByRole('button', {name: 'Signup'});
        this.firstName = page.getByRole('textbox', { name: 'Name' });
    }

    async goTo(){
        await this.page.goto('https://automationexercise.com/login');
    }

    async register(firstName:string, emailAddress:string){
        await this.firstName.fill(firstName);
        await this.email.fill(emailAddress);
        await this.registerButton.click();
    }

}