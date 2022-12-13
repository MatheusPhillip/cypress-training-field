/// <reference types="cypress"/>

describe('Helpers...', ()=>{
    it('Wrap', ()=>{
        const obj = {nome: 'User', idade: '20'}
        expect(obj).to.have.property('nome')
        //obj.should is not gonna work, so we use a wrapper
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').then($element => {
            // $element.val('works using jquery')
            // Using jquery will not not allow the actions to be recorded on the runner
            
            // Using cypress
            cy.wrap($element).type('Works using cypress')
        })

    })

    it('Wrap Using promises', ()=>{
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('I have found the first button'))
        // promise.then(number => console.log(number))
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('I have found the second button'))


        cy.wrap(1).then(num =>{
            return 2
        }).should('be.equal', 2)
    })

    it.only('Its...', ()=>{
        const obj = {nome: 'User', idade: '20'}
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User')

        const obj2 = {nome: 'User', idade: '20', endereco: {rua: 'dos bolos'}}
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bolos')
        // OR cy.wrap(obj2).its('endereco.rua').should('contain', 'bolos')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal', 20)




    })

})