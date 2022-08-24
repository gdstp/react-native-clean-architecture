import { container } from 'tsyringe';
import CreateUserUseCase from '../../../data/use-cases/user/create-user.useCase';

export const makeCreateUser = () => container.resolve(CreateUserUseCase);
