'use strict';

// Part 1
//  [DONE] Promisify XMLHTTPRequest inside a class with methods: get, post, put, delete. Methods might
//    be used by reference. For example: `[‘http://google.com’].map(Http.get)`.
//  [DONE] Use async/await syntax.
//  [DONE] Play around with, for example SWAPI, to make couple of nested requests (request based on
// previous request).

// Part 2
//  Create custom class `Book` with constructor param `character` with fields: `name`, `age`.
//  Inside `Book` instance interpolate `name` and `age` into string template (feel free to create any
// story you like).
//  Create iterator property to be able to read your cool story line by line inside for..of loop.
//  [DONE] Export `Book` as module. Do not create instance in the same file.
//  [DONE] Use as many ES.Next features as you can.

//   Part 3
//  Create custom class `Bookshelf` and add `Book` instances to it.
//  Implement method `read` as a generator that will return iterator over all added books.
// Read all books inside this loop.


const ConfigFn = require("./SWAPI/config");
const ApiService = require("./SWAPI/apiService");
const People = require("./Models/People");

let starWarsApi = new ApiService(ConfigFn);
let dto;

let trinity = [1, 2, 3];

async function getPeopleById (group) {

    return group.map( async one => {
        const someone = new People(one);
        dto = await starWarsApi.getPeople(one);
        return await someone.getFromDto(dto).then( res => res);
    });
}

console.log(getPeopleById(trinity));
