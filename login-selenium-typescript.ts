import { Builder, By, until } from 'selenium-webdriver';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async function cadastroLogin() {
  const driver = await new Builder().forBrowser('chrome').build();
  await driver.manage().window().maximize();

  const email = `carlos${Date.now()}@example.com`;
  const senha = '123456';

  // Cadastro
  await driver.get('https://front.serverest.dev/login');
  await sleep(1000);
 await driver.findElement(By.linkText('Cadastre-se')).click();
  await sleep(1000);

  await driver.findElement(By.id('nome')).sendKeys('Carlos Teste');
  await sleep(500);

  await driver.findElement(By.id('email')).sendKeys(email);
  await sleep(500);

  await driver.findElement(By.id('password')).sendKeys(senha);
  await sleep(500);

  await driver.findElement(By.id('administrador')).click();
  await sleep(500);

  await driver.findElement(By.className('btn')).click();
  await sleep(2000);

  const mensagemCadastro = await driver.findElement(By.className('alert')).getText();
  console.log('Mensagem de cadastro:', mensagemCadastro);

 // Login
  await driver.get('https://front.serverest.dev/login');
  await sleep(1000);

  await driver.findElement(By.id('email')).sendKeys(email);
  await sleep(500);

  await driver.findElement(By.id('password')).sendKeys(senha);
  await sleep(500);

  await driver.findElement(By.className('btn')).click();
  await sleep(2000);

  // Validação: verifica se o botão "Logout" aparece
  const logoutExiste = await driver.findElements(By.xpath("//button[contains(text(),'Logout')]"));
  if (logoutExiste.length > 0) {
    console.log('✅ Login realizado com sucesso!');
  } else {
    console.log('❌ Falha no login.');
  }
 await sleep(2000);
  await driver.quit();
})();
