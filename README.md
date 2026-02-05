# Framework de Automatización E2E con Playwright & TypeScript

Este proyecto es un framework de automatización de pruebas de extremo a extremo (E2E) desarrollado con **Playwright** y **TypeScript** para la plataforma SauceDemo

## Tecnologías utilizadas
* **Lenguaje:** TypScript
* **Herramienta de Test:** Playwright
* **Patrón de diseño:** Page Object Model (POM)
* **CI/CD:** GithHub Actions

## Escenerios automatizados 05/02/2025
- [x] Registrarse en la página con usuario y contraseña válidos.
- [x] Login existoso y manejo de errores.
- [x] Flujo completo de compra (Checkout).
- [x] Validación de filtros de productos.

## Comandos usados en Playwright

- npx playwright test (Para ejecutar todos los .spec.ts. Para ejecutar uno [npx playwright test test/test.spec.ts])
- npx playwright show-report (Para ver los test report. Se debe de ejecutar )
- npx playwright test --ui (Para ejecutar test con interfaz visual)
- npx playwright test --debug (Para ejecutar el modo debug)

## Instalación y Configuraicon

1. **Clonar el repositorio:**
```bash
   git clone [https://github.com/JosueVelarde/Playwright-E2E-Framework.git](https://github.com/JosueVelarde/Playwright-E2E-Framework.git)
   cd Playwright-E2E-Framework

