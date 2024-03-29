/// <reference types="cypress"/>

describe('Work with PopUps',  ()=>{

    // Hooks
    // before is executed before all
    // beforeEach is executed before each test
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{
        cy.reload();
    })

    it('Should test frame directly', () =>{
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
        
    })


    it.only('Should verify if popup was called', () =>{
        
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
        
    })

    
    describe.only('With links...', () =>{
        beforeEach(()=>{
            cy.visit('https://wcaquino.me/cypress/componentes.html')
        })

        it('Check popup url', () =>{
            cy.contains('Popup2')
                .should('have.prop', 'href')
                .and('equal', 'https://wcaquino.me/cypress/frame.html')
        })

        it('Should access popup dinamically', () =>{
            cy.contains('Popup2').then($a =>{
                const href = $a.prop('href')
                cy.visit(href)
                cy.get('#tfield').type('It works')
            })
        })

        it('Should force link on same page', () => {
            cy.contains('Popup2')
                .invoke('removeAttr', 'target')
                .click()
        })
    })  

        
})
