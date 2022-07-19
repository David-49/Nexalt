import { FC } from 'react';

import { createStyles, List, ThemeIcon } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import {
  IconFolder,
  IconHeart,
  IconHelp,
  IconHome,
  IconMessage,
  IconSearch,
  IconSettings,
  IconUser,
} from '@tabler/icons';
import { useRouter } from 'next/router';
import { colors } from '../theme';
import Logo from './icons/Logo';

interface IProps {}

const useStyles = createStyles({
  headerLogged: {
    position: 'fixed',
    left: 0,
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 120,
    height: '95vh',
    backgroundColor: colors.primaryBlue,
    borderBottomRightRadius: 25,
    zIndex: 100,
  },
  main: {
    position: 'relative',
  },
  headerInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navMenu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 32,
  },
  firstMenu: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  liMenu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    marginTop: 35,
    marginBottom: 35,
    cursor: 'pointer',
  },
  icons: {
    ':hover': {
      color: colors.primaryBlue,
      backgroundColor: '#fff',
    },
  },
  activeIcon: {
    color: colors.primaryBlue,
    backgroundColor: '#fff',
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: colors.tertiaryBlue,
  },
});

const FIRST_LIST_ICONS = [
  { id: 1, icon: <IconHome size={28} />, url: '/dashboard' },
  { id: 2, icon: <IconSearch size={28} />, url: '/research' },
  { id: 3, icon: <IconUser size={28} />, url: '/profilePage' },
  { id: 4, icon: <IconMessage size={28} />, url: '' },
  { id: 5, icon: <IconHeart size={28} />, url: '' },
  { id: 6, icon: <IconSettings size={28} />, url: '' },
];

const SECOND_LIST_ICONS = [
  { id: 1, icon: <IconFolder size={28} />, url: '/' },
  { id: 2, icon: <IconHelp size={28} />, url: '/' },
];

export const AppLayout: FC<IProps> = (props) => {
  const { classes } = useStyles();
  const { children } = props;
  const router = useRouter();
  const currentPage = router.asPath;

  return (
    <>
      <header className={classes.headerLogged}>
        <div className={classes.headerInner}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <nav className={classes.navMenu}>
            <List className={classes.firstMenu}>
              {FIRST_LIST_ICONS.map((icons) => (
                <List.Item className={classes.liMenu} key={icons.id}>
                  <Link href={icons.url} passHref>
                    <ThemeIcon
                      radius={12}
                      size={45}
                      className={`${classes.icons} ${
                        currentPage === icons.url && classes.activeIcon
                      }`}
                    >
                      {icons.icon}
                    </ThemeIcon>
                  </Link>
                </List.Item>
              ))}
            </List>
            <List className={classes.firstMenu}>
              {SECOND_LIST_ICONS.map((icon) => (
                <List.Item className={classes.liMenu} key={icon.id}>
                  <Link href={icon.url} passHref>
                    <ThemeIcon
                      radius={12}
                      size={45}
                      className={`${classes.icons} ${
                        currentPage === icon.url && classes.activeIcon
                      }`}
                    >
                      {icon.icon}
                    </ThemeIcon>
                  </Link>
                </List.Item>
              ))}
            </List>
          </nav>
          <div className={classes.profilePicture}>
            <Image
              src="/assets/images/photo_bastien.png"
              alt=""
              width={3593}
              height={3696}
            />
          </div>
        </div>
      </header>
      <main className={classes.main}>{children}</main>
    </>
  );
};
