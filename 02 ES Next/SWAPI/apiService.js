'use strict';

const HttpService = require("./httpService");

export class ApiService {
    httpService;

    constructor(ENV) {
        this.httpService = new HttpService(ENV.getHost(), ENV.getUser(), ENV.getPassword());

        console.log('getPeople... ', ENV.getHost() + ENV.getPeople(0));
        console.log('getPlanet... ', ENV.getHost() + ENV.getPlanet(1));
        console.log('getStarship... ', ENV.getHost() + ENV.getStarship(2));
    }

    getPeople() {
        console.log('getPeople... ');
        // this.httpService.
    }

    getPlanet() {
        console.log('getPlanet... ');

    }

    getStarship() {
        console.log('getStarship... ');

    }
}