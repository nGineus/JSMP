import {User} from "./User";

export class Guest extends User {

  goNext(): void {
    console.log(this.name, 'CAN\'T Go To Next Point');
  }

  goBack(): void {
    console.log(this.name, 'CAN\'T Go To Previous Point');
  }
}
