/// <reference types="cypress" />
describe('search for a product', () => {
  it('Dado que estou no site da Advantage', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://advantageonlineshopping.com/#/')
    cy.get('#menuSearch').should('exist').should('be.visible').click()
    cy.get('#autoComplete').should('exist').should('be.visible').type('mouse{enter}')
    cy.get('#searchResultLabel').should('be.visible')

  })
})


describe('add a product to cart', () => {
  it('Dado que estou no site da Advantage', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://advantageonlineshopping.com/#/')
    cy.get('#menuSearch').should('exist').should('be.visible').click()
    cy.get('#autoComplete').should('exist').should('be.visible').type('mouse{enter}')
    cy.get('.autoCompleteCover > div > img').should('exist').should('be.visible').click()
    cy.get(':nth-child(1) > :nth-child(4) > .productName').should('be.visible').click()
    cy.get('.fixedBtn > .roboto-medium').click()
    cy.get('li > #toolTipCart > :nth-child(1) > table > tbody > #product').should('be.visible')
  })
})


describe('validate products on checkout', () => {
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
  })
})

//ficou repetitivo porque eu nao fiz o pageobject, mas entrega o solicitado no exercício :) sei aplicar mas levaria um pouco mais de tempo



describe('API functional test', () => { 
it('Deve retornar 200', () => { 
  cy.request ({ 
    method: 'GET', 
    url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=mouse'
  }).then((response) =>{
    expect(response.status).to.equal(200)  //cenário que realiza a busca pelo mouse e consulta se retorna 200
  }) 
})
}) 
