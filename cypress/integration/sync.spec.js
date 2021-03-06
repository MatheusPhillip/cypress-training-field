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

    it('Deve fazer retrys', ()=>{

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
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        // It does not work because when the find locates the span it only has the Item 1
        //cy.get('#lista li')
        //    .find('span')
        //    .should('contain', 'Item 2')

        // Solution
        cy.get('#lista li span')
            .should('contain', 'Item 1')
            .and('contain', 'Item 2')

                

    })

    it('Uso do find, DOM elements list', ()=>{
        
        cy.get('#buttonListDOM').click()
        
        // It gives an error on the Item 2, because the Item 1 is removed from the list,
        // but the find method looks for the entire span box
        /*
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 2')
        */

        // Solution
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it('Uso do timeout and Wait', ()=>{

        // Cypress default timeout is 4s
        // This button shows up after 3s
        //cy.get('#buttonDelay').click()
        //cy.get('#novoCampo').should('exist')

        // Changing timeout
        //cy.get('#buttonDelay').click()
        // Setting timeout for one exlusive element
        //cy.get('#novoCampo',{timeout:1000}).should('exist')

        // To change the default timeout for every case open cypress.json
        // and set the property "DefaultCommandTimeout" and set the timeout 
        /*
        {
            "DefaultCommandTimeout":1000
        }
        */

        // Using WAIT
        cy.get('#buttonListDOM').click()
        //cy.wait(5000) // It's better using timeout for that element
        cy.get('#lista li span',{timeout: 30000})
            .should('have.length', 2)
        
        // Getting each length per time
        // cy.get('#lista li span')
        //     .should('have.length', 1)
        // cy.get('#lista li span',)
        //     .should('have.length', 2)
    })
    it.only('Click retry', ()=>{
        // Not all commands have retry
        // clicks and text strings for example
        cy.get('#buttonCount')
            .click()
            .should('have.value', '11')
    })
})