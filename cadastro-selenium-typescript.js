"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async function cadastro() {
    const driver = await new selenium_webdriver_1.Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    const email = `carlos${Date.now()}@example.com`;
    await driver.get('https://front.serverest.dev/login');
    await sleep(1000);
    await driver.findElement(selenium_webdriver_1.By.linkText('Cadastre-se')).click();
    await sleep(1000);
    await driver.findElement(selenium_webdriver_1.By.id('nome')).sendKeys('Carlos Teste');
    await sleep(500);
    await driver.findElement(selenium_webdriver_1.By.id('email')).sendKeys(email);
    await sleep(500);
    await driver.findElement(selenium_webdriver_1.By.id('password')).sendKeys('123456');
    await sleep(500);
    await driver.findElement(selenium_webdriver_1.By.id('administrador')).click();
    await sleep(500);
    await driver.findElement(selenium_webdriver_1.By.className('btn')).click();
    await sleep(2000);
    const mensagem = await driver.findElement(selenium_webdriver_1.By.className('alert')).getText();
    console.log('Mensagem recebida:', mensagem);
    await sleep(2000);
    await driver.quit();
})();
