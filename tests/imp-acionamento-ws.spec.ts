import { test, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs'
import * as xml2js from 'xml2js'
import { LoginPage } from "../pages/login-page";

let lp: LoginPage;

test.beforeEach(async ({ page }) => {
    lp = new LoginPage(page);
});

//executar novamente trocando os arquivos e 
//alterando no processo automático para tratar inc automaticamente

test.describe('Upload Acionamento -> Processamento - Layout 1', () => {
  test('Arquivo upload - sem inc', async () => {
    console.log('Iniciando Arquivo upload...');
    
    const soapXml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sis="siscobra">
        <soapenv:Header/>
        <soapenv:Body>
          <sis:WSAssessoria.Execute>
            <sis:Token>${process.env.TOKEN!}</sis:Token>
            <sis:Carcod>42</sis:Carcod>
            <sis:Metodo>ARQUIVO_UPLOAD</sis:Metodo>
            <sis:Xmlin>
              &lt;arquivo_upload&gt;
                &lt;tipo_arquivo&gt;ACIONAMENTOS&lt;/tipo_arquivo&gt;
                &lt;idt_assessoria&gt;42&lt;/idt_assessoria&gt;
              &lt;/arquivo_upload&gt;
            </sis:Xmlin>
          </sis:WSAssessoria.Execute>
        </soapenv:Body>
      </soapenv:Envelope>
    `;
  
    const endpoint = process.env.ENDPOINT!; 
  
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': '"siscobraaction/AWSASSESSORIA.Execute"',
      },
      body: soapXml,
    });
  
    const responseText = await response.text();
  
    const parser = new xml2js.Parser({ explicitArray: false });
  
    const outerResult = await parser.parseStringPromise(responseText)
  
    const xmloutString = outerResult['SOAP-ENV:Envelope']['SOAP-ENV:Body']['WSAssessoria.ExecuteResponse']['Xmlout'];
  
    const innerParser = new xml2js.Parser({ explicitArray: false });
    const innerResult = await innerParser.parseStringPromise(xmloutString);
    const link = innerResult.arquivo_upload.arquivo.arquivo_link;
    
    const zipPath = path.resolve(__dirname, "C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\layout-2 - Sem inconsistencia.zip");
    const zipBuffer = fs.readFileSync(zipPath);
  
    const newResponse = await fetch(link,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/zip',
      },
      body: soapXml,
    });
  
    const finalRes = newResponse.text()
    await expect(newResponse.status).toEqual(200)
    
  });
  test('Arquivo upload - uma inc', async () => {
    console.log('Iniciando Arquivo upload...');
    
    const soapXml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sis="siscobra">
        <soapenv:Header/>
        <soapenv:Body>
          <sis:WSAssessoria.Execute>
            <sis:Token>${process.env.TOKEN!}</sis:Token>
            <sis:Carcod>42</sis:Carcod>
            <sis:Metodo>ARQUIVO_UPLOAD</sis:Metodo>
            <sis:Xmlin>
              &lt;arquivo_upload&gt;
                &lt;tipo_arquivo&gt;ACIONAMENTOS&lt;/tipo_arquivo&gt;
                &lt;idt_assessoria&gt;42&lt;/idt_assessoria&gt;
              &lt;/arquivo_upload&gt;
            </sis:Xmlin>
          </sis:WSAssessoria.Execute>
        </soapenv:Body>
      </soapenv:Envelope>
    `;
  
    const endpoint = process.env.ENDPOINT!; 
  
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': '"siscobraaction/AWSASSESSORIA.Execute"',
      },
      body: soapXml,
    });
  
    const responseText = await response.text();
  
    const parser = new xml2js.Parser({ explicitArray: false });
  
    const outerResult = await parser.parseStringPromise(responseText)
  
    const xmloutString = outerResult['SOAP-ENV:Envelope']['SOAP-ENV:Body']['WSAssessoria.ExecuteResponse']['Xmlout'];
  
    const innerParser = new xml2js.Parser({ explicitArray: false });
    const innerResult = await innerParser.parseStringPromise(xmloutString);
    const link = innerResult.arquivo_upload.arquivo.arquivo_link;
    
    const zipPath = path.resolve(__dirname, "C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\layout-2 - Sem inconsistencia.zip");
    const zipBuffer = fs.readFileSync(zipPath);
  
    const newResponse = await fetch(link,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/zip',
      },
      body: soapXml,
    });
  
    const finalRes = newResponse.text()
    await expect(newResponse.status).toEqual(200)
    
  });
  test('Arquivo upload - todas inc', async () => {
    console.log('Iniciando Arquivo upload...');
    
    const soapXml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sis="siscobra">
        <soapenv:Header/>
        <soapenv:Body>
          <sis:WSAssessoria.Execute>
            <sis:Token>${process.env.TOKEN!}</sis:Token>
            <sis:Carcod>42</sis:Carcod>
            <sis:Metodo>ARQUIVO_UPLOAD</sis:Metodo>
            <sis:Xmlin>
              &lt;arquivo_upload&gt;
                &lt;tipo_arquivo&gt;ACIONAMENTOS&lt;/tipo_arquivo&gt;
                &lt;idt_assessoria&gt;42&lt;/idt_assessoria&gt;
              &lt;/arquivo_upload&gt;
            </sis:Xmlin>
          </sis:WSAssessoria.Execute>
        </soapenv:Body>
      </soapenv:Envelope>
    `;
  
    const endpoint = process.env.ENDPOINT!; 
  
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': '"siscobraaction/AWSASSESSORIA.Execute"',
      },
      body: soapXml,
    });
  
    const responseText = await response.text();
  
    const parser = new xml2js.Parser({ explicitArray: false });
  
    const outerResult = await parser.parseStringPromise(responseText)
  
    const xmloutString = outerResult['SOAP-ENV:Envelope']['SOAP-ENV:Body']['WSAssessoria.ExecuteResponse']['Xmlout'];
  
    const innerParser = new xml2js.Parser({ explicitArray: false });
    const innerResult = await innerParser.parseStringPromise(xmloutString);
    const link = innerResult.arquivo_upload.arquivo.arquivo_link;
    
    const zipPath = path.resolve(__dirname, "C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\layout-2 - Sem inconsistencia.zip");
    const zipBuffer = fs.readFileSync(zipPath);
  
    const newResponse = await fetch(link,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/zip',
      },
      body: soapXml,
    });
  
    const finalRes = newResponse.text()
    await expect(newResponse.status).toEqual(200)
    
  });
  test('Arquivo upload - devedor exportado', async () => {
    console.log('Iniciando Arquivo upload...');
    
    const soapXml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sis="siscobra">
        <soapenv:Header/>
        <soapenv:Body>
          <sis:WSAssessoria.Execute>
            <sis:Token>${process.env.TOKEN!}</sis:Token>
            <sis:Carcod>42</sis:Carcod>
            <sis:Metodo>ARQUIVO_UPLOAD</sis:Metodo>
            <sis:Xmlin>
              &lt;arquivo_upload&gt;
                &lt;tipo_arquivo&gt;ACIONAMENTOS&lt;/tipo_arquivo&gt;
                &lt;idt_assessoria&gt;42&lt;/idt_assessoria&gt;
              &lt;/arquivo_upload&gt;
            </sis:Xmlin>
          </sis:WSAssessoria.Execute>
        </soapenv:Body>
      </soapenv:Envelope>
    `;
  
    const endpoint = process.env.ENDPOINT!; 
  
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': '"siscobraaction/AWSASSESSORIA.Execute"',
      },
      body: soapXml,
    });
  
    const responseText = await response.text();
  
    const parser = new xml2js.Parser({ explicitArray: false });
  
    const outerResult = await parser.parseStringPromise(responseText)
  
    const xmloutString = outerResult['SOAP-ENV:Envelope']['SOAP-ENV:Body']['WSAssessoria.ExecuteResponse']['Xmlout'];
  
    const innerParser = new xml2js.Parser({ explicitArray: false });
    const innerResult = await innerParser.parseStringPromise(xmloutString);
    const link = innerResult.arquivo_upload.arquivo.arquivo_link;
    
    const zipPath = path.resolve(__dirname, "C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\layout-2 - Sem inconsistencia.zip");
    const zipBuffer = fs.readFileSync(zipPath);
  
    const newResponse = await fetch(link,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/zip',
      },
      body: soapXml,
    });
  
    const finalRes = newResponse.text()
    await expect(newResponse.status).toEqual(200)
    
  });

  test('Processa arquivos', async ({ page })=>{
    console.log('Iniciando Processa arquivos...');

    await lp.go()
    await lp.sigIn(process.env.USUARIO!, process.env.SENHA!)
    await lp.userLoggedIn()
  
    await page.locator('//*[@id="MSG_MPAGE"]/ul/li[4]/a').hover()
    await page.locator('//*[@id="MSG_MPAGE"]/ul/li[4]/ul/li[5]/a').click()
  
    await page.fill('//*[@id="PROAUTSEQ"]', '40')
    await page.locator('//*[@id="TBL11"]/tbody/tr[1]/td[2]/input[2]').click()
  
    await page.locator('//*[@id="TABLE1"]/tbody/tr[4]/td/input[2]').click()
  
    
  })
});

test.describe('Upload Acionamento -> Processamento - Layout 2', () => {
  test('Arquivo upload', async () => {
    console.log('Iniciando Arquivo upload...');
    
    const soapXml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sis="siscobra">
        <soapenv:Header/>
        <soapenv:Body>
          <sis:WSAssessoria.Execute>
            <sis:Token>${process.env.TOKEN!}</sis:Token>
            <sis:Carcod>42</sis:Carcod>
            <sis:Metodo>ARQUIVO_UPLOAD</sis:Metodo>
            <sis:Xmlin>
              &lt;arquivo_upload&gt;
                &lt;tipo_arquivo&gt;ACIONAMENTOS&lt;/tipo_arquivo&gt;
                &lt;idt_assessoria&gt;42&lt;/idt_assessoria&gt;
              &lt;/arquivo_upload&gt;
            </sis:Xmlin>
          </sis:WSAssessoria.Execute>
        </soapenv:Body>
      </soapenv:Envelope>
    `;
  
    const endpoint = process.env.ENDPOINT!; 
  
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': '"siscobraaction/AWSASSESSORIA.Execute"',
      },
      body: soapXml,
    });
  
    const responseText = await response.text();
  
    const parser = new xml2js.Parser({ explicitArray: false });
  
    const outerResult = await parser.parseStringPromise(responseText)
  
    const xmloutString = outerResult['SOAP-ENV:Envelope']['SOAP-ENV:Body']['WSAssessoria.ExecuteResponse']['Xmlout'];
  
    const innerParser = new xml2js.Parser({ explicitArray: false });
    const innerResult = await innerParser.parseStringPromise(xmloutString);
    const link = innerResult.arquivo_upload.arquivo.arquivo_link;
    
    const zipPath = path.resolve(__dirname, "C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\layout-2 - Sem inconsistencia.zip");
    const zipBuffer = fs.readFileSync(zipPath);
  
    const newResponse = await fetch(link,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/zip',
      },
      body: soapXml,
    });
  
    const finalRes = newResponse.text()
    await expect(newResponse.status).toEqual(200)
    
  });

  test('Processa arquivos', async ({ page })=>{
    console.log('Iniciando Processa arquivos...');

    await lp.go()
    await lp.sigIn(process.env.USUARIO!, process.env.SENHA!)
    await lp.userLoggedIn()
  
    await page.locator('//*[@id="MSG_MPAGE"]/ul/li[4]/a').hover()
    await page.locator('//*[@id="MSG_MPAGE"]/ul/li[4]/ul/li[5]/a').click()
  
    await page.fill('//*[@id="PROAUTSEQ"]', '40')
    await page.locator('//*[@id="TBL11"]/tbody/tr[1]/td[2]/input[2]').click()
  
    await page.locator('//*[@id="TABLE1"]/tbody/tr[4]/td/input[2]').click()
  
    
  })
});

test.describe('Upload Acionamento -> Processamento - Layout 3', () => {
  test('Arquivo upload', async () => {
    console.log('Iniciando Arquivo upload...');
    
    const soapXml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sis="siscobra">
        <soapenv:Header/>
        <soapenv:Body>
          <sis:WSAssessoria.Execute>
            <sis:Token>${process.env.TOKEN!}</sis:Token>
            <sis:Carcod>42</sis:Carcod>
            <sis:Metodo>ARQUIVO_UPLOAD</sis:Metodo>
            <sis:Xmlin>
              &lt;arquivo_upload&gt;
                &lt;tipo_arquivo&gt;ACIONAMENTOS&lt;/tipo_arquivo&gt;
                &lt;idt_assessoria&gt;42&lt;/idt_assessoria&gt;
              &lt;/arquivo_upload&gt;
            </sis:Xmlin>
          </sis:WSAssessoria.Execute>
        </soapenv:Body>
      </soapenv:Envelope>
    `;
  
    const endpoint = process.env.ENDPOINT!; 
  
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': '"siscobraaction/AWSASSESSORIA.Execute"',
      },
      body: soapXml,
    });
  
    const responseText = await response.text();
  
    const parser = new xml2js.Parser({ explicitArray: false });
  
    const outerResult = await parser.parseStringPromise(responseText)
  
    const xmloutString = outerResult['SOAP-ENV:Envelope']['SOAP-ENV:Body']['WSAssessoria.ExecuteResponse']['Xmlout'];
  
    const innerParser = new xml2js.Parser({ explicitArray: false });
    const innerResult = await innerParser.parseStringPromise(xmloutString);
    const link = innerResult.arquivo_upload.arquivo.arquivo_link;
    
    const zipPath = path.resolve(__dirname, "C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\layout-2 - Sem inconsistencia.zip");
    const zipBuffer = fs.readFileSync(zipPath);
  
    const newResponse = await fetch(link,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/zip',
      },
      body: soapXml,
    });
  
    const finalRes = newResponse.text()
    await expect(newResponse.status).toEqual(200)
    
  });

  test('Processa arquivos', async ({ page })=>{
    console.log('Iniciando Processa arquivos...');

    await lp.go()
    await lp.sigIn(process.env.USUARIO!, process.env.SENHA!)
    await lp.userLoggedIn()
  
    await page.locator('//*[@id="MSG_MPAGE"]/ul/li[4]/a').hover()
    await page.locator('//*[@id="MSG_MPAGE"]/ul/li[4]/ul/li[5]/a').click()
  
    await page.fill('//*[@id="PROAUTSEQ"]', '40')
    await page.locator('//*[@id="TBL11"]/tbody/tr[1]/td[2]/input[2]').click()
  
    await page.locator('//*[@id="TABLE1"]/tbody/tr[4]/td/input[2]').click()
  
    
  })
});

