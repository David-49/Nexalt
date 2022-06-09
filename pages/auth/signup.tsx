import { Alert, Button, PasswordInput, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { IconAlertCircle } from '@tabler/icons';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { z } from 'zod';
import { GoogleButtonConnection } from '../../components/Authentification/Google/GoogeButtonConnection';
import { PasswordStrength } from '../../components/Authentification/PasswordStrength';
import { useAuth } from '../../context/AuthContext';
import { ILogin } from '../../types/Login';

interface IProps {}

const SignUp: NextPage<IProps> = (props) => {
  const { user, signup } = useAuth();
  const [isInscriptionFailed, setIsInscriptionFailed] = useState(false);
  const router = useRouter();

  const schema = z
    .object({
      email: z.string().email({ message: 'Email invalide' }),
      password: z.string(),
      confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
      message: 'Les mots de passe ne correspondent pas.',
      path: ['confirm'],
    });

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      email: '',
      password: '',
      confirm: '',
    },
  });

  const handleSignup = async (data: ILogin) => {
    try {
      await signup(data.email, data.password);
      setIsInscriptionFailed(false);
      router.push('/');
    } catch (err: any) {
      setIsInscriptionFailed(true);
    }
  };

  console.log(user);

  return (
    <>
      {isInscriptionFailed && (
        <Alert
          color="red"
          title="Échec d'inscription !"
          icon={<IconAlertCircle />}
        >
          Votre inscription à échouer.
          <br />
          Veuillez réessayer !
        </Alert>
      )}
      <GoogleButtonConnection label="Inscription avec Google" />
      <form onSubmit={form.onSubmit((values) => handleSignup(values))}>
        <TextInput
          label="Email"
          required
          {...form.getInputProps('email')}
          placeholder="Votre email"
        />
        <PasswordStrength
          label="Mot de passe"
          description="Un mot de passe fort doit comprendre, des lettres en minuscule et majuscule, 1 nombre et 1 caractère spécial."
          placeholder="Votre mot de passe"
          formData={form}
          formMethods={form.getInputProps('password')}
        />
        <PasswordInput
          required
          label="Confirmer votre mot de passe"
          placeholder="Confirmer le mot de passe"
          {...form.getInputProps('confirm')}
        />
        <Button type="submit" mt="md">
          M'inscrire
        </Button>
      </form>
    </>
  );
};

export default SignUp;
