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

    httpCallPromise(method, url, data = null) {
        let apiRequest = new XMLHttpRequest();

        return new Promise((resolve, reject) => {
            apiRequest.addEventListener("load", () => resolve(JSON.parse(apiRequest.responseText)));
            apiRequest.addEventListener("error", () => reject(apiRequest.error));

            apiRequest.open(method, this.apiHost + url);
            apiRequest.send(data);
        });
    }

    async httpGetAwait(url) {
        return this.httpCallPromise(METHOD.GET, url);
    }

    async httpPostAwait(url, data) {
        return await this.httpCallPromise(METHOD.POST, url, data);
    }

    async httpDeleteAwait(url) {
        return await this.httpCallPromise(METHOD.DELETE, url);
    }

    async httpPutAwait(url, data) {
        return await this.httpCallPromise(METHOD.PUT, url, data);
    }
}

module.exports = HttpService;