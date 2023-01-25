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

    it('Using jquery selector', () =>{
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
    })

    it('Using xpath', () =>{
        cy.xpath('//input[contains(@onclick, \'Francisco\')]')

        ////table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]/following-sibling::td/input
        //// OR
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]/../..//input[@type='text']")

        // Getting the second doutorado option

        cy.xpath("(//table[@id='tabelaUsuarios']//td[contains(., 'Doutorado')])[2]/..//input[@type='text']")

        //Using two filters

        cy.xpath("//td[contains(., 'Usuario A')]/following-sibling::td[contains(., 'Mestrado')]/..//input[@type='text']")
            .type('funciona')

    })
})