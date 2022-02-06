/// <reference types="cypress"/>

it('A external test...', () =>{

})

describe('should group tests...', () =>{
    describe('Should group more specific tests...', () =>{
        it.skip('A specific test...', () =>{

        })
    })

    it('A internal test...', () =>{

    })
})