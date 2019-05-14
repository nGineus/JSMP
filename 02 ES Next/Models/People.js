'use strict';

const ConfigFn = require("../SWAPI/config");
const ApiService = require("../SWAPI/apiService");
let starWarsApi = new ApiService(ConfigFn);

class People {

    constructor(id) {
        this.id = id;
        this.films = [];
        this.starships = [];
    }

    async getFromDto(dto) {
        this.name = dto.name;
        this.gender = dto.gender;
        this.mass = dto.mass;

        this.homeworld = await starWarsApi.getPlanet(this.getId(dto.homeworld))
            .then(res => res.name);

        const filmsPromises = dto.films
            .map(item => starWarsApi.getFilms(this.getId(item))
                .then(res => res.title));

        const starshipsPromises = dto.starships
            .map(item => starWarsApi.getStarship(this.getId(item))
                .then(res => res.name));

        this.films = await Promise.all(filmsPromises);

        this.starships = await Promise.all(starshipsPromises);

        return await this;
    }

    getId(line) {
        return line.split('/').filter(item => item !== '').pop();
    }

}

module.exports = People;
