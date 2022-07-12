import { useState } from 'react';

import {
  Alert,
  Button,
  createStyles,
  Divider,
  Group,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { IconAlertCircle } from '@tabler/icons';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { z } from 'zod';
import Link from 'next/link';
import Image from 'next/image';
import { GoogleButtonConnection } from '../../components/Authentification/Google/GoogeButtonConnection';
import { PasswordStrength } from '../../components/Authentification/PasswordStrength';
import { useAuth } from '../../context/AuthContext';
import { ILogin } from '../../types/Login';
import { colors } from '../../theme';
import ImageBackground from '../../public/assets/images/photo_1.jpg';

interface IProps {}

const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'stretch',
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
    paddingLeft: 10,
    paddingRight: 10,
    borderTopLeftRadius: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Montserrat',
  },
  connectionBtn: {
    height: 46,
    fontSize: 16,
    backgroundColor: colors.primaryBlue,
  },
  inscriptionBtn: {
    fontSize: 20,
    backgroundColor: colors.primaryBlue,
    width: '100%',
    height: 65,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  divider: {
    color: '#0F0C2980',
    width: '50%',
    marginBottom: 26,
  },
  containerGoogleConnection: {
    width: '100%',
  },
}));

const SignUp: NextPage<IProps> = (props) => {
  const { classes } = useStyles();
  const { signup } = useAuth();
  const [isInscriptionFailed, setIsInscriptionFailed] = useState(false);
  const router = useRouter();

  const schema = z
    .object({
      email: z.string().email({ message: 'Email invalide' }),
      firstname: z.string(),
      lastname: z.string(),
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
      firstname: '',
      lastname: '',
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

  return (
    <div className={classes.container}>
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
            Étudiants,
          </span>
          <span className={classes.heightSpan}>Accédez à de</span>
          <span className={classes.heightSpan}> nouvelles opportunités</span>
        </Text>
      </div>
      <div className={classes.rightChild}>
        {isInscriptionFailed && (
          <Alert
            color="red"
            title="Échec de l'inscription !"
            icon={<IconAlertCircle />}
          >
            Votre inscription à échouer.
            <br />
            Veuillez réessayer !
          </Alert>
        )}
        <Group direction="column" align="center">
          <Group position="apart" style={{ width: '100%' }}>
            <Title className={classes.title} order={1}>
              Inscription
            </Title>
            <Link href="/auth/signin" passHref>
              <Button
                component="a"
                radius={10}
                className={classes.connectionBtn}
              >
                Me connecter
              </Button>
            </Link>
          </Group>
          <form
            className={classes.form}
            onSubmit={form.onSubmit((values) => handleSignup(values))}
          >
            <Group grow>
              <TextInput
                radius={15}
                required
                placeholder="Prénom"
                variant="filled"
                size="xl"
                {...form.getInputProps('firstname')}
              />
              <TextInput
                radius={15}
                required
                placeholder="Nom"
                variant="filled"
                size="xl"
                {...form.getInputProps('lastname')}
              />
            </Group>
            <TextInput
              radius={15}
              required
              placeholder="Email"
              variant="filled"
              size="xl"
              {...form.getInputProps('email')}
            />
            <PasswordStrength
              placeholder="Mot de passe"
              formData={form}
              formMethods={form.getInputProps('password')}
            />
            <PasswordInput
              radius={15}
              size="xl"
              required
              placeholder="Confirmer votre mot de passe"
              variant="filled"
              {...form.getInputProps('confirm')}
            />
            <Button
              radius={15}
              type="submit"
              mt={30}
              className={classes.inscriptionBtn}
            >
              M'inscrire
            </Button>
          </form>
          <Divider
            size="sm"
            className={classes.divider}
            label="ou"
            labelPosition="center"
          />
          <div className={classes.containerGoogleConnection}>
            <GoogleButtonConnection label="Je m'inscris avec Google" />
          </div>
        </Group>
      </div>
    </div>
  );
};

export default SignUp;
