import {test} from "@playwright/test";
import {RegisterSauceDemo} from '../pages/RegisterSauceDemo';

test.describe('Flujo de Registro', () =>{
    test('Debe de registrar un nuevo usuario con datos aleatorios', async({page}) => {
        const firstName = 'usuario';
        const lastName = 'prueba';
        const emailAddress = `correoprueba${Date.now()}$@gmail.com`;
        const password = 'password123';
        const registerSauceDemo = new RegisterSauceDemo(page);

        await registerSauceDemo.goTo();
        await registerSauceDemo.register(firstName, lastName, emailAddress, password);
   });
});