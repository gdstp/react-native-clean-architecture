import {
  ICreateUserInput,
  ICreateUserOutput,
} from '@/domain/dto/create-user.dto';
import { IUserRepository } from '@/domain/repositories/user.repository';
import { IUseCaseSignature } from '@/domain/signatures/use-case';
import { inject } from 'tsyringe';

class CreateUserUseCase
  implements IUseCaseSignature<ICreateUserInput, ICreateUserOutput>
{
  private readonly userRepository: IUserRepository;
  constructor(@inject('UserRepository') userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async exec(input: ICreateUserInput): Promise<ICreateUserOutput> {
    const { token } = await this.userRepository.createUser(input);

    return {
      token,
    };
  }
}

export default CreateUserUseCase;
