const request = require('supertest');
const expect = require('expect');

var app = require('./server').app

// use describe to group tests in logical groupings
describe('Server', () => {
    describe('#Get /', () => {
        it('should return hello world response', (done) => {
            request(app)  //supertest
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({  //expect
                        error: 'Page Not Found'
                    });
                })
                .end(done);
        });        
    });
    describe('#Get /Users', () => {
        it('should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'John',
                        age: 24
                    });
                })
                .end(done);
        });
    });
});