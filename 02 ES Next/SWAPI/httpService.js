'use strict';

const METHOD = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
};

export class HttpService {
    // apiRequest = new XMLHttpRequest();

    constructor(apiHost, user, password) {
        this.apiHost = apiHost;
        this.user = user;
        this.password = password;

        console.log('Initialisation... ', this.apiHost, this.user, this.password);
    }

    httpCallPromise(method, url) {
        return new Promise((resolve, reject) => {
            if (!url) {
                reject(new Error('Unknown url.'));
            }
            setTimeout(() => {
                reject(new Error('Timeout error.'));
            }, 5000);
            resolve('OK... ');
        });
    };

    async httpGetAwait(url) {
        return await this.httpCallPromise(METHOD.GET, url);
    };

    async httpPostAwait(url) {
        return await this.httpCallPromise(METHOD.POST, url);
    };

    async httpDeleteAwait(url) {
        return await this.httpCallPromise(METHOD.DELETE, url);
    };

    async httpPutAwait(url) {
        return await this.httpCallPromise(METHOD.PUT, url);
    };
}