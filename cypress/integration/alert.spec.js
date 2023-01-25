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
        cy.clickAlert('#alert', 'Alert Simples')
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

    it('Cofirm alert - Deny', () =>{
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Negado')
        })
        cy.get('#confirm').click()
    })

    it('Prompt', () =>{

        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
        })

        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Era 42?')
        })

        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal(':D')
        })
        
        cy.get('#prompt').click()
    })

    it('Verifying messages', () =>{
        const stub = cy.stub().as('Alert')

        cy.on('window:alert', stub)

        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('Matheus')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))

        cy.get('[data-cy=dataSobrenome]').type('Phillip')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))

        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    })
})