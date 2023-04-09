export class User {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: number;
  street: string;
  zipCode: number;
  city: string;
  id: string;
  constructor(Obj?: any) {
    this.firstName = Obj ? Obj.firstName : '';
    this.lastName = Obj ? Obj.lastName : '';
    this.email = Obj ? Obj.email : '';
    this.birthDate = Obj ? Obj.birthDate : '';
    this.street = Obj ? Obj.street : '';
    this.zipCode = Obj ? Obj.zipCode : '';
    this.city = Obj ? Obj.city : '';
  }
  toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
    };
  }
}
