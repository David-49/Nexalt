import { FC } from 'react';

import { AppShell, createStyles } from '@mantine/core';
import { Header } from './Header';
import { Footer } from './Footer';

interface IProps {}

const useStyles = createStyles((theme) => ({
  containerAppShell: {
    paddingLeft: '150px',
    paddingRight: '150px',
    overflowX: 'hidden',
  },
}));

export const Layout: FC<IProps> = (props) => {
  const { classes } = useStyles();
  const { children } = props;
  return (
    <AppShell
      className={classes.containerAppShell}
      header={<Header />}
      footer={<Footer />}
      padding={0}
    >
      {children}
    </AppShell>
  );
};
