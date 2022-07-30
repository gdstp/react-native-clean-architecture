import {
  ICreateUserInput,
  ICreateUserOutput,
} from '@/domain/dto/create-user.dto';
import { IUserRepository } from '@/domain/repositories/user.repository';

class UserRepository implements IUserRepository {
  public async createUser(input: ICreateUserInput): Promise<ICreateUserOutput> {
    return {
      token: '',
    };
  }
}

export default UserRepository;
