const ConfigFn = require("../SWAPI/config");
const ApiService = require("../SWAPI/apiService");
let starWarsApi = new ApiService(ConfigFn);

class People {

    constructor(dto) {
        this.info = `Name: ${dto.name.toString().toUpperCase()}, gender: ${dto.gender.toString().toUpperCase()}, year of birth: ${dto.birth_year}`;
        this.films = dto.films;
        this.homeworld = dto.homeworld;
        this.starships = dto.starships;
    }

    async loadFromDto() {
        let i = 0;

        for await (let film of this.films) {
            this.films[i] = await starWarsApi.getFilms(this.getId(film)).then(res => res.title);
            i++;
        }

        i = 0;
        for await (let spaceship of this.starships) {
            this.starships[i] = await starWarsApi.getStarship(this.getId(spaceship)).then(res => res.name);
            i++
        }

        this.homeworld = await starWarsApi.getPlanet(this.getId(this.homeworld)).then(res => res.name);

        return this;
    }

    getId(line) {
        return line.split('/').filter(item => item !== '').pop();
    }

}

module.exports = People;
