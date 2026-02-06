import { Page, Locator } from '@playwright/test';

export class LoginAutomationExercise{
    readonly page:Page;
    readonly emailAddress:Locator;
    readonly password:Locator;
    readonly buttonLogin:Locator;
    readonly consentPage:Locator;

    constructor(page:Page){
        this.page = page;
        this.emailAddress = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.buttonLogin = page.getByRole('button', { name: 'Login' });
        this.consentPage = page.getByRole('button', { name: 'Consent' });
    }

    async goTo(){
        await this.page.goto('https://automationexercise.com/login');
    }

    async login(email:string, pass:string){
        //damos consentiemiento al mensaje de inicio de la pantalla
        await this.consentPage.click();
        await this.emailAddress.fill(email);
        await this.password.fill(pass);
        await this.buttonLogin.click();
    }
}