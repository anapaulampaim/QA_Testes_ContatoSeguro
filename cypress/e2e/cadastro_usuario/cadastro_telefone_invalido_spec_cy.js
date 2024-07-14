describe('Cadastro de Usuário', () => {
  it('Deve exibir uma mensagem de erro ao tentar cadastrar um usuário com telefone inválido', () => {
    cy.btn_novo_usuario();
    cy.dados_usuario('Sarah', 'sarah@gmail.com', 'maria', 'Porto', '1992-02-10'); // Preencher o formulário com o campo telefone inválido
    cy.btn_salvar();
    cy.verificacao_erro_telefone();
  });
});
