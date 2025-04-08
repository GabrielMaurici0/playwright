import { test, expect } from '@playwright/test';
import { decode } from 'html-entities';

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

  const endpoint = process.env.ENDPOINT!; // Substitua pelo real

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': '"siscobraaction/AWSASSESSORIA.Execute"',
    },
    body: soapXml,
  });

  const responseText = await response.text();

  // Extrai a tag <Xmlout>
  const xmlOutMatch = responseText.match(/<Xmlout>([\s\S]*?)<\/Xmlout>/);
  expect(xmlOutMatch).not.toBeNull();

  const encodedXmlContent = xmlOutMatch![1];

  // Decodifica todas as entidades HTML
  const fullyDecodedXml = decode(decode(encodedXmlContent)); // dupla decodificação se necessário

  // Extrai o link
  const linkMatch = fullyDecodedXml.match(/<arquivo_link>(.*?)<\/arquivo_link>/);
  expect(linkMatch).not.toBeNull();

  const finalUrl = linkMatch![1];

  console.log('🔗 Link final limpo:', finalUrl);
});

test.beforeAll('Processa arquivos', async ({ page })=>{})