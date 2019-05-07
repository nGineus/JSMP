// 1st point
// DONE setup typescript and configure tsconfig

// 2nd point
// DONE setup and configure tslint

// 3rd point
// DONE implement the interface for (any) DTO (Data Transfer Object) from the back-end and create a model based on it

// 4th point
// [DONE] implement the inheritance of an abstract class (any entity at your choice)

// 5th point
// [DONE] implement (at your choice) generic construction (for example, your Dictionary <KeyType, Value Type>)

import {userFabric} from "./userFabric";
import {Guest} from "./Models/Guest";
import {Admin} from "./Models/Admin";
import {PremiumUser} from "./Models/PremiumUser";

console.log('---------------');
const People0 = userFabric<Admin>(Admin as any, 'Admin', 99);
People0.goNext();
People0.goBack();
console.log('---------------');
const People1 = userFabric<PremiumUser>(PremiumUser as any, 'PremiumUser', 18);
People1.goNext();
People1.goBack();
console.log('---------------');
const People2 = userFabric<Guest>(Guest as any, 'Guest', 0);
People2.goNext();
People2.goBack();
