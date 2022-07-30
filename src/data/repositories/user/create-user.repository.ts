import {
  ICreateUserInput,
  ICreateUserOutput,
} from '@/domain/dto/create-user.dto';
import { ICreateUserRepository } from '@/domain/repositories/user/create-user.repository';
import { IHttpClient } from '../../protocols/http.protocol';

class UserRepository implements ICreateUserRepository {
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
