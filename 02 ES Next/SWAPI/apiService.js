'use strict';

const HttpService = require("./httpService");

class ApiService {
    httpService; // Protocol service
    apiCreds;    // API Credentials
    apiCalls;    // API call string configurations

    constructor(ConfigFn) {
        this.apiCreds = ConfigFn.creds;
        this.apiCalls = ConfigFn.apiCalls;
        this.httpService = new HttpService(this.apiCreds.getHost(), this.apiCreds.getUser(), this.apiCreds.getPassword());
    }

    async getPeople(id) {
        return await this.httpService.httpGetAwait(this.apiCalls.getPeople(id)).then( (res) => res);
    }

    async getPlanet(id) {
        return await this.httpService.httpGetAwait(this.apiCalls.getPlanet(id)).then( (res) => res);
    }

    async getStarship(id) {
        return await this.httpService.httpGetAwait(this.apiCalls.getStarship(id)).then( (res) => res);
    }

    async getFilms(id) {
        return await this.httpService.httpGetAwait(this.apiCalls.getFilms(id)).then( (res) => res);
    }
}

module.exports = ApiService;