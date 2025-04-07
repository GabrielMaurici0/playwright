import { Page, expect } from '@playwright/test';
import path from "path";

export class importaAcao {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async go(){
        await this.page.locator('//*[@id="MSG_MPAGE"]/ul/li[7]/a').hover();
        await this.page.locator('//*[@id="MSG_MPAGE"]/ul/li[7]/ul/li/a').click();

        await this.page.waitForTimeout(2000);
    }

    async selCarteira(carteira:string){
        await this.page.locator('//*[@id="TABLE1"]/tbody/tr[1]/td[2]/select').selectOption(carteira);

    }

    async selEmpresa(empresa:string){
        await this.page.locator('//*[@id="TABLE1"]/tbody/tr[2]/td[2]/select').selectOption(empresa);

    }
    
    async tratar(target:boolean){
        if (target){
            await this.page.locator('//*[@id="TABLE1"]/tbody/tr[5]/td[2]/p/span/input').click();
        }
    }
    
    async selLayout(layout:string){
        await this.page
        .locator('//*[@id="TABLE1"]/tbody/tr[7]/td[2]/p/select')
        .selectOption(layout);
    }
    
    async arquivo(caminho:string,arquivo:string){

        await this.page.waitForTimeout(1000)

        const fileChooserPromise = this.page.waitForEvent("filechooser");
        await this.page.locator('//*[@id="_FILE"]').click();
        const fileChooser = await fileChooserPromise;
        //informar o caminho do arquivo e o nome do arquivo aqui
        await fileChooser.setFiles(
            path.join(caminho, arquivo)
        );
    
    }

    async finalizar(){
        await this.page.locator('//*[@id="TABLE1"]/tbody/tr[10]/td/input[2]').click();
        await this.page.waitForTimeout(1000)
        await this.page.locator("body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled").click();
    }

}