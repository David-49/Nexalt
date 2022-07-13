import { FC } from 'react';

import { AppShell, createStyles } from '@mantine/core';
import { Header } from './Header';
import { colors } from '../theme';
import { Footer } from './Footer';

interface IProps {}

const useStyles = createStyles((theme) => ({
  containerAppShell: {
    width: '100%',
    position: 'relative',
    zIndex: 1,
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
      styles={{
        main: { width: '100%' },
      }}
    >
      <div
        style={{
          position: 'absolute',
          height: 800,
          bottom: 0,
          left: 0,
          width: 200,
          backgroundColor: colors.secondaryBlue,
          zIndex: -1,
        }}
      />
      {children}
    </AppShell>
  );
};
