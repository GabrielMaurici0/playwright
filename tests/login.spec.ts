import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

//Test -> Se trata do todo, no caso, o bloco que contém o método de teste

//Expect -> Se trata do que se espera do teste, o resultado esperado

//await -> Se trata de uma palavra reservada do JavaScript que permite que o código aguarde a execução de uma função assíncrona 
// antes de continuar a execução do código. Isso é útil quando você precisa esperar por uma operação assíncrona, como uma chamada 
// de rede ou uma operação de leitura de arquivo, antes de prosseguir com o restante do código.

//test('descrição'), async ({ page -> acesso ao contexto do navegador })=>{}


test.only('Login Correto', async ({ page }) => {
    
    const loginPage: LoginPage = new LoginPage(page);
    // Vai para a pagina de login / Acessa a url
    await loginPage.go();
    //Preenche os dados com base no arquivo dotenv
     //Clica no botão de Login
    await loginPage.sigIn(process.env.USUARIO!, process.env.SENHA!);
    await loginPage.userLoggedIn();
});

test('Login Incorreto', async ({ page }) => {
    await page.goto('https://www.moozcobranca.com.br/homologacao/servlet/hsiscobra');

    await page.fill('//*[@id="_USUCODC"]', process.env.USUARIO!);
    await page.fill('#_USUSEN', 'abcdefg');

    await page.locator('//*[@id="TABLE"]/tbody/tr[6]/td[3]/input[1]').click();

    await expect(page.locator('//*[@id="swal2-html-container"]')).toHaveText('Os dados informados estão incorretos.');

});