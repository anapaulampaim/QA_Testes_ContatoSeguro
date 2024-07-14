describe('Edição de Usuário', () => {
    it('Deve editar o usuário selecionado', () => {
      cy.btn_novo_usuario();
      cy.dados_usuario('Sarah', 'sarah@gmail.com', '992916583', 'Porto Alegre', '1994-02-10'); // Preencher o formulário completo
      cy.btn_salvar();
      cy.confere_tabela(); // Verificar se o usuário foi adicionado na tabela
      cy.btn_editar();
    });
  });
  