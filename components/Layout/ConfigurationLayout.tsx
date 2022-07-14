import { FC } from 'react';

import { createStyles, Title, Text } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { colors } from '../../theme';

interface IProps {
  title: string;
  description: string;
}

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: '100vh',
    backgroundColor: '#fff',
  },
  main: {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'stretch',
  },
  leftSide: {
    backgroundColor: colors.primaryBlue,
    borderBottomRightRadius: 50,
    width: '30%',
    paddingTop: 56,
    paddingLeft: 50,
  },
  leftSideChild: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '80%',
  },
  title: {
    fontWeight: 800,
    fontSize: 40,
    color: '#fff',
    marginBottom: 23,
  },
  description: {
    fontWeight: 600,
    color: '#fff',
    fontSize: 24,
  },
  rightSide: {
    width: '70%',
  },
  containerPresentation: {
    width: '80%',
  },
}));

export const ConfigurationLayout: FC<IProps> = (props) => {
  const { classes } = useStyles();
  const { title, description } = props;
  const { children } = props;
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <div className={classes.leftSide}>
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
          <div className={classes.leftSideChild}>
            <div className={classes.containerPresentation}>
              <Title className={classes.title} order={2}>
                {title}
              </Title>
              <Text className={classes.description}>{description}</Text>
            </div>
          </div>
        </div>
        <div className={classes.rightSide}>{children}</div>
      </main>
    </div>
  );
};
