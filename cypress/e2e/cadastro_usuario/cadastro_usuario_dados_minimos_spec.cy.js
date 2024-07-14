describe('Cadastro de Usuário', () => {
  it('Deve cadastrar um usuário com sucesso (dados mínimos)', () => {
    cy.btn_novo_usuario();
    cy.dados_minimos_usuario('Sarah', 'sarah@gmail.com', '992916583', '1994-02-10'); // Preencher o formulário dados mínimos
    cy.btn_salvar();
    cy.confere_tabela(); // Verificar se o usuário foi adicionado na tabela
  });
});
