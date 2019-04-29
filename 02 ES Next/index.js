'use strict';

// • Promisify XMLHTTPRequest inside a class with methods: get, post, put, delete.
// Methods might be used by reference. For example: `[‘http://google.com’].map(Http.get)`.
//
// • Use async/await syntax.

const ENV = {
  HOST: 'https://swapi.co/api/'
};

class ApiService {
    let apiHost: string;

    constructor(apiHost: string) {
        this.apiHost = apiHost;
    }

    requestByPromise = () => {
        return new Promise('OK PROMISE');
    };

    requestByAsync = async () => {
        return await 'OK AWAIT';
    };
}

let api = new ApiService(ENV.HOST);

api.requestByPromise().then( (message) => {
    console.log(message);
});

console.log(api.requestByAsync());