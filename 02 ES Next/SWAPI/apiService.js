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

        // console.log('getPeople... ', this.apiCreds.getHost() + this.apiCalls.getPeople(null));
        // console.log('getPlanet... ', this.apiCreds.getHost() + this.apiCalls.getPlanet(1));
        // console.log('getStarship... ', this.apiCreds.getHost() + this.apiCalls.getStarship(2));
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
    getSpyces(id) {
        return this.httpService.httpGetAwait(this.apiCalls.getStarship(id));
    }
}

module.exports = ApiService;