import { test, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs'
import * as xml2js from 'xml2js'
import { LoginPage } from "../pages/login-page";

let lp: LoginPage;

test.beforeEach(async ({ page }) => {
    lp = new LoginPage(page);
});

test('Arquivo upload - Acionamento', async () => {
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

test.beforeAll('Processa arquivos', async ({ page })=>{

  await lp.go()
  await lp.sigIn(process.env.USUARIO!, process.env.SENHA!)
  await lp.userLoggedIn()

})