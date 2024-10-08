import UserRepository from '../../data/repositories/user/user.repository';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { container } from 'tsyringe';

container.register<IUserRepository>('UserRepository', UserRepository);
