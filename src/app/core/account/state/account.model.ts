
export enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}

export class Account {
  username: string;
  gender: Gender;
  birthDate: Date;
}
