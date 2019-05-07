'use strict';

// Part 1
//  Promisify XMLHTTPRequest inside a class with methods: get, post, put, delete. Methods might
// be used by reference. For example: `[‘http://google.com’].map(Http.get)`.
//  Use async/await syntax.
//  Play around with, for example SWAPI, to make couple of nested requests (request based on
// previous request).

// Part 2
//  Create custom class `Book` with constructor param `character` with fields: `name`, `age`.
//  Inside `Book` instance interpolate `name` and `age` into string template (feel free to create any
// story you like).
//  Create iterator property to be able to read your cool story line by line inside for..of loop.
//  Export `Book` as module. Do not create instance in the same file.
//  Use as many ES.Next features as you can.

//   Part 3
//  Create custom class `Bookshelf` and add `Book` instances to it.
//  Implement method `read` as a generator that will return iterator over all added books. Read all
// books inside this loop.

const ENV = {
    HOST: 'https://swapi.co/api/'
};

class ApiService {

    constructor(apiHost = '') {
        this.apiHost = apiHost;
        console.log(this.apiHost);
    }

    requestByPromise() {
        return new Promise((resolve, reject) => {
            resolve('OK PROMISE');
        });
    };

    async requestByAsync() {
        return await 'OK AWAIT';
    };
}

let api = new ApiService(ENV.HOST);

api.requestByPromise().then((message) => {
    XMLHttpRequest.
    console.log(message);
});

api.requestByAsync().then((message) => {
    console.log(message);
});
