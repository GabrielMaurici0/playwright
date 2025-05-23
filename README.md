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

4. Instalar as dependencias 
    ```
    yarn install

    ```

5. Instalar a infraestrutura do Playwright
    ```
    npx playwright install
    ```



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

### Sugestões

Para facilitar a escrita do código, é possível utilizar a extensão do Playwright para o VSCode. Ela adiciona uma seção na barra lateral, identificada pelo ícone de um tubo de ensaio. Ao acessar esse menu, você terá acesso a diversas ferramentas do Playwright, como o gravador de testes (codegen), visualização de execuções anteriores, criação e execução de testes, inspeção de elementos da interface e depuração interativa dos testes. Essas funcionalidades tornam o processo de automação mais rápido, intuitivo e eficiente.
