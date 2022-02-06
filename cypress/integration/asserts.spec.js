/// <reference types="cypress"/>

it('Equality', () => {
    const a = 1;

    expect(a, 'Deveria ser 1').equal(1); // TRUE
    //expect(a, 'Deveria ser 1').equal(2); // FALSE

    // More readable ways of writing the same expression
    expect(a).to.equal(1); // TRUE
    expect(a).to.be.equal(1); // TRUE

})

it('Truthy', () =>{
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

it('Object Equality', () =>{
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);
    //expect(obj).to.be.equal({a:1, b:2}); // FALSE
    expect(obj).to.be.deep.equal({a:1, b:2});
    expect(obj).eql({a:1, b:2});
    expect(obj).include({a:1});
    expect(obj).to.have.property('b');
    expect(obj, 'Deveria ser 2').to.have.property('b', 2);
})

it('Arrays', () =>{
    const arr = [1,2,3]
    expect(arr).to.have.members([1, 2, 3])
    // expect(arr).to.have.members([1, 2]) //FALSE 
    expect(arr).to.include.members([1, 2, 3])
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;
})

it('Types', () =>{
    const num = 1;
    const str = 'String'

    expect(num).to.be.a('number');
    expect(str).to.be.a('string');
    expect({}).to.be.a('object');
    expect([]).to.be.a('array');
})

it('String', () =>{
    const str = 'String de teste';

    expect(str).to.be.equal('String de teste');
    expect(str).to.have.length(15);
    expect(str).to.contains('de');
    expect(str).to.match(/de/); // Deve conter
    expect(str).to.match(/^String/); // Deve conter no início
    expect(str).to.match(/teste$/); // Deve conter no final
    expect(str).to.match(/.{15}/);
    expect(str).to.match(/\w+/); // Apenas letras
    expect(str).to.match(/\D+/); // Não contem números

})

it('Numbers', () =>{
    const number = 4;
    const floatNumber = 5.2123;

    expect(number).to.be.equal(4);
    expect(number).to.be.above(3);
    expect(number).to.be.below(7);
    expect(floatNumber).to.be.equal(5.2123);
    expect(floatNumber).to.be.closeTo(5.2, 0.1); // 0.1 é a precisão
    expect(floatNumber).to.be.above(5);
})









