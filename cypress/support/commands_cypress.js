Cypress.Commands.add('btn_novo_usuario', () => { // acessa página e clica em novo usuario
  cy.visit("http://localhost:5400/");
  cy.contains('Novo Usuário').click();
});

Cypress.Commands.add('dados_usuario', (name, email, number, city, date) => { // preenche formulario completo
  cy.get('[placeholder="Nome"]', { timeout: 10000 }).should('be.visible').type(name);
  cy.get('[placeholder="Email"]', { timeout: 10000 }).type(email);
  cy.get('[placeholder="Telefone"]', { timeout: 10000 }).type(number);
  cy.get('[placeholder="Cidade de nascimento"]', { timeout: 10000 }).type(city);
  cy.get('[placeholder="Data de nascimento"]', { timeout: 10000 }).type(date);
  cy.get('.optionListContainer').invoke('show'); // Torna o container visível
  cy.get('.optionListContainer .option').contains('Empresa 1').click(); // clica em todas empresas
  cy.get('.optionListContainer .option').contains('Empresa 2').click();
  cy.get('.optionListContainer .option').contains('Empresa 3').click();
});

Cypress.Commands.add('dados_minimos_usuario', (name, email, number, date) => { // preenche formulario com dados minimos
  cy.get('[placeholder="Nome"]', { timeout: 10000 }).should('be.visible').type(name);
  cy.get('[placeholder="Email"]', { timeout: 10000 }).type(email);
  cy.get('[placeholder="Telefone"]', { timeout: 10000 }).type(number);
  cy.get('[placeholder="Data de nascimento"]', { timeout: 10000 }).type(date);
  cy.get('.optionListContainer').invoke('show'); // Torna o container visível
  cy.get('.optionListContainer .option').contains('Empresa 1').click(); // clica em todas empresas
  cy.get('.optionListContainer .option').contains('Empresa 2').click();
  cy.get('.optionListContainer .option').contains('Empresa 3').click();
});

Cypress.Commands.add('campo_vazio_empresa', (name, email, number, city, date) => { // preenche formulario sem empresa
  cy.get('[placeholder="Nome"]', { timeout: 10000 }).should('be.visible').type(name);
  cy.get('[placeholder="Email"]', { timeout: 10000 }).type(email);
  cy.get('[placeholder="Telefone"]', { timeout: 10000 }).type(number);
  cy.get('[placeholder="Cidade de nascimento"]', { timeout: 10000 }).type(city);
  cy.get('[placeholder="Data de nascimento"]', { timeout: 10000 }).type(date);
});

Cypress.Commands.add('campo_vazio_data', (name, email, number, city) => { // preenche formulario sem data
  cy.get('[placeholder="Nome"]', { timeout: 10000 }).should('be.visible').type(name);
  cy.get('[placeholder="Email"]', { timeout: 10000 }).type(email);
  cy.get('[placeholder="Telefone"]', { timeout: 10000 }).type(number);
  cy.get('[placeholder="Cidade de nascimento"]', { timeout: 10000 }).type(city);
  cy.get('.optionListContainer').invoke('show'); // Torna o container visível
  cy.get('.optionListContainer .option').contains('Empresa 1').click(); // clica em todas empresas
  cy.get('.optionListContainer .option').contains('Empresa 2').click();
  cy.get('.optionListContainer .option').contains('Empresa 3').click();
});

Cypress.Commands.add('campo_vazio_email', (name, number, city, date) => { // preenche formulario sem email
  cy.get('[placeholder="Nome"]', { timeout: 10000 }).should('be.visible').type(name);
  cy.get('[placeholder="Telefone"]', { timeout: 10000 }).type(number);
  cy.get('[placeholder="Cidade de nascimento"]', { timeout: 10000 }).type(city);
  cy.get('[placeholder="Data de nascimento"]', { timeout: 10000 }).type(date);
  cy.get('.optionListContainer').invoke('show'); // Torna o container visível
  cy.get('.optionListContainer .option').contains('Empresa 1').click(); // clica em todas empresas
  cy.get('.optionListContainer .option').contains('Empresa 2').click();
  cy.get('.optionListContainer .option').contains('Empresa 3').click();
});

