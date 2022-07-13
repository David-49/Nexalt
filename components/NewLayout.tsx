import { FC } from 'react';

import { createStyles } from '@mantine/core';
import { Header } from './Header';
import { colors } from '../theme';
import { Footer } from './Footer';

interface IProps {}

const useStyles = createStyles((theme) => ({
  containerHeader: {
    paddingLeft: 150,
    paddingRight: 150,
  },
  main: {
    position: 'relative',
  },
  blueShapeTrick: {
    position: 'absolute',
    height: 800,
    bottom: 0,
    left: 0,
    width: 200,
    backgroundColor: colors.secondaryBlue,
    zIndex: -1,
  },
  containterFooter: {
    backgroundColor: colors.secondaryBlue,
    width: '95%',
    paddingTop: 60,
    borderTopRightRadius: 50,
    paddingBottom: 40,
  },
}));

export const NewLayout: FC<IProps> = (props) => {
  const { classes } = useStyles();
  const { children } = props;
  return (
    <>
      <div className={classes.containerHeader}>
        <Header />
      </div>
      <main className={classes.main}>
        {children}
        <div className={classes.blueShapeTrick} />
      </main>
      <div className={classes.containterFooter}>
        <Footer />
      </div>
    </>
  );
};
