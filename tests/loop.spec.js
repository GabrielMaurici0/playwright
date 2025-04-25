// npm install csv parser 

// func necessárias 
const fs = require('fs')
//import * as fs from 'fs'
//import * as csv from 'csv-parser'
const csv = require('csv-parser')
//import { test, expect } from "@playwright/test"
const { test, expect } = require("@playwright/test")

async function readCSV(filePath) {
    return new Promise((resolve, reject) => {
        const results = []
        
        fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (error) => reject(error))
    })
}

test('Loop', async({ page }) => {

    const data  = await readCSV('./loop.csv')

    for (const row of data){

        await page.goto('https://bugbank.netlify.app/')
        await page.getByRole('button', { name: 'Registrar' }).click()
        await page.waitForTimeout(2000)
        await page.locator('form').filter({ hasText: 'Voltar ao loginE-' }).getByPlaceholder('Informe seu e-mail').fill(row.email)
        await page.getByRole('textbox', { name: 'Informe seu Nome' }).fill(row.nome)
        await page.locator('form').filter({ hasText: 'Voltar ao loginE-' }).getByPlaceholder('Informe sua senha').fill(row.senha)
        await page.getByRole('textbox', { name: 'Informe a confirmação da senha' }).fill(row.senha)
        await page.getByRole('button', { name: 'Cadastrar' }).click()
        await page.getByText('Fechar').click()
        await page.waitForTimeout(2000)
    }

    
})