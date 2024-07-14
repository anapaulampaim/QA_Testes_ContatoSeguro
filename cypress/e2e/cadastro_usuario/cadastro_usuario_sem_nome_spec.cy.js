describe('Cadastro de Usuário', () => {
  it('Deve exibir uma mensagem de erro ao tentar cadastrar um usuário sem o campo Nome preenchido', () => {
    cy.btn_novo_usuario();
    cy.campo_vazio_nome('sarah@gmail.com', '992916583', 'Porto Alegre', '1994-02-10'); // Preencher o formulário
    cy.btn_salvar();
    cy.validar_campo_vazio_nome(); // Verificar se o usuário foi adicionado na tabela
  });
});
