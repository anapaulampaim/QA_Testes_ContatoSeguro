describe('Exclusão de Usuário', () => {
    it('Deve deletar o usuário selecionado', () => {
      cy.btn_novo_usuario();
      cy.dados_usuario('Sarah', 'sarah@gmail.com', '992916583', 'Porto Alegre', '1994-02-10'); // Preencher o formulário completo
      cy.btn_salvar();
      cy.confere_tabela(); // Verificar se o usuário foi adicionado na tabela
      cy.btn_deletar();
      cy.validar_menssagem_delete();
    });
  });
  