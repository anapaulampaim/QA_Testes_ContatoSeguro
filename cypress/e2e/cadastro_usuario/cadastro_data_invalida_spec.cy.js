describe('Cadastro de Usuário', () => {
  it('Deve exibir uma mensagem de erro ao tentar cadastrar um usuário com data inválida', () => {
    cy.btn_novo_usuario();
    cy.dados_usuario('Sarah', 'sarah@gmail.com', '992916583', '123', '0000-15-80'); // Preencher o formulário com o campo data inválido
    cy.btn_salvar();
    cy.verificacao_erro_data();
  });
});
