'use strict';

const ConfigFn = require("../SWAPI/config");
const ApiService = require("../SWAPI/apiService");
let starWarsApi = new ApiService(ConfigFn);

class People {

    static async getFromDto(dto) {
        const result = new People();
        result.name = dto.name;
        result.gender = dto.gender;

        result.homeworld = await starWarsApi.getPlanet(People.getId(dto.homeworld)).then( res => res.name);
        console.log('2============', result);
        result.films = [];
        result.films = await dto.films.map(async item => await starWarsApi.getFilms(People.getId(item)).then( res => {
            console.log(res.title); return res.title}));
        console.log('3============', result);
        result.starships = [];
        result.starships = dto.starships.map(item => starWarsApi.getStarship(People.getId(item)).then( res => res.name));
        console.log('4============', result);

        return result;
    }

    static getId(line) {
        return line.split('/').filter(item => item !== '').pop();
    }

}

module.exports = People;


// RESPONSE {
//     name: 'Luke Skywalker',
//     height: '172',
//     mass: '77',
//     hair_color: 'blond',
//     skin_color: 'fair',
//     eye_color: 'blue',
//     birth_year: '19BBY',
//     gender: 'male',
//     homeworld: 'https://swapi.co/api/planets/1/',
//     films: [
//     'https://swapi.co/api/films/2/',
//     'https://swapi.co/api/films/6/',
//     'https://swapi.co/api/films/3/',
//     'https://swapi.co/api/films/1/',
//     'https://swapi.co/api/films/7/'
//     ],
//     species: [ 'https://swapi.co/api/species/1/' ],
//     vehicles: [
//     'https://swapi.co/api/vehicles/14/',
//     'https://swapi.co/api/vehicles/30/'
//     ],
//     starships: [
//     'https://swapi.co/api/starships/12/',
//     'https://swapi.co/api/starships/22/'
//     ],
//     created: '2014-12-09T13:50:51.644000Z',
//     edited: '2014-12-20T21:17:56.891000Z',
//     url: 'https://swapi.co/api/people/1/'
// }