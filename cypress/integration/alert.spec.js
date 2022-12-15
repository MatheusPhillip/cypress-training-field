/// <reference types="cypress"/>

describe('Work with alerts',  ()=>{

    // Hooks
    // before is executed before all
    // beforeEach is executed before each test
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{
        cy.reload();
    })


    it('Alert', () =>{
        cy.get('#alert').click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    })

    it('Alert using MOCK', () =>{
        const stub = cy.stub().as('alert stub')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
        
    })

    it('Cofirm alert', () =>{
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Confirmado')
        })
        cy.get('#confirm').click()
    })
    it.only('Cofirm alert - Deny', () =>{
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Negado')
        })
        cy.get('#confirm').click()
    })
})