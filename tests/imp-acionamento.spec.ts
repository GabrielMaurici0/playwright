import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { importaAcao } from "../pages/importaAcao";

let lp: LoginPage;
let ia: importaAcao;

test.beforeEach(async ({ page }) => {
    lp = new LoginPage(page);
    ia = new importaAcao(page)
});

test("Layout 1 - sem inc - não tratar inc auto", async ({ page }) => {
    test.setTimeout(60_000); 

    await lp.go();
    await lp.sigIn(process.env.USUARIO!, process.env.SENHA!);
    await lp.userLoggedIn();

    await ia.go()

    //selecionar carteira
    await ia.selCarteira("42")

    //selecionar empresa
    await ia.selEmpresa("1")

    //tratar inconsistências?
    await ia.tratar(false);

    //selecionar layout
    await ia.selLayout("1");

    //importar arquivo
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\","layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Remessa processada com sucesso!')
    //se erro 	Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});
