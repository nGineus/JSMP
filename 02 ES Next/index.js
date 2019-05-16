'use strict';

// Part 1
//  [DONE] Promisify XMLHTTPRequest inside a class with methods: get, post, put, delete. Methods might
//    be used by reference. For example: `[‘http://google.com’].map(Http.get)`.
//  [DONE] Use async/await syntax.
//  [DONE] Play around with, for example SWAPI, to make couple of nested requests (request based on
//    previous request).

// Part 2
//  [DONE] Create custom class `Book` with constructor param `character` with fields: `name`, `age`.
//  [DONE] Inside `Book` instance interpolate `name` and `age` into string template (feel free to create any
//    story you like).
//  [DONE] Create iterator property to be able to read your cool story line by line inside for..of loop.
//  [DONE] Export `Book` as module. Do not create instance in the same file.
//  [DONE] Use as many ES.Next features as you can.

//   Part 3
//  [DONE] Create custom class `Bookshelf` and add `Book` instances to it.
//  Implement method `read` as a generator that will return iterator over all added books.
//   [DONE] Read all books inside this loop.

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators

const ConfigFn = require("./SWAPI/config");
const ApiService = require("./SWAPI/apiService");
const People = require("./Models/People");
const Heroes = require("./Models/Heroes");

let starWarsApi = new ApiService(ConfigFn);

let pretenders = [1, 2, 3, 4, 5];
let heroes = new Heroes();

async function getPeopleById(group) {
    for await (let one of group) {
        const someone = new People(await starWarsApi.getPeople(one));
        heroes.addHero(await someone.loadFromDto());
    }
}

heroes.storyAboutHeroes();

getPeopleById(pretenders).then(() => {
    heroes.removeHero({info: 'Name: DARTH VADER, gender: MALE, year of birth: 41.9BBY'});
    heroes.storyAboutHeroes();

    heroes.iterateResetCounter();

    const iterator = heroes.iterateHero();
    let nextOne = iterator.next();

    while (!nextOne.done) {
        console.log(nextOne.value);
        nextOne = iterator.next();
    }
});
