import {IUser} from "../Interfaces/IUser";
import {CanProcess} from "../Interfaces/CanProcess";

export abstract class User implements IUser, CanProcess {
  readonly name: string | null;
  readonly age: number | null;

  protected constructor(dto: Partial<IUser>) {
    this.name = dto.name || null;
    this.age = dto.age || null;
  }

  goNext(): void {
    console.log('DEFAULT Go To Next Point');
  }

  goBack(): void {
    console.log('DEFAULT Go To Previous Point');
  }
}