test.describe('Upload Acionamento -> Processamento - Layout 4', () => {
  test('Arquivo upload', async () => {
    console.log('Iniciando Arquivo upload...');
    
    const soapXml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sis="siscobra">
        <soapenv:Header/>
        <soapenv:Body>
          <sis:WSAssessoria.Execute>
            <sis:Token>${process.env.TOKEN!}</sis:Token>
            <sis:Carcod>42</sis:Carcod>
            <sis:Metodo>ARQUIVO_UPLOAD</sis:Metodo>
            <sis:Xmlin>
              &lt;arquivo_upload&gt;
                &lt;tipo_arquivo&gt;ACIONAMENTOS&lt;/tipo_arquivo&gt;
                &lt;idt_assessoria&gt;42&lt;/idt_assessoria&gt;
              &lt;/arquivo_upload&gt;
            </sis:Xmlin>
          </sis:WSAssessoria.Execute>
        </soapenv:Body>
      </soapenv:Envelope>
    `;
  
    const endpoint = process.env.ENDPOINT!; 
  
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': '"siscobraaction/AWSASSESSORIA.Execute"',
      },
      body: soapXml,
    });
  
    const responseText = await response.text();
  
    const parser = new xml2js.Parser({ explicitArray: false });
  
    const outerResult = await parser.parseStringPromise(responseText)
  
    const xmloutString = outerResult['SOAP-ENV:Envelope']['SOAP-ENV:Body']['WSAssessoria.ExecuteResponse']['Xmlout'];
  
    const innerParser = new xml2js.Parser({ explicitArray: false });
    const innerResult = await innerParser.parseStringPromise(xmloutString);
    const link = innerResult.arquivo_upload.arquivo.arquivo_link;
    
    const zipPath = path.resolve(__dirname, "C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\layout-2 - Sem inconsistencia.zip");
    const zipBuffer = fs.readFileSync(zipPath);
  
    const newResponse = await fetch(link,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/zip',
      },
      body: soapXml,
    });
  
    const finalRes = newResponse.text()
    await expect(newResponse.status).toEqual(200)
    
  });

  test('Processa arquivos', async ({ page })=>{
    console.log('Iniciando Processa arquivos...');

    await lp.go()
    await lp.sigIn(process.env.USUARIO!, process.env.SENHA!)
    await lp.userLoggedIn()
  
    await page.locator('//*[@id="MSG_MPAGE"]/ul/li[4]/a').hover()
    await page.locator('//*[@id="MSG_MPAGE"]/ul/li[4]/ul/li[5]/a').click()
  
    await page.fill('//*[@id="PROAUTSEQ"]', '40')
    await page.locator('//*[@id="TBL11"]/tbody/tr[1]/td[2]/input[2]').click()
  
    await page.locator('//*[@id="TABLE1"]/tbody/tr[4]/td/input[2]').click()
  
    
  })
});

test.describe('Upload Acionamento -> Processamento - Layout 5', () => {
  test('Arquivo upload', async () => {
    console.log('Iniciando Arquivo upload...');
    
    const soapXml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sis="siscobra">
        <soapenv:Header/>
        <soapenv:Body>
          <sis:WSAssessoria.Execute>
            <sis:Token>${process.env.TOKEN!}</sis:Token>
            <sis:Carcod>42</sis:Carcod>
            <sis:Metodo>ARQUIVO_UPLOAD</sis:Metodo>
            <sis:Xmlin>
              &lt;arquivo_upload&gt;
                &lt;tipo_arquivo&gt;ACIONAMENTOS&lt;/tipo_arquivo&gt;
                &lt;idt_assessoria&gt;42&lt;/idt_assessoria&gt;
              &lt;/arquivo_upload&gt;
            </sis:Xmlin>
          </sis:WSAssessoria.Execute>
        </soapenv:Body>
      </soapenv:Envelope>
    `;
  
    const endpoint = process.env.ENDPOINT!; 
  
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': '"siscobraaction/AWSASSESSORIA.Execute"',
      },
      body: soapXml,
    });
  
    const responseText = await response.text();
  
    const parser = new xml2js.Parser({ explicitArray: false });
  
    const outerResult = await parser.parseStringPromise(responseText)
  
    const xmloutString = outerResult['SOAP-ENV:Envelope']['SOAP-ENV:Body']['WSAssessoria.ExecuteResponse']['Xmlout'];
  
    const innerParser = new xml2js.Parser({ explicitArray: false });
    const innerResult = await innerParser.parseStringPromise(xmloutString);
    const link = innerResult.arquivo_upload.arquivo.arquivo_link;
    
    const zipPath = path.resolve(__dirname, "C:\\Users\\gabriel.mauricio\\Desktop\\2239\\Arquivos de acionamento para o teste\\layout-2 - Sem inconsistencia.zip");
    const zipBuffer = fs.readFileSync(zipPath);
  
    const newResponse = await fetch(link,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/zip',
      },
      body: soapXml,
    });
  
    const finalRes = newResponse.text()
    await expect(newResponse.status).toEqual(200)
    
  });

  test('Processa arquivos', async ({ page })=>{
    console.log('Iniciando Processa arquivos...');

    await lp.go()
    await lp.sigIn(process.env.USUARIO!, process.env.SENHA!)
    await lp.userLoggedIn()
  
    await page.locator('//*[@id="MSG_MPAGE"]/ul/li[4]/a').hover()
    await page.locator('//*[@id="MSG_MPAGE"]/ul/li[4]/ul/li[5]/a').click()
  
    await page.fill('//*[@id="PROAUTSEQ"]', '40')
    await page.locator('//*[@id="TBL11"]/tbody/tr[1]/td[2]/input[2]').click()
  
    await page.locator('//*[@id="TABLE1"]/tbody/tr[4]/td/input[2]').click()
  
    
  })
});
