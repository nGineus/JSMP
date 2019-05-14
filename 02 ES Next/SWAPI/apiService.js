'use strict';

const HttpService = require("./httpService");

class ApiService {


    constructor(ConfigFn) {
        this.apiCreds = ConfigFn.creds;
        this.apiCalls = ConfigFn.apiCalls;
        this.httpService = new HttpService(this.apiCreds.getHost(), this.apiCreds.getUser(), this.apiCreds.getPassword());
    }

    getPeople(id) {
        return this.httpService.httpGetAwait(this.apiCalls.getPeople(id));
    }

    getPlanet(id) {
        return this.httpService.httpGetAwait(this.apiCalls.getPlanet(id));
    }

    getStarship(id) {
        return this.httpService.httpGetAwait(this.apiCalls.getStarship(id));
    }

    getFilms(id) {
        return this.httpService.httpGetAwait(this.apiCalls.getFilms(id));
    }
}

module.exports = ApiService;
