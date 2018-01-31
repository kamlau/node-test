// using express for testing a server request/response
// will use supertest for this purpose
// ref: https://github.com/visionmedia/supertest

const express = require('express');

var app = express()

// define a root http endpoint and the response
app.get('/', (req, res) => {
    res
        .status(404)
        .send({
            error: 'Page Not Found',
            name: 'Todo App v1.0'
        });
});

// define a /users http endpoint and the response
app.get('/users', (req, res) => {
    res
        .status(200)
        .send([{
            name: 'John',
            age: 24
        }, {
            name: 'Mike',
            age: 25
        }, {
            name: 'Jane',
            age: 18
        }
    ]);
})


app.listen(3000);

module.exports.app = app;