import {
  Alert,
  Button,
  PasswordInput,
  TextInput,
  createStyles,
} from '@mantine/core';
import { NextPage } from 'next';
import { useState } from 'react';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { IconAlertCircle } from '@tabler/icons';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import { ILogin } from '../../types/Login';
import { GoogleButtonConnection } from '../../components/Authentification/Google/GoogeButtonConnection';
import { colors } from '../../theme';

const useStyles = createStyles((theme) => ({
  btn: {
    backgroundColor: colors.secondaryBlue,
  },
}));

interface IProps {}

const schema = z.object({
  email: z.string().email({ message: 'Email invalide' }),
});

const useStyles = createStyles((theme) => ({
  btn: {
    backgroundColor: colors.secondaryBlue,
  },
}));

const Login: NextPage<IProps> = (props) => {
  const { classes } = useStyles();
  const { user, login } = useAuth();
  const [isConnectionFailed, setIsConnectionFailed] = useState(false);
  const router = useRouter();

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
      router.push('/');
    } catch (err: any) {
      setIsConnectionFailed(true);
    }
  };

  return (
    <>
      {isConnectionFailed && (
        <Alert
          color="red"
          title="Échec de connexion !"
          icon={<IconAlertCircle />}
          my="md"
        >
          Votre email ou votre mot de passe est incorrect.
          <br />
          Veuillez réessayez.
        </Alert>
      )}
      <GoogleButtonConnection label="Connexion avec Google " />
      <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
        <TextInput label="Email" required {...form.getInputProps('email')} />
        <PasswordInput
          required
          label="Mot de passe"
          {...form.getInputProps('password')}
        />
        <Button type="submit" mt="md" className={classes.btn}>
          Me connecter
        </Button>
      </form>
    </>
  );
};

export default Login;
