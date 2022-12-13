/// <reference types="cypress"/>

describe('Cypress basics', () => {
    it.only('should visit a page and assert title', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        // Printing the title on console
        // This won't work because cypress works with promises
        //const title = cy.title();
        //console.log(title);

        // Correct form
        // it works with then and should
        cy.title().then(title =>{
            console.log(title)
        })
        

        //cy.pause()

        let syncTitle

        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Campo')
    
        cy.title().then(title => {
            console.log(title)

            cy.get('#formNome').type(title)

            syncTitle = title
        })
    
        cy.get('[data-cy=dataSobrenome]').then($el =>{
            $el.val(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($el =>{
            cy.wrap($el).type(syncTitle)
        })
        
    })

    it('Should find and interact with an element', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        
        // Finding and clicking in the button
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!');
    })


})