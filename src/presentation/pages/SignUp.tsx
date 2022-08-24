import React from 'react';
import { TextInput, View } from 'react-native';
import {
  ICreateUserInput,
  ICreateUserOutput,
} from '../../domain/dto/create-user.dto';
import { IUseCaseSignature } from '../../domain/signatures/use-case';

interface Teste {
  makeCreateUser: IUseCaseSignature<ICreateUserInput, ICreateUserOutput>;
}

const SignUp: React.FC<Teste> = ({ makeCreateUser }) => {
  makeCreateUser.exec({
    documentNumber: '',
    email: '',
    name: '',
    password: '',
  });
  return (
    <View>
      <TextInput />
    </View>
  );
};

export default SignUp;
