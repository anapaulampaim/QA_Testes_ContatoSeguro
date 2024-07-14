describe('Cadastro de Usuário', () => {
  it('Deve exibir uma mensagem de erro ao tentar cadastrar um usuário com cidade inválida', () => {
    cy.btn_novo_usuario();
    cy.dados_usuario('Sarah', 'sarah@gmail.com', '992916583', '123', '1994-02-10'); // Preencher o formulário com o campo cidade inválido
    cy.btn_salvar();
    cy.verificacao_erro_cidade();
  });
});
