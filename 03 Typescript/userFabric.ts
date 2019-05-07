import {User} from "./Models/User";
import {IUser} from "./Interfaces/IUser";

export function userFabric<T extends User>(entity: new (dto: IUser) => T, name: string, age: number): T {
  return new entity({ name: name, age: age });
}
