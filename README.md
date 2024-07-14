<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<span>Observação: A descrição completa do projeto está disponível no README dentro da pasta <code>teste_qa_jr</code>.</span>



    <title>Documentação de Testes Automatizados</title>
</head>
<body>
    <h1>Documentação de Testes Automatizados</h1>

    <h2>Executando Testes Automatizados em Cypress</h2>
    <p>Para executar os testes automatizados em Cypress, siga os passos abaixo:</p>
    <ol>
        <li><strong>Pré-requisitos</strong>:
            <ul>
                <li>Certifique-se de ter o Node.js instalado na sua máquina.</li>
            </ul>
        </li>
        <li><strong>Configuração do Ambiente</strong>:
            <ul>
                <li>Clone o repositório do projeto do GitHub.</li>
                <li>Instale as dependências do projeto utilizando o comando:
                    <br><code>npm install</code>
                </li>
            </ul>
        </li>
        <li><strong>Executando os Testes</strong>:
            <ul>
                <li>Para executar os testes automatizados em Cypress, utilize o comando:
                    <br><code>npm run cypress:open</code>
                </li>
                <li>Se preferir executar os testes em modo headless, utilize o comando:
                    <br><code>npm run cypress:run</code>
                </li>
            </ul>
        </li>
    </ol>

    <h2>Testes de API e Cenários em Gherkin</h2>
    <p>Os testes de API foram escritos utilizando o framework Postman.</p>
    <p>Todos os cenários de testes automatizados em Cypress foram escritos em Gherkin, seguindo a abordagem de Desenvolvimento Orientado por Comportamento (BDD).</p>

    <h2>Erros Identificados durante os Testes</h2>
    <ul>
        <li><strong>Campo de Cidade de Nascimento:</strong> O campo de cidade de nascimento aceita números e permite o cadastro sem exibir erro.</li>
        <li><strong>Campo de Seleção de Empresa:</strong> Após a seleção de uma empresa, o menu suspenso não se fecha automaticamente, sobrepondo o botão de salvar.</li>
        <li><strong>Edição de Usuários:</strong> Não é possível realizar a edição de usuários, pois o botão de edição não funciona.</li>
        <li><strong>Campo de Telefone:</strong> O campo de telefone não possui um limite de caracteres e aceita letras.</li>
    </ul>

    <h2>Documentação da API</h2>
    <p>A documentação detalhada da API pode ser acessada através do seguinte link:</p>
    <p><a href="https://documenter.getpostman.com/view/36958817/2sA3kPoPMg" target="_blank">Documentação da API</a></p>

</body>
</html>
