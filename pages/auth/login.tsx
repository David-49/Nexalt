import { Button, PasswordInput, TextInput } from '@mantine/core';
import { NextPage } from 'next';
import { useState } from 'react';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { useAuth } from '../../context/AuthContext';
import { ILogin } from '../../types/Login';

interface IProps {}

const schema = z.object({
  email: z.string().email({ message: 'Email invalide' }),
});

const Login: NextPage<IProps> = (props) => {
  const { user, login } = useAuth();
  const [isConnectionFailed, setIsConnectionFailed] = useState(false);

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = async (data: ILogin) => {
    try {
      await login(data.email, data.password);
      setIsConnectionFailed(false);
    } catch (err: any) {
      setIsConnectionFailed(true);
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
      <TextInput label="Email" required {...form.getInputProps('email')} />
      <PasswordInput
        required
        label="Mot de passe"
        {...form.getInputProps('password')}
      />
      <Button type="submit" mt="md">
        Me connecter
      </Button>
    </form>
  );
};

export default Login;
