/// <reference types="cypress"/>

describe('Work with iFrames',  ()=>{

    // Hooks
    // before is executed before all
    // beforeEach is executed before each test
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{
        cy.reload();
    })


    it('Should fill text field', () =>{
        cy.get('#frame1').then(iFrame =>{
            const body = iFrame.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('does it work?')
                .should('have.value', 'does it work?')

            cy.on('window:alert', msg => {
                expect(msg).to.be.equal('Alert simples')
            })
            //cy.wrap(body).find('#otherButton').click()
        })
        

        
    })

    it('Should test frame directly', () =>{
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
        
    })
        

        
})
