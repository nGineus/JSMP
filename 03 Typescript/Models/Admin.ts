import {User} from "./User";

export class Admin extends User {

  goNext(): void {
    console.log(this.name, 'CAN Do anything');
  }

  goBack(): void {
    console.log(this.name, 'CAN Revert anything');
  }
}
