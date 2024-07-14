describe('Cadastro de Usuário', () => {
  it('Deve exibir uma mensagem de erro ao tentar cadastrar um usuário com e-mail inválido', () => {
    cy.btn_novo_usuario();
    cy.dados_usuario('Sarah', 'sarahgmail.com', '992916583', 'Porto', '1994-02-10'); // Preencher o formulário com o campo email inválido
    cy.btn_salvar();
    cy.verificacao_erro_email();
  });
});
