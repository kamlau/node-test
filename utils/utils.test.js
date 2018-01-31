const expect = require('expect');  //ref: https://github.com/mjbackson.expect
const utils = require('./utils');

// test for normal add method
it('should add add two numbers', () => {
    var result = utils.add(33, 11);
    expect(result).toBe(44).toBeA('number');
});

// test for async add method with 1 second delay
it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {  // async test - need to use done in the calling parameter
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

// test for normal squaring
it('should square a number', () => {
    var result = utils.square(9);
    expect(result).toBe(81).toBeA('number');
});

// test for async squaring with 1 sec delay
it('should async square a number', (done) => {
    utils.asyncSquare(3, (square) => {  // async test - need to use the done in the calling parameter
        expect(square).toBe(9).toBeA('number');
        done();
    });
});

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should verify first and last names are set'), () => {
    var user = {location: 'USA', age: 25};
    var result = utils.setName(user, 'Kam Lau');
    expect(result).toInclude({
        firstName: 'Kam',
        lastName: 'Lau'
    });
};


// it('should expect some value', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'andrew'}).toEqual({name: 'andrew'});
//     // expect([2,3,4]).toInclude(3);
//     expect({
//         name: 'Andrew',
//         age: 25,
//         location: 'USA'
//     }).toInclude({
//         age: 25
//     })
// });

