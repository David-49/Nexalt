import { Button, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { useAuth } from '../../context/AuthContext';
import { ILogin } from '../../types/Login';

interface IProps {}

const Signup: NextPage<IProps> = (props) => {
  const { user, signup } = useAuth();
  const [isInscriptionFailed, setIsInscriptionFailed] = useState(false);
  const [isPasswordNotMatching, setIsPasswordNotMatching] = useState(false);
  const schema = z.object({
    email: z.string().email({ message: 'Email invalide' }),
    password: z.string(),
  });

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleSignup = async (data: ILogin) => {
    if (data.password !== data.confirmPassword) {
      console.log('first');
      setIsPasswordNotMatching(true);
      return;
    }
    try {
      await signup(data.email, data.password);
      setIsInscriptionFailed(false);
    } catch (err: any) {
      setIsInscriptionFailed(true);
    }
  };

  console.log(user);

  return (
    <form onSubmit={form.onSubmit((values) => handleSignup(values))}>
      <TextInput label="Email" required {...form.getInputProps('email')} />
      <PasswordInput
        required
        label="Mot de passe"
        {...form.getInputProps('password')}
      />
      <PasswordInput
        required
        label="Confirmer votre mot de passe"
        {...form.getInputProps('confirmPassword')}
      />
      {isPasswordNotMatching && (
        <Text color="red">Veuillez re-écrire le même mot de passe</Text>
      )}
      <Button type="submit" mt="md">
        M'inscrire
      </Button>
    </form>
  );
};

export default Signup;
