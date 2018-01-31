const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

// using spy to mock test, ref: https://github.com/mjackson/expect
describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);  // this replaces teh real db object with the mocked object above


    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();  //pass if spy is called
    });

    it('should call spy with parameters correctly', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalledWith('Andrew', 25)  // pass if spy was called with the expected parameters
    });

    it('should call saveUser with user object', () => {
        var email = 'test@test.com';
        var password = '1234567';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});