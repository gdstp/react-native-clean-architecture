import { ICreateUserInput, ICreateUserOutput } from '../dto/create-user.dto';

export interface IUserRepository {
  createUser: (input: ICreateUserInput) => Promise<ICreateUserOutput>;
}
