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
            console.log('CALL GET: ', this.apiHost + url);
            apiRequest.addEventListener("load", () => resolve(JSON.parse(apiRequest.responseText)));
            apiRequest.addEventListener("error", () => reject(apiRequest.error));

            apiRequest.open(method, this.apiHost + url);
            apiRequest.send();
        });
    };

    async httpGetAwait(url) {
        return this.httpCallPromise(METHOD.GET, url);
        // .then((result) => {
        //
        //     return result;
        // }, (error) => {
        //     console.log('ERROR EVENT', error);
            // return null;
        // });
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