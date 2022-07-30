export interface ICreateUserInput {
  name: string;
  email: string;
  documentNumber: string;
  password: string;
}

export interface ICreateUserOutput {
  token: string;
}
