import { singleton } from 'tsyringe';
import {
  ICreateUserInput,
  ICreateUserOutput,
} from '../../..//domain/dto/create-user.dto';
import { IUserRepository } from '../../../domain/repositories/user.repository';
import { IHttpClient } from '../../protocols/http.protocol';

class UserRepository implements IUserRepository {
  constructor(private readonly httpClient: IHttpClient) {}

  public async createUser(input: ICreateUserInput): Promise<ICreateUserOutput> {
    const { body } = await this.httpClient.request<
      ICreateUserInput,
      ICreateUserOutput
    >({
      method: 'POST',
      body: input,
    });

    return {
      token: body.token,
    };
  }
}

export default UserRepository;
