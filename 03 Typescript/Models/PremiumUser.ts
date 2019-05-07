import {User} from "./User";

export class PremiumUser extends User {

  goNext(): void {
    console.log(this.name, 'CAN Do that allowed for Premium user');
  }

  goBack(): void {
    console.log(this.name, 'CAN Revert that allowed for Premium user');
  }
}
