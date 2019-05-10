'use strict';

// Part 1
//  Promisify XMLHTTPRequest inside a class with methods: get, post, put, delete. Methods might
// be used by reference. For example: `[‘http://google.com’].map(Http.get)`.
//  Use async/await syntax.
//  Play around with, for example SWAPI, to make couple of nested requests (request based on
// previous request).

// Part 2
//  Create custom class `Book` with constructor param `character` with fields: `name`, `age`.
//  Inside `Book` instance interpolate `name` and `age` into string template (feel free to create any
// story you like).
//  Create iterator property to be able to read your cool story line by line inside for..of loop.
//  Export `Book` as module. Do not create instance in the same file.
//  Use as many ES.Next features as you can.

//   Part 3
//  Create custom class `Bookshelf` and add `Book` instances to it.
//  Implement method `read` as a generator that will return iterator over all added books.
// Read all books inside this loop.


const ConfigFn = require("./SWAPI/config");
const ApiService = require("./SWAPI/apiService");
const People = require("./Models/People");

let starWarsApi = new ApiService(ConfigFn);
let people1 = new People();
let dto;

const init = async () => {
    dto = await starWarsApi.getPeople(1);
    console.log('PEOPLE DTO: ', dto);
    people1 = await People.getFromDto(dto);
    console.log('PEOPLE getFromDto: ', people1);
};

init();

// starWarsApi.getPeople(1).then(async (dto) => {
//     console.log('D-T-O: ', dto);
//     people1 = new People(dto);
// }, () => {
//     console.log('ERROR D-T-O: ', dto);
// });

// starWarsApi.getPeople(1).then(
//     (response) => {
//         console.log('[***All OK], ', response);
//     },
//     (error) => {
//         console.log('[***Error happens], ', error);
//     }
// ).catch((error) => {
//     console.log('[***CATCH], ', error);
// }).finally(() => {
//     console.log('[***Finaly]');
// });

// api.requestByAsync(ConfigFn.getPeople(2)).then((message) => {
//     console.log('AWAIT All OK. ', message);
// }, (error) => {
//     console.log('Error happens...', error);
// });
