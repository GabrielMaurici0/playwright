import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { SearchPage } from "../pages/search";


let lp: LoginPage;
let sp: SearchPage

test.beforeEach(async ({ page }) => {
    lp = new LoginPage(page);
    sp = new SearchPage(page);
});

test('Gerar acordo boleto', async ({ page }) => {

    await lp.go()
    await lp.sigIn(process.env.USUARIO!, process.env.SENHA!)
    await lp.userLoggedIn()

    //inserir devcod aqui
    await sp.search('12345')
    //inserir o indice da parcela aqui
    await sp.gerarAcordo(12)

})