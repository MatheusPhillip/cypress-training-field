/// <reference types="cypress"/>

describe('Esperas...', ()=>{
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{
        cy.reload();
    })

    it('Deve aguardar elemento estar disponível', ()=>{
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('not.exist');
        cy.get('#novoCampo').should('exist');
        cy.get('#novoCampo').type('funciona');
    })

    it.only('Deve fazer retrys', ()=>{

        cy.get('#buttonDelay').click();
        
        // It will fail
        //cy.get('#novoCampo')
        //    .should('exist')
        //    .should('not.exist')

        //cy.get('#novoCampo')
        //   .should('not.exist')
        //    .type('funciona')

        // It will work
        cy.get('#novoCampo').should('not.exist')
            
        cy.get('#novoCampo').should('exist').type('Encontrou')
    })

    it('Uso do find', ()=>{
        cy.get('#buttonList').click()
    })
})