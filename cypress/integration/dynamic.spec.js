/// <reference types="cypress"/>

describe('Dynamic tests',  ()=>{

    // Hooks
    // before is executed before all
    // beforeEach is executed before each test
    beforeEach(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
    foods.forEach(food =>{
        it(`Creating register with varied foods: ${food}`, ()=>{
            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('Qualquer')
            cy.get(`[name=formSexo][value=F]`).click()
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click()
            cy.get('#formEscolaridade').select('Doutorado')
            cy.get('#formEsportes').select('Corrida')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')

        })
    })
    
    it.only('Dev selecionar todos usando o each', () => {
        cy.get('#formNome').type('Usuario')
        cy.get('#formSobrenome').type('Qualquer')
        cy.get(`[name=formSexo][value=F]`).click()
        
        cy.get('[name=formComidaFavorita]').each($element => {
            if($element.val() != 'vegetariano')
                cy.wrap($element).click()
        })
        
        cy.get('#formEscolaridade').select('Doutorado')
        cy.get('#formEsportes').select('Corrida')

        //cy.get('#formCadastrar').click()
        //cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
    })
})