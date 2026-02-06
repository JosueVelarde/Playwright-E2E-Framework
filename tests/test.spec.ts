import {test, expect } from "@playwright/test";
import {RegisterAutomationExercise} from '../pages/RegisterAutomationExercise';
        

test.describe('Flujo de Registro', () =>{
    test('Debe de registrar un nuevo usuario con datos aleatorios y luego hacer el login con esos datos', async({page}) => {
     let firstName = 'usuario';
     let emailAddress = `correoprueba${Date.now()}$@gmail.com`;
     const registerAutomationExercise = new RegisterAutomationExercise(page);

     await registerAutomationExercise.goTo();
     await registerAutomationExercise.register(firstName, emailAddress);
   });

   /*
   //Se tiene que hacer este test a mano, ya que salta un captcha y no se termina de ejecutar completo
   test('Registrar usuario con nombre vacio', async({page}) =>{
     let firstName = '';
     let emailAddress = `correoprueba${Date.now()}$@gmail.com`;
     const registerAutomationExercise = new RegisterAutomationExercise(page);

     await registerAutomationExercise.goTo();
     await registerAutomationExercise.register(firstName, emailAddress);
     
     const message = await page.getByPlaceholder('Name').evaluate((element: HTMLInputElement) => element.validationMessage);
     expect(message).toContain('Completa este campo');
   });*/
   
   /*
   test('Registrar usuario con correo vacío', async({page}) =>{
     let firstName = 'usuario';
     let emailAddress = '';
     const registerAutomationExercise = new RegisterAutomationExercise(page);

     await registerAutomationExercise.goTo();
     await registerAutomationExercise.register(firstName, emailAddress);
     
     const message = await page.getByPlaceholder('Email Address').evaluate((element: HTMLInputElement) => element.validationMessage);
     expect(message).toContain('Completa este campo');
   });*/

   /*
   test('Registrar usuario con correo sin "@"', async({page}) =>{
     let firstName = 'usuario';
     let emailAddress = `correoprueba${Date.now()}$`;
     const registerAutomationExercise = new RegisterAutomationExercise(page);

     await registerAutomationExercise.goTo();
     await registerAutomationExercise.register(firstName, emailAddress);
     
     const message = await page.getByPlaceholder('Email Address').evaluate((element: HTMLInputElement) => element.validationMessage);
     expect(message).toContain(`Incluye un signo "@" en la dirección de correo electrónico. La dirección "${emailAddress}" no incluye "@".`);
   });*/

   /*
   test('Registrar usuario con correo con "@" pero sin nada despues', async({page}) =>{
     let firstName = 'usuario';
     let emailAddress = `correoprueba${Date.now()}$@`;
     const registerAutomationExercise = new RegisterAutomationExercise(page);

     await registerAutomationExercise.goTo();
     await registerAutomationExercise.register(firstName, emailAddress);
     
     const message = await page.getByPlaceholder('Email Address').evaluate((element: HTMLInputElement) => element.validationMessage);
     expect(message).toContain(`Introduce texto detrás del signo "@". La dirección "${emailAddress}" esta incompleta.`);
   });*/
});