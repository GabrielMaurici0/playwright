import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";

//Test -> Se trata do todo, no caso, o bloco que contém o método de teste

//Expect -> Se trata do que se espera do teste, o resultado esperado

//await -> Se trata de uma palavra reservada do JavaScript que permite que o código aguarde a execução de uma função assíncrona
// antes de continuar a execução do código. Isso é útil quando você precisa esperar por uma operação assíncrona, como uma chamada
// de rede ou uma operação de leitura de arquivo, antes de prosseguir com o restante do código.

//test('descrição'), async ({ page -> acesso ao contexto do navegador })=>{}

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    // Vai para a pagina de login / Acessa a url
    loginPage = new LoginPage(page);
});

test("Login Correto", async ({ page }) => {
    await loginPage.go();
  //Preenche os dados com base no arquivo dotenv
  //Clica no botão de Login
    await loginPage.sigIn(process.env.USUARIO!, process.env.SENHA!);
    await loginPage.userLoggedIn();
});

test("Login Incorreto", async ({ page }) => {
    await loginPage.go();
    await loginPage.sigIn(process.env.USUARIO!, process.env.SENHAI!);
    await loginPage.validMessage("Os dados informados estão incorretos.");
});

test("Senha obrigatória", async ({ page }) => {
    await loginPage.go();
    await loginPage.sigIn(process.env.USUARIO!, " ");
    await loginPage.validMessage("Informe a senha.");
});

test("Usuário obrigatório", async ({ page }) => {

    await loginPage.go();
    await loginPage.sigIn(" ", process.env.SENHA!);
    await loginPage.validMessage("Informe o usuário.");
});
