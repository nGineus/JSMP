const ConfigFn = {
    creds: {
        getHost: () => `https://swapi.co/api/`,
        getUser: () => null,
        getPassword: () => null,
    },
    apiCalls: {
        getPeople: (people) => (people !== null) ? `people/${people}/` : `people/`,
        getPlanet: (planet) => (planet !== null) ? `planets/${planet}/` : `planets/`,
        getStarship: (starship) => (starship !== null) ? `starships/${starship}/` : `starships/`,
        getFilms: (film) => (film !== null) ? `films/${film}/` : `films/`,
        // getSpices: (spice) => (spice !== null) ? `spice/${spice}/` : `spice/`,
    }
};

module.exports = ConfigFn;