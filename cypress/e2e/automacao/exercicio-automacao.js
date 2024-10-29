/// <reference types="cypress" />

describe('add a product to cart', () => {
  it('Dado que estou no site da Advantage', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://advantageonlineshopping.com/#/')
    cy.get('#menuSearch').should('exist').should('be.visible').click()
    cy.get('#autoComplete').should('exist').should('be.visible').type('mouse{enter}')
    cy.get('.autoCompleteCover > div > img').should('exist').should('be.visible').click()
    cy.get(':nth-child(1) > :nth-child(4) > .productName').should('be.visible').click()
    cy.get('.fixedBtn > .roboto-medium').click()
    cy.get('li > #toolTipCart > :nth-child(1) > table > tfoot > :nth-child(2) > td > #checkOutPopUp').should('be.visible')
    cy.get('#checkOutPopUp').click()
    cy.get('#userCart').should('be.visible')
    //esse cenário contempla e valida todos os cenários solicitados no exercício, desde a validacao da pesquisa de um produto até a consulta dele no checkout
    //por favor ignorem a falta da estrutura e as configs vindo junto aqui do cypress, eu formatei a máquina recentemente entao tive que instalar tudo do zero para fazer esse teste
    //de automacao, entao só puxei o template básico que vem de comeco e adaptei para o caso de teste solicitado. quaisque dúvidas só entrar em contato
  })
})
