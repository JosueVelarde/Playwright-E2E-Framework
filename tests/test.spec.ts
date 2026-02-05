import {test, expect } from "@playwright/test";
import {RegisterSauceDemo} from '../pages/RegisterSauceDemo';

test.describe('Flujo de Registro', () =>{
    
    test('Debe de registrar un nuevo usuario con datos aleatorios', async({page}) => {
        let firstName = 'usuario';
        let lastName = 'prueba';
        let emailAddress = `correoprueba${Date.now()}$@gmail.com`;
        let password = 'password123';
        const registerSauceDemo = new RegisterSauceDemo(page);

        await registerSauceDemo.goTo();
        await registerSauceDemo.register(firstName, lastName, emailAddress, password);
   });

   test('Registrar usuario con campos vacios', async({page}) =>{
        let firstName = '';
        let lastName = 'prueba';
        let emailAddress = `correoprueba${Date.now()}$@gmail.com`;
        let password = 'password123';
        const registerSauceDemo = new RegisterSauceDemo(page);

        await registerSauceDemo.goTo();
        await registerSauceDemo.register(firstName, lastName, emailAddress, password);

        //Verificamos el mensaje de error
        await expect(registerSauceDemo.errorMessage).toBeVisible();
   });
});