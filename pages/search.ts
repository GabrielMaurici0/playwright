import { Page, expect } from '@playwright/test';
import { time } from 'console';

export class SearchPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    
    async search(devcod : string) {
        
        await this.page.locator('//*[@id="MSG_MPAGE"]/ul/li[2]/a').hover();
        await this.page.locator('//*[@id="MSG_MPAGE"]/ul/li[2]/ul/li[3]/a').click();

        await this.page.fill('//*[@id="_DEVEDOR_CODIGO"]', devcod);

        await this.page.locator('//*[@id="TABLE7"]/tbody/tr/td[1]/input[1]').click();

        await this.page.locator('//*[@id="span__DEVCOD_0001"]/a').click();
    }

    async gerarAcordo(indice: number){
        await expect(this.page.url()).toMatch(/\/homologacao\/servlet\/hacionamento\?[^ ]+/);
        const iframe = this.page.frameLocator('#TBL2 > tbody > tr > td > div:nth-child(14) > iframe');

        await iframe.locator('//*[@id="TABELA_MASTER"]/tbody/tr[7]/td/input[2]').focus();
        await iframe.locator('//*[@id="TABELA_MASTER"]/tbody/tr[7]/td/input[2]').click();

        let parcela = '//*[@id="GRID_CALCULO"]/tbody/tr['+indice+']/td[1]/span/input'

        // await iframe.locator(parcela).focus();
        await iframe.locator(parcela).click();
        await expect(iframe.locator(parcela)).toBeChecked();

        await iframe.locator('//*[@id="TABELA_MASTER"]/tbody/tr[7]/td/input[6]').focus();
        await iframe.locator('//*[@id="TABELA_MASTER"]/tbody/tr[7]/td/input[6]').click();
        
        await iframe.locator('//*[@id="TABELA_MASTER"]/tbody/tr[7]/td/input[7]').focus();
        await iframe.locator('//*[@id="TABELA_MASTER"]/tbody/tr[7]/td/input[7]').click();

        await this.page.waitForTimeout(1000); 
        
        await iframe.locator('//*[@id="BTN_PROCESSAR_ACORDO_0001"]/a').focus();
        await iframe.locator('//*[@id="BTN_PROCESSAR_ACORDO_0001"]/a').click();
        
        this.page.once('dialog', async dialog => {
            await dialog.accept(); // Confirma o alerta
        });

        await this.page.waitForTimeout(3000); 
        // await expect(iframe.locator('//*[@id="TABLE2"]/tbody/tr[4]/td[1]/input[1]')).toHaveText('Calcular');
    }
}