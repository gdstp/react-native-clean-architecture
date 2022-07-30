import {
  ICreateUserInput,
  ICreateUserOutput,
} from '@/domain/dto/create-user.dto';
import { IUseCaseSignature } from '@/domain/signatures/use-case';

class CreateUserUseCase
  implements IUseCaseSignature<ICreateUserInput, ICreateUserOutput>
{
  public async exec(input: ICreateUserInput): Promise<ICreateUserOutput> {
    return {
      token: 'valid_token',
    };
  }
}

export default CreateUserUseCase;
