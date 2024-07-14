describe('Cadastro de Usuário', () => {
  it('Deve cadastrar um usuário com sucesso', () => {
    cy.btn_novo_usuario();
    cy.dados_usuario('Sarah', 'sarah@gmail.com', '992916583', 'Porto Alegre', '1994-02-10'); // Preencher o formulário
    cy.btn_salvar();
    cy.confere_tabela(); // Verificar se o usuário foi adicionado na tabela
  });
});
