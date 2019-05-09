export const ENV = {
    getHost: () => `https://swapi.co/api/`,
    getUser: () => null,
    getPassword: () => null,
    getPeople: (people) => `people/${people}/`,
    getPlanet: (planet) => `planets/${planet}/`,
    getStarship: (starship) => `starships/${starship}/`,
};