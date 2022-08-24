import SignUp from '../../../presentation/pages/SignUp';
import { makeCreateUser } from '../use-cases/create-user.factory';

export const makeSignUp: React.FC = () => {
  return <SignUp makeCreateUser={makeCreateUser()} />;
};
