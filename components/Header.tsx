import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {
  Button,
  createStyles,
  Group,
  Header as HeaderApp,
  List,
} from '@mantine/core';
import { Logout } from './Authentification/Logout';
import { useAuth } from '../context/AuthContext';
import { colors } from '../theme';

interface IProps {}

const CONNECTION_BUTTONS_OBJECT = [
  {
    id: 'signup',
    path: '/auth/signup',
    label: "M'inscrire",
  },
  {
    id: 'signin',
    path: '/auth/signin',
    label: 'Me connecter',
  },
];

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
    background: 'transparent',
    borderBottom: 'none',
    paddingTop: 50,
  },
  labelNav: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  signInBtn: {
    backgroundColor: colors.secondaryBlue,
    textTransform: 'uppercase',
    fontSize: 16,
    height: 46,
  },
  signUpBtn: {
    backgroundColor: colors.primaryBlue,
    textTransform: 'uppercase',
    fontSize: 16,
    height: 46,
  },
  containerButtons: {
    marginRight: 75,
  },
  listNav: {
    display: 'flex',
    gap: 40,
    listStyle: 'none',
    alignItems: 'center',
  },
}));

export const Header: FC<IProps> = (props) => {
  const { classes } = useStyles();

  const { user } = useAuth();

  const connectionButtons = () => (
    <Group spacing={32}>
      {CONNECTION_BUTTONS_OBJECT.map((item) => (
        <Link href={item.path} key={item.id}>
          <a>
            <Button
              size="md"
              radius="md"
              className={
                item.id === 'signin' ? classes.signInBtn : classes.signUpBtn
              }
            >
              {item.label}
            </Button>
          </a>
        </Link>
      ))}
    </Group>
  );

  return (
    <HeaderApp height={100} className={classes.container}>
      <Group spacing={60}>
        <Link href="/">
          <a>
            <Image
              src="/assets/Logo.svg"
              alt="Logo de Nexalt"
              width={120}
              height={40}
              priority
            />
          </a>
        </Link>
        <nav>
          <List className={classes.listNav}>
            <List.Item>
              <Link href="/about">
                <a className={classes.labelNav}>Qui sommes-nous ?</a>
              </Link>
            </List.Item>
            <List.Item>
              <Link href="/prices">
                <a className={classes.labelNav}>Offres et tarifs</a>
              </Link>
            </List.Item>
            <List.Item>


              <Link href="/blog">
                <a className={classes.labelNav}>Ressources</a>
              </Link>
            </List.Item>
          </List>
        </nav>
      </Group>
      <div className={classes.containerButtons}>
        {user ? <Logout /> : connectionButtons()}
      </div>
    </HeaderApp>
  );
};
