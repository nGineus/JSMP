'use strict';

// • Promisify XMLHTTPRequest inside a class with methods: get, post, put, delete.
// Methods might be used by reference. For example: `[‘http://google.com’].map(Http.get)`.
//
// • Use async/await syntax.

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