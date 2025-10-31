import { Builder, By } from 'selenium-webdriver';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async function cadastro() {
  const driver = await new Builder().forBrowser('chrome').build();
  await driver.manage().window().maximize();

  const email = `carlos${Date.now()}@example.com`;

  await driver.get('https://front.serverest.dev/login');
  await sleep(1000);

  await driver.findElement(By.linkText('Cadastre-se')).click();
  await sleep(1000);

  await driver.findElement(By.id('nome')).sendKeys('Carlos Teste');
  await sleep(500);

  await driver.findElement(By.id('email')).sendKeys(email);
  await sleep(500);

  await driver.findElement(By.id('password')).sendKeys('123456');
  await sleep(500);

  await driver.findElement(By.id('administrador')).click();
  await sleep(500);

  await driver.findElement(By.className('btn')).click();
  await sleep(2000);
 const mensagem = await driver.findElement(By.className('alert')).getText();
  console.log('Mensagem recebida:', mensagem);

  await sleep(2000);
  await driver.quit();
})();