Cypress.Commands.add('campo_vazio_nome', (email, number, city, date) => { // preenche formulario sem nome
  cy.get('[placeholder="Email"]', { timeout: 10000 }).type(email);
  cy.get('[placeholder="Telefone"]', { timeout: 10000 }).type(number);
  cy.get('[placeholder="Cidade de nascimento"]', { timeout: 10000 }).type(city);
  cy.get('[placeholder="Data de nascimento"]', { timeout: 10000 }).type(date);
  cy.get('.optionListContainer').invoke('show'); // Torna o container visível
  cy.get('.optionListContainer .option').contains('Empresa 1').click(); // clica em todas empresas
  cy.get('.optionListContainer .option').contains('Empresa 2').click();
  cy.get('.optionListContainer .option').contains('Empresa 3').click();
});

Cypress.Commands.add('campo_vazio_telefone', (name, email, city, date) => { // preenche formulario sem telefone
  cy.get('[placeholder="Nome"]', { timeout: 10000 }).should('be.visible').type(name);
  cy.get('[placeholder="Email"]', { timeout: 10000 }).type(email);
  cy.get('[placeholder="Cidade de nascimento"]', { timeout: 10000 }).type(city);
  cy.get('[placeholder="Data de nascimento"]', { timeout: 10000 }).type(date);
  cy.get('.optionListContainer').invoke('show'); // Torna o container visível
  cy.get('.optionListContainer .option').contains('Empresa 1').click(); // clica em todas empresas
  cy.get('.optionListContainer .option').contains('Empresa 2').click();
  cy.get('.optionListContainer .option').contains('Empresa 3').click();
});

Cypress.Commands.add('btn_salvar', () => { // clica botao salvar
  cy.contains('Salvar').scrollIntoView().click({ force: true });
});

Cypress.Commands.add('verificacao_erro_cidade', () => { // verifica se existe mensagem de erro relacionada ao campo cidade
  cy.get('[placeholder="Cidade de nascimento"]').then(($input) => {
    expect($input[0].validationMessage).to.eq('Cidade inválida');
  });
});

Cypress.Commands.add('verificacao_erro_data', () => { // verifica se existe mensagem de erro relacionada ao campo data
  cy.get('[placeholder="Data"]').then(($input) => {
    expect($input[0].validationMessage).to.eq('Data inválida');
  });
});

Cypress.Commands.add('verificacao_erro_email', () => { // verifica se existe mensagem de erro relacionada ao campo email
  cy.get('[placeholder="Email"]').then(($input) => {
    expect($input[0].validationMessage).to.eq('Email inválido');
  });
});

Cypress.Commands.add('verificacao_erro_telefone', () => { // verifica se existe mensagem de erro relacionada ao campo telefone
  cy.get('[placeholder="Telefone"]').then(($input) => {
    expect($input[0].validationMessage).to.eq('Telefone inválido');
  });
});

Cypress.Commands.add('validar_campo_vazio_empresa', () => {
  cy.get('[placeholder="Empresas"]').then(($input) => {
    expect($input[0].validationMessage).to.eq('Preencha este campo.');
  });
});

Cypress.Commands.add('validar_campo_vazio_data', () => {
  cy.get('[placeholder="Data"]').then(($input) => {
    expect($input[0].validationMessage).to.eq('Preencha este campo.');
  });
});

Cypress.Commands.add('validar_campo_vazio_email', () => {
  cy.get('[placeholder="Email"]').then(($input) => {
    expect($input[0].validationMessage).to.eq('Preencha este campo.');
  });
});

Cypress.Commands.add('validar_campo_vazio_nome', () => {
  cy.get('[placeholder="Nome"]').then(($input) => {
    expect($input[0].validationMessage).to.eq('Preencha este campo.');
  });
});

Cypress.Commands.add('validar_campo_vazio_telefone', () => {
  cy.get('[placeholder="Telefone"]').then(($input) => {
    expect($input[0].validationMessage).to.eq('Preencha este campo.');
  });
});

Cypress.Commands.add('confere_tabela', (name) => {
  cy.wait(5000); // verifica se o usuario é visivel na tabela
  cy.get('table').contains('td', name).should('be.visible');
});

Cypress.Commands.add('btn_deletar', () => {
  cy.wait(5000);
  cy.contains('Delete').click();
});

Cypress.Commands.add('validar_menssagem_delete', () => {
  cy.get('[alt="Delete"]').then(($input) => { // Verificar se a mensagem de exclusao é exibida
    expect($input[0].validationMessage).to.eq('Usuário excluido com sucesso.');
  });
});

Cypress.Commands.add('btn_editar', () => {
  cy.wait(5000);
  cy.contains('Edit').click();
});
