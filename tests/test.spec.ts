import {test, expect } from "@playwright/test";
import {RegisterAutomationExercise} from '../pages/RegisterAutomationExercise';
import {LoginAutomationExercise} from '../pages/LoginAutomationExercise';
import * as fs from 'fs'; //importamos para manejar archivos
import path from "path";
   
//definimos la ruta del archivo donde coger los datos
const filePath = path.resolve(__dirname, '../data/userData.json');
//leemos el archivo y lo convertimos de texto a objeto
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
const user = data.registerdUser;

test.describe('Flujo de Registro', () =>{
    test('Debe de registrar un nuevo usuario con datos aleatorios', async({page, browserName}) => {
      //el registro de datos se hará solo en chromium ya que no se puede hacer el registro con los mismo datos en los tres navegadores
      test.skip(browserName !== 'chromium', 'Solo se va a ejecutar en chromium');
      let Name = 'usuario';
      let emailAddress = `correoprueba${Date.now()}$@gmail.com`;
      let password = 'password123';
      let dayBirth = '25', monthBirth = 'August', yearBirth = '1995';
      let firstName = 'prueba', lastName = 'pruebaPrueba';
      let address = 'calle prueba';
      let country = 'Canada';
      let state = 'state prueba', city = 'cityPrueba', zipcode = 12345, mobile = 658187271;
      const registerAutomationExercise = new RegisterAutomationExercise(page);

      //se crea un archivo JSON para tener los registros guardados
      const userData = {
        registerdUser:{
          name: Name,
          email: emailAddress,
          password: password,
          dayBirth: dayBirth,
          monthBirth: monthBirth,
          yearBirth: yearBirth,
          firstName: firstName,
          lastName: lastName,
          address: address,
          country: country,
          state: state,
          city: city,
          zipcode: zipcode,
          mobile: mobile
        }
      };
      //se crea el archivo json con los datos anteriores
      fs.writeFileSync('./data/userData.json', JSON.stringify(userData,null,2));

      await registerAutomationExercise.goTo();
      await expect(page.getByText('New User Signup!')).toBeVisible();
      await registerAutomationExercise.registerInicio(Name, emailAddress);
      await expect(page.getByText('Enter Account Information')).toBeVisible();
      await registerAutomationExercise.registerCompleto(
        password, firstName, lastName, address, state, city, zipcode, mobile,
        dayBirth, monthBirth, yearBirth, country
      );
    });
   
    test('Registrar usuario con nombre vacio', async({page}) =>{
      let Name = '';
      let emailAddress = `correoprueba${Date.now()}$@gmail.com`;
      const registerAutomationExercise = new RegisterAutomationExercise(page);

      await registerAutomationExercise.goTo();
      await registerAutomationExercise.registerInicio(Name, emailAddress);
     
     const message = await page.getByPlaceholder('Name').evaluate((element: HTMLInputElement) => element.validationMessage);
     expect(message).toContain('Please fill out this field.');
    });
   
    test('Registrar usuario con correo vacío', async({page}) =>{
      let firstName = 'usuario';
      let emailAddress = '';
      const registerAutomationExercise = new RegisterAutomationExercise(page);

      await registerAutomationExercise.goTo();
      await registerAutomationExercise.registerInicio(firstName, emailAddress);
     
      const message = await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').evaluate((element: HTMLInputElement) => element.validationMessage);
      expect(message).toContain('Please fill out this field.');
    });

    test('Registrar usuario con correo sin "@"', async({page}) =>{
      let firstName = 'usuario';
      let emailAddress = `correoprueba${Date.now()}$`;
      const registerAutomationExercise = new RegisterAutomationExercise(page);

      await registerAutomationExercise.goTo();
      await registerAutomationExercise.registerInicio(firstName, emailAddress);
     
      const message = await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').evaluate((element: HTMLInputElement) => element.validationMessage);
      expect(message).toContain(`Please include an '@' in the email address. '${emailAddress}' is missing an '@'.`);
    });

    test('Registrar usuario con correo con "@" pero sin nada despues', async({page}) =>{
      let firstName = 'usuario';
      let emailAddress = `correoprueba${Date.now()}$@`;
      const registerAutomationExercise = new RegisterAutomationExercise(page);

      await registerAutomationExercise.goTo();
      await registerAutomationExercise.registerInicio(firstName, emailAddress);
     
      const message = await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').evaluate((element: HTMLInputElement) => element.validationMessage);
      expect(message).toContain(`Please enter a part following '@'. '${emailAddress}' is incomplete.`);
    });
});
  //sacamos la informacion del json creado durante el registro
test.describe('Flujo completo del Login', () =>{
  test('Login exitoso', async({page})=>{
    const loginAutomationExercie = new LoginAutomationExercise(page);

    await loginAutomationExercie.goTo();
    await loginAutomationExercie.login(user.email, user.password);
  });

  test('Login sin correo', async({page})=>{
    const loginAutomationExercie = new LoginAutomationExercise(page);

    await loginAutomationExercie.goTo();
    await loginAutomationExercie.login('', user.password);

    const message = await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').evaluate((element: HTMLInputElement) => element.validationMessage);
    expect(message).toContain('Please fill out this field.');
  });

  test('Login sin password', async({page})=>{
    const loginAutomationExercie = new LoginAutomationExercise(page);
  
    await loginAutomationExercie.goTo();
    await loginAutomationExercie.login(user.email, '');

    const message = await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').evaluate((element: HTMLInputElement) => element.validationMessage);
    expect(message).toContain('Please fill out this field.');
  })
});