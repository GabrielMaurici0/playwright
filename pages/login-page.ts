import { Page, expect, type Locator } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly cpf: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cpf = page.locator('#TEXTBLOCK4')
    }

    async go() {
        await this.page.goto("https://www.moozcobranca.com.br/homologacao/servlet/hsiscobra", { waitUntil: 'domcontentloaded' });
        await expect(this.cpf).toHaveText('CPF Usuário');
    }

    async sigIn(user: string, pass: string) {
        await this.page.fill('//*[@id="_USUCODC"]', user);
        await this.page.fill("#_USUSEN", pass);
        await this.page.locator('//*[@id="TABLE"]/tbody/tr[6]/td[3]/input[1]').click();
    }

    async userLoggedIn() {
        const confirmar = this.page.locator(
            '//*[@id="TABLE_DERRUBA_SESSAO"]/tbody/tr[5]/td[3]/input[1]'
        );

        if (confirmar) {
            await confirmar.click();
        }

        await expect(this.page).toHaveURL(
            "https://www.moozcobranca.com.br/homologacao/servlet/hbranco"
        );
    }
}
