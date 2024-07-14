Funcionalidade: Testes de API

  Cenário: Acessar rota inicial "/"
    Dado que eu acesso a rota "/"
    Quando faço uma requisição GET
    Então devo receber uma mensagem "home" com status 200

  Cenário: Listar todos os usuários
    Dado que eu acesso a rota "/api/user"
    Quando faço uma requisição GET
    Então devo receber uma lista de usuários com status 200

  Cenário: Obter usuário por ID válido
    Dado que eu acesso a rota "/api/user/{id}" com ID válido
    Quando faço uma requisição GET
    Então devo receber os dados do usuário com status 200

  Cenário: Criar novo usuário
    Dado que eu acesso a rota "/api/user/create"
    Quando faço uma requisição POST com os seguintes dados:
      """
      {
        "name": "string",
        "e-mail": "string",
        "companies": ["string"]
      }
      """
    Então o usuário deve ser criado com sucesso com status 201

  Cenário: Atualizar usuário por ID
    Dado que eu acesso a rota "/api/user/{id}/update" com ID válido
    Quando faço uma requisição PATCH com os seguintes dados:
      """
      {
        "name": "string",
        "e-mail": "string",
        "companies": ["string"]
      }
      """
    Então os dados do usuário devem ser atualizados com sucesso com status 200

  Cenário: Deletar usuário por ID
    Dado que eu acesso a rota "/api/user/{id}/delete" com ID válido
    Quando faço uma requisição DELETE
    Então o usuário deve ser deletado com sucesso com status 200

  Cenário: Listar todas as empresas
    Dado que eu acesso a rota "/api/company"
    Quando faço uma requisição GET
    Então devo receber uma lista de empresas com status 200

  Cenário: Obter empresa por ID válido
    Dado que eu acesso a rota "/api/company/{id}" com ID válido
    Quando faço uma requisição GET
    Então devo receber os dados da empresa com status 200

  Cenário: Criar nova empresa
    Dado que eu acesso a rota "/api/company/create"
    Quando faço uma requisição POST com os seguintes dados:
      """
      {
        "name": "string",
        "cnpj": "string",
        "adress": {
          "cep": "string",
          "country": "string",
          "city": "string",
          "street_location": "string",
          "number": "string",
          "district": "string"
        }
      }
      """
    Então a empresa deve ser criada com sucesso com status 201

  Cenário: Atualizar empresa por ID
    Dado que eu acesso a rota "/api/company/{id}/update" com ID válido
    Quando faço uma requisição PATCH com os seguintes dados:
      """
      {
        "name": "string",
        "cnpj": "string",
        "adress": {
          "cep": "string",
          "country": "string",
          "state": "string",
          "city": "string",
          "street": "string",
          "number": "string",
          "district": "string"
        }
      }
      """
    Então os dados da empresa devem ser atualizados com sucesso com status 200

  Cenário: Deletar empresa por ID
    Dado que eu acesso a rota "/api/company/{id}/delete" com ID válido
    Quando faço uma requisição DELETE
    Então a empresa deve ser deletada com sucesso com status 200