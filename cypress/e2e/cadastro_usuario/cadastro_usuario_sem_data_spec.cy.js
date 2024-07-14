describe('Cadastro de Usuário', () => {
    it('Deve exibir uma mensagem de erro ao tentar cadastrar um usuário sem o campo Data preenchido', () => {
      cy.btn_novo_usuario();
      cy.campo_vazio_data('Sarah', 'sarah@gmail.com', '992916583', 'Porto'); // Preencher o formulário sem empresa
      cy.btn_salvar();
      cy.validar_campo_vazio_data();
    });
  });
  