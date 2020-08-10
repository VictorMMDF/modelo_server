import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { FakeUsersRepository } from './../../repositories/implementations/FakeUsersRepository';
import { MailtrapMailProvider } from './../../providers/implementations/MailtrapMailProvider';

const mailtrapMailProvider = new MailtrapMailProvider();
const fakeUsersRepository = new FakeUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  fakeUsersRepository,
  mailtrapMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }