import { ICreateUserInput, ICreateUserOutput } from '../../dto/create-user.dto';

export interface ICreateUserRepository {
  createUser: (input: ICreateUserInput) => Promise<ICreateUserOutput>;
}
