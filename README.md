# Como iniciar um projeto utilizando Playwright

1. Instalar o Yarn utilizando o comando:
    ```
    npm install --global yarn
    ```

2. Verificar a instalação do Yarn com:
    ```
    yarn --version
    ```

3. Inicializar um novo projeto com Yarn:
    ```
    yarn init
    ```

4. Instalar a infraestrutura do Playwright
    ```
    npx playwright install
    ```

5. Criar o arquivo playwright.config.ts na root da página


# Como executar um teste

1. Criar a pasta 
    ```
    tests
    ```

2. Dentro da pasta /tests/ deve ter ao menos um arquivo XXXX.spec.ts 

3. Executar o comando abaixo para executar os testes normalmente
    ```
    npx playwright test
    ```
    Ou utilizar o comando abaixo para executar apenas um arquivo de teste
     ```
    npx playwright test /tests/XXXX.spec.ts
    ```

    Caso seja necessário Debugar utilizar o comando:
    ```
    npx playwright test --debug
    ```

4. Utilizar o comando abaixo para apresentar o report dos testes
    ```
    npx playwright show-report
    ```