import {
  ICreateUserInput,
  ICreateUserOutput,
} from '@/domain/dto/create-user.dto';
import { IUserRepository } from '@/domain/repositories/user.repository';
import { IUseCaseSignature } from '@/domain/signatures/use-case';

class CreateUserUseCase
  implements IUseCaseSignature<ICreateUserInput, ICreateUserOutput>
{
  constructor(private readonly userRepository: IUserRepository) {}

  public async exec(input: ICreateUserInput): Promise<ICreateUserOutput> {
    const { token } = await this.userRepository.createUser(input);

    return {
      token,
    };
  }
}

export default CreateUserUseCase;
