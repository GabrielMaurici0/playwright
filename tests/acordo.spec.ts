import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";


let lp: LoginPage;

test.beforeEach(async ({ page }) => {
    // Vai para a pagina de login / Acessa a url
    lp = new LoginPage(page);
});

test('Gerar acordo boleto', async ({ page }) => {

    await lp.go()
    await lp.sigIn(process.env.USUARIO!, process.env.SENHA!)
    await lp.userLoggedIn()

    await page.locator('//*[@id="MSG_MPAGE"]/ul/li[2]/a').hover();
    await page.locator('//*[@id="MSG_MPAGE"]/ul/li[2]/ul/li[3]/a').click();

    await page.fill('//*[@id="_DEVEDOR_CODIGO"]', '12345');

    await page.locator('//*[@id="TABLE7"]/tbody/tr/td[1]/input[1]').click();
    await page.locator('//*[@id="span__DEVCOD_0001"]/a').click();

    await expect(page.locator('//*[@id="TEXTBLOCK18"]')).toHaveText('ID Siscobra');

    const iframe = page.frameLocator('#TBL2 > tbody > tr > td > div:nth-child(14) > iframe');
    
    await page.locator('#TBL2 > tbody > tr > td > div:nth-child(14) > iframe').waitFor();

    await page.mouse.wheel(0, 10000); // rola a página para baixo

    await iframe.locator('//*[@id="TABELA_MASTER"]/tbody/tr[7]/td/input[2]').click();
    await page.mouse.wheel(0, -1500); 

    await iframe.locator('//*[@id="GRID_CALCULO"]/tbody/tr[3]/td[1]/span/input').click();
    await expect(iframe.locator('//*[@id="GRID_CALCULO"]/tbody/tr[3]/td[1]/span/input')).toBeChecked();

    await page.mouse.wheel(0, 10000); // rola a página para baixo

    await iframe.locator('//*[@id="TABELA_MASTER"]/tbody/tr[7]/td/input[6]').click();
    await iframe.locator('//*[@id="TABELA_MASTER"]/tbody/tr[7]/td/input[7]').click();


    page.once('dialog', async dialog => {
        console.log(`Tipo de diálogo: ${dialog.type()}`);
        console.log(`Mensagem: ${dialog.message()}`);
        await dialog.accept(); // Confirma o alerta
    });

    await iframe.locator('//*[@id="BTN_PROCESSAR_ACORDO_0001"]/a').click();
})