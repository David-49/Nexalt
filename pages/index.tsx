import {
  Autocomplete,
  Button,
  createStyles,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { IconSearch, IconMapPin } from '@tabler/icons';
import { Layout } from '../components/Layout';
import { colors } from '../theme';

const useStyles = createStyles((theme) => ({
  containerPage: {
    marginTop: 138,
  },
  title: {
    fontSize: 50,
    lineHeight: 1,
    fontFamily: 'Montserrat',
  },
  textIntro: {
    marginTop: 25,
    width: '65%',
  },
  containerFilter: {
    marginTop: 55,
  },
  btnSearch: {
    backgroundColor: colors.primaryBlue,
    fontSize: 20,
    fontFamily: 'Montserrat, sans-serif',
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 35,
    paddingRight: 35,
  },
  inputSearchWith: {
    width: '25%',
  },
  inputSearch: {
    borderColor: colors.primaryBlue,
    borderWidth: 2,
  },
  colorICon: {
    color: colors.primaryBlue,
  },
}));

type PageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

const Home: PageWithLayout = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.containerPage}>
      <Head>
        <title>Nexalt</title>
        <meta name="description" content="Nexalt..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack spacing={0}>
        <Text className={classes.title} weight={800} color={colors.primaryBlue}>
          Trouver votre
        </Text>
        <Text
          className={classes.title}
          weight={800}
          color={colors.secondaryBlue}
        >
          perle rare
        </Text>
      </Stack>
      <Text size="xl" className={classes.textIntro}>
        Nexalt aide les étudiants à trouver une alternance plus facilement.
        Nexalt aide les étudiants à trouver une alternance plus facilement.
        Nexalt aide les étudiants à trouver une alternance plus facilement.
        Nexalt aide les étudiants à trouver une alternance plus facilement.
        Nexalt aide les étudiants à trouver une alternance plus facilement.
      </Text>
      <Group className={classes.containerFilter}>
        <Autocomplete
          classNames={{ input: classes.inputSearch }}
          className={classes.inputSearchWith}
          size="xl"
          radius={10}
          placeholder="Designer, développeur..."
          icon={<IconSearch className={classes.colorICon} />}
          data={['Développeur', 'Designer', 'Marketing']}
        />
        <Autocomplete
          styles={{
            input: { borderColor: colors.primaryBlue, borderWidth: 2 },
          }}
          classNames={{ input: classes.inputSearch }}
          className={classes.inputSearchWith}
          size="xl"
          radius={10}
          placeholder="Angers, Tours..."
          icon={<IconMapPin className={classes.colorICon} />}
          data={['Angers', 'Paris', 'Caen', 'Tour']}
        />
        <Button size="xl" className={classes.btnSearch} radius={10}>
          Rechercher
        </Button>
      </Group>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
