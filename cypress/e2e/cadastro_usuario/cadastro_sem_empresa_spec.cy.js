describe('Cadastro de Usuário', () => {
    it('Deve exibir uma mensagem de erro ao tentar cadastrar um usuário sem selecionar a empresa', () => {
      cy.btn_novo_usuario();
      cy.campo_vazio_empresa('Sarah', 'sarah@gmail.com', '992916583', 'Porto', '1994-02-10'); // Preencher o formulário sem empresa
      cy.btn_salvar();
      cy.validar_campo_vazio_empresa();
    });
  });
  