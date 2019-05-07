"use strict";
// 1st point
// DONE setup typescript and configure tsconfig
exports.__esModule = true;
// 2nd point
// DONE setup and configure tslint
// 3rd point
// DONE implement the interface for (any) DTO (Data Transfer Object) from the back-end and create a model based on it
// 4th point
// [DONE] implement the inheritance of an abstract class (any entity at your choice)
// 5th point
// [DONE] implement (at your choice) generic construction (for example, your Dictionary <KeyType, Value Type>)
var userFabric_1 = require("./userFabric");
var Guest_1 = require("./Models/Guest");
var Admin_1 = require("./Models/Admin");
var PremiumUser_1 = require("./Models/PremiumUser");
console.log('---------------');
var People0 = userFabric_1.userFabric(Admin_1.Admin, 'Admin', 99);
People0.goNext();
People0.goBack();
console.log('---------------');
var People1 = userFabric_1.userFabric(PremiumUser_1.PremiumUser, 'PremiumUser', 18);
People1.goNext();
People1.goBack();
console.log('---------------');
var People2 = userFabric_1.userFabric(Guest_1.Guest, 'Guest', 0);
People2.goNext();
People2.goBack();
