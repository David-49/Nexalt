import { useState } from 'react';

import {
  Alert,
  Button,
  PasswordInput,
  TextInput,
  createStyles,
  Divider,
  Container,
  Group,
  Text,
  Title,
  Checkbox,
} from '@mantine/core';
import { NextPage } from 'next';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { IconAlertCircle } from '@tabler/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useAuth } from '../../context/AuthContext';
import { ILogin } from '../../types/Login';
import { GoogleButtonConnection } from '../../components/Authentification/Google/GoogeButtonConnection';
import { colors } from '../../theme';
import ImageBackground from '../../public/assets/images/photo_3.jpg';

interface IProps {}

const schema = z.object({
  email: z.string().email({ message: 'Email invalide' }),
});

const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    padding: 0,
    justifyContent: 'stretch',
    '@media (max-width: 851px)': {
      flexDirection: 'column',
    },
  },
  btn: {
    backgroundColor: colors.secondaryBlue,
  },
  leftChild: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '50%',
    height: '100%',
    paddingTop: 56,
    paddingBottom: 52,
    paddingLeft: 50,
    borderBottomRightRadius: 50,
    position: 'relative',
    background: `linear-gradient(0deg, rgba(2,0,36,0.5382528011204482) 0%, rgba(1,0,14,0.2945553221288515) 60%, rgba(0,0,0,0) 100%), url('${ImageBackground.src}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    '@media (max-width: 851px)': {
      width: '100%',
    },
  },
  tricks: {
    position: 'absolute',
    left: 50,
    top: 0,
    right: -50,
    height: 150,
    zIndex: -2,
    backgroundImage: `url('${ImageBackground.src}')`,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    '@media (max-width: 851px)': {
      display: 'none',
    },
  },
  whiteMaskBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 150,
    zIndex: -2,
    backgroundColor: '#fff',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Montserrat',
    gap: -10,
    fontSize: 40,
  },
  heightSpan: {
    lineHeight: '49px',
  },
  rightChild: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '50%',
    borderTopLeftRadius: 50,
    backgroundColor: '#fff',
    '@media (max-width: 851px)': {
      paddingTop: 50,
      borderTopLeftRadius: 0,
      width: '100%',
    },
  },
  containerConnexion: {
    padding: 10,
    '@media (max-width: 1500px)': {
      width: '80%',
    },
    '@media (max-width: 982px)': {
      width: '90%',
      padding: 5,
    },
  },
  title: {
    fontSize: 40,
    fontFamily: 'Montserrat',
  },
  connectionBtn: {
    fontWeight: 400,
    fontSize: 20,
    width: '100%',
    backgroundColor: colors.primaryBlue,
    transition: 'ease 0.3s',
    ':hover': {
      backgroundColor: colors.secondaryBlue,
      transition: 'ease 0.3s',
    },
  },
  inscriptionBtn: {
    fontSize: 16,
    backgroundColor: colors.primaryBlue,
    fontWeight: 400,
    transition: 'ease 0.3s',

    ':hover': {
      backgroundColor: colors.secondaryBlue,
      transition: 'ease 0.3s',
    },
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  linkResetPassword: {
    fontSize: 12,
    color: 'gray',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  divider: {
    color: '#0F0C2980',
    width: '50%',
    marginBottom: 26,
  },
  containerGoogleConnection: {
    width: '100%',
  },
  input: {
    borderWidth: 2,
    ':focus-within': {
      border: `solid 2px ${colors.primaryBlue}`,
    },
  },
}));

const SignIn: NextPage<IProps> = (props) => {
  const { classes } = useStyles();
  const { signin } = useAuth();
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
      await signin(data.email, data.password);
      setIsConnectionFailed(false);
      router.push('/');
    } catch (err: any) {
      setIsConnectionFailed(true);
    }
  };

  return (
    <>
      <Head>
        <title>Connexion</title>
      </Head>
      <Container fluid className={classes.container}>
        <div className={classes.leftChild}>
          <div className={classes.whiteMaskBottom} />
          <div className={classes.tricks} />
          <Link href="/">
            <a>
              <Image
                src="/assets/logo_blanc.svg"
                alt="Logo de Nexalt"
                width={120}
                height={40}
                priority
              />
            </a>
          </Link>
          <Text color="#fff" className={classes.text}>
            <span className={classes.heightSpan} style={{ fontWeight: 800 }}>
              Entreprises,
            </span>
            <span className={classes.heightSpan}>Trouver votre</span>
            <span className={classes.heightSpan}> prochaine perle rare</span>
          </Text>
        </div>
        <div className={classes.rightChild}>
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
          <Group
            direction="column"
            align="center"
            className={classes.containerConnexion}
          >
            <Group position="apart" style={{ width: '100%' }}>
              <Title className={classes.title} order={1}>
                Connexion
              </Title>
              <Link href="/auth/signup" passHref>
                <Button
                  component="a"
                  radius={10}
                  size="lg"
                  className={classes.inscriptionBtn}
                >
                  M'inscrire
                </Button>
              </Link>
            </Group>
            <form
              className={classes.form}
              onSubmit={form.onSubmit((values) => handleLogin(values))}
            >
              <TextInput
                placeholder="Adresse mail"
                classNames={{
                  input: classes.input,
                }}
                radius={15}
                required
                variant="filled"
                size="xl"
                {...form.getInputProps('email')}
              />
              <PasswordInput
                placeholder="Mot de passe"
                classNames={{
                  input: classes.input,
                }}
                required
                radius={15}
                variant="filled"
                size="xl"
                {...form.getInputProps('password')}
              />
              <Group align="center" position="apart">
                <Checkbox
                  label="Se souvenir de moi"
                  size="xs"
                  color="indigo"
                  styles={{
                    label: { color: 'gray', cursor: 'pointer' },
                    input: {
                      cursor: 'pointer',
                    },
                  }}
                />
                <Link href="/auth/reset_password">
                  <a className={classes.linkResetPassword}>
                    Mot de passe oublié ?
                  </a>
                </Link>
              </Group>
              <Button
                radius={15}
                type="submit"
                size="lg"
                mt={30}
                className={classes.connectionBtn}
              >
                Me connecter
              </Button>
            </form>
            <Divider
              size="sm"
              className={classes.divider}
              label="ou"
              labelPosition="center"
            />
            <div className={classes.containerGoogleConnection}>
              <GoogleButtonConnection label="Je me connecte avec Google" />
            </div>
          </Group>
        </div>
      </Container>
    </>
  );
};

export default SignIn;
