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

test("Layout 1 - uma inc - não tratar inc auto", async ({ page }) => {
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

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 1 - todas inc - não tratar inc auto", async ({ page }) => {
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

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 1 - devedor distribuido - não tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 1 - sem inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

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

test("Layout 1 - uma inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 1 - todas inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 1 - devedor distribuido - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

//layout 2

test("Layout 2 - sem inc - não tratar inc auto", async ({ page }) => {
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

test("Layout 2 - uma inc - não tratar inc auto", async ({ page }) => {
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

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 2 - todas inc - não tratar inc auto", async ({ page }) => {
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

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 2 - devedor distribuido - não tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 2 - sem inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

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

test("Layout 2 - uma inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 2 - todas inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 2 - devedor distribuido - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

//Layout 3

test("Layout 3 - sem inc - não tratar inc auto", async ({ page }) => {
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

test("Layout 3 - uma inc - não tratar inc auto", async ({ page }) => {
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

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 3 - todas inc - não tratar inc auto", async ({ page }) => {
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

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 3 - devedor distribuido - não tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 3 - sem inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

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

test("Layout 3 - uma inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 3 - todas inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 3 - devedor distribuido - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

//layout 4

test("Layout 4 - sem inc - não tratar inc auto", async ({ page }) => {
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

test("Layout 4 - uma inc - não tratar inc auto", async ({ page }) => {
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

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 4 - todas inc - não tratar inc auto", async ({ page }) => {
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

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 4 - devedor distribuido - não tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 4 - sem inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

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

test("Layout 4 - uma inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 4 - todas inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 4 - devedor distribuido - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

//layout 5

test("Layout 5 - sem inc - não tratar inc auto", async ({ page }) => {
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

test("Layout 5 - uma inc - não tratar inc auto", async ({ page }) => {
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

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 5 - todas inc - não tratar inc auto", async ({ page }) => {
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

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 5 - devedor distribuido - não tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 5 - sem inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

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

test("Layout 5 - uma inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 5 - todas inc - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});

test("Layout 5 - devedor distribuido - tratar inc auto", async ({ page }) => {
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
    await ia.tratar(true);

    //selecionar layout
    await ia.selLayout("1");

    //caminho, arquivo 
    await ia.arquivo("C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\", "layout-1 - Sem inconsistencia.txt")


    //confirmar importação
    await ia.finalizar();

    //validar importação
    await expect(page.locator('//*[@id="span__MSG"]')).toHaveText('Inconsistências Diversas')
    //se erro 	    Inconsistências Diversas
    //se sucesso 	Remessa processada com sucesso!
});