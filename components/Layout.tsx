import { FC } from 'react';

import { AppShell, createStyles } from '@mantine/core';
import { Header } from './Header';

interface IProps {}

const useStyles = createStyles((theme) => ({
  containerAppShell: {
    width: '100%',
  },
}));

export const Layout: FC<IProps> = (props) => {
  const { classes } = useStyles();
  const { children } = props;
  return (
    <AppShell
      className={classes.containerAppShell}
      header={<Header />}
      padding={0}
      styles={{
        main: { width: '100%' },
      }}
    >
      {children}
    </AppShell>
  );
};
