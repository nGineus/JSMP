'use strict';
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const METHOD = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
};

class HttpService {

    constructor(apiHost, user, password) {
        this.apiHost = apiHost;
        this.user = user; // For future releases
        this.password = password; // For future releases
    }

    httpCallPromise(method, url) {
        let apiRequest = new XMLHttpRequest();

        return new Promise((resolve, reject) => {
            // if (!url) {
            //     reject(new Error('Unknown url.'));
            // }

            apiRequest.addEventListener("load", () => {
                console.log('LOAD EVENT', apiRequest.status);
                console.log('LOAD EVENT', apiRequest.response);
                resolve(apiRequest.response);
            });

            apiRequest.addEventListener("error", () => {
                console.log('ERROR EVENT');
                reject(apiRequest.error);
            });
            console.log('CALL Url: ', this.apiHost + url);
            apiRequest.open(method, this.apiHost + url);
            apiRequest.send();
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

module.exports = HttpService;