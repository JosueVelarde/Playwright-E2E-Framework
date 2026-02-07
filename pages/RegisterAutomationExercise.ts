import { Page, Locator } from '@playwright/test';

export class RegisterAutomationExercise {
    readonly page:Page;
    readonly email:Locator;
    readonly registerButton: Locator;
    readonly Name:Locator;
    readonly password:Locator;
    readonly dayBirth:Locator;
    readonly monthBirth:Locator;
    readonly yearBirth:Locator;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly address:Locator;
    readonly country:Locator;
    readonly state:Locator;
    readonly city:Locator;
    readonly zipcode:Locator;
    readonly mobileNumber:Locator;
    readonly createAccount:Locator;
    readonly consentPage:Locator;

    constructor(page:Page){
        this.page = page;
        //selectores que usan locator()
        this.email = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.dayBirth = page.locator('#days');
        this.monthBirth = page.locator('#months');
        this.yearBirth = page.locator('#years');
        this.zipcode = page.locator('#zipcode');
        //selectores que usan getByRole()
        this.registerButton = page.getByRole('button', {name: 'Signup'});
        this.Name = page.getByRole('textbox', { name: 'Name' });
        this.password = page.getByRole('textbox', { name: 'Password *' });
        this.firstName = page.getByRole('textbox', { name: 'First name *' });
        this.lastName = page.getByRole('textbox', { name: 'Last name *' });
        this.address = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.state = page.getByRole('textbox', { name: 'State *' });
        this.city = page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.mobileNumber = page.getByRole('textbox', { name: 'Mobile Number *' });
        this.createAccount = page.getByRole('button', { name: 'Create Account' });
        this.consentPage = page.getByRole('button', { name: 'Consent' });
        //selectores que usan getByLabel
        this.country = page.getByLabel('Country *');
    }

    async goTo(){
        await this.page.goto('https://automationexercise.com/login');
    }

    async registerCompleto(
        password:string, firstName:string, lastName:string,
        address:string, state:string, city:string, zipcode:number, mobileNumber:number, 
        dayBirth:string, monthBirht:string, yearBirth:string, country:string){
            //damos consentiemiento al mensaje de inicio de la pantalla
            //comentar esta linea cuando se haga el commit en github
            //await this.consentPage.click();
            //se abre una segunda opcion para rellenar los campos
            if(await this.page.getByRole('heading', { name: 'This site asks for consent to' }).isVisible()){
                await this.consentPage.click();
                await this.password.fill(password);
                await this.dayBirth.selectOption(dayBirth);
                await this.monthBirth.selectOption(monthBirht);
                await this.yearBirth.selectOption(yearBirth);
                await this.firstName.fill(firstName);
                await this.lastName.fill(lastName);
                await this.address.fill(address);
                await this.country.selectOption(country);
                await this.state.fill(state);
                await this.city.fill(city);
                await this.zipcode.fill(zipcode.toString());
                await this.mobileNumber.fill(mobileNumber.toString());
                await this.createAccount.click();
            }else{
                await this.password.fill(password);
                await this.dayBirth.selectOption(dayBirth);
                await this.monthBirth.selectOption(monthBirht);
                await this.yearBirth.selectOption(yearBirth);
                await this.firstName.fill(firstName);
                await this.lastName.fill(lastName);
                await this.address.fill(address);
                await this.country.selectOption(country);
                await this.state.fill(state);
                await this.city.fill(city);
                await this.zipcode.fill(zipcode.toString());
                await this.mobileNumber.fill(mobileNumber.toString());
                await this.createAccount.click();
            }
        }

    async registerInicio(name:string, emailAddress:string){
            //damos consentiemiento al mensaje de inicio de la pantalla
            //comentar esta linea cuando se haga el commit en github
            //await this.consentPage.click();
            //rellenamos los datos con los campos "Name" y "Email Address" y luego se pulsa el boton "Signup"
            if(await this.page.getByRole('heading', { name: 'This site asks for consent to' }).isVisible()){
                await this.consentPage.click();
                await this.Name.fill(name);
                await this.email.fill(emailAddress);
                await this.registerButton.click();
            }else{
                await this.Name.fill(name);
                await this.email.fill(emailAddress);
                await this.registerButton.click();
            }
    }
}