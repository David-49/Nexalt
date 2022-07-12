import { ReactElement, ReactNode } from 'react';

import { Container, createStyles, Text, Title } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '../components/Layout';
import { colors } from '../theme';
import { HomePageFilter } from '../components/HomePageFilter';
import { FormBottomHomePagePart1 } from '../components/shapes/FormBottomHomePagePart1';
import { FormTopHomePage } from '../components/shapes/FormTopHomePage';
import womanImage from '../public/assets/images/photo_accueil@2x.png';
import { StrongPoints } from '../components/HomePage/StrongPoints';
import { PartnerCompanies } from '../components/HomePage/PartnerCompanies';
import { PlatformOperation } from '../components/HomePage/PlatformOperation';
import { PricesPlansPresentation } from '../components/HomePage/PricesPlansPresentation';
import { ShortPresentation } from '../components/HomePage/ShortPresentationApp';
import { SocialMedia } from '../components/HomePage/SocialMedia';

const useStyles = createStyles((theme) => ({
  containerPage: {
    marginTop: 138,
    padding: 0,
    width: '100%',
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
  womanImageContainer: {
    position: 'absolute',
    right: 180,
    top: 75,
    zIndex: -2,
  },
  firstBackgroundDecorationContainer: {
    position: 'absolute',
    zIndex: -1,
    right: 0,
    top: 0,
  },
  containerStrongPoints: {
    marginTop: 293,
    width: '100%',
  },
  containerPartnerCompanies: {
    margin: 'auto',
    marginTop: 220,
    width: '100%',
  },
  containerPlatformOperation: {
    marginTop: 140,
    marginLeft: 10,
    marginRight: 10,
  },
  containerPricesPlansPresentation: {
    marginTop: 247,
    position: 'relative',
  },
  containerShortPresentation: {
    margin: 'auto',
    marginTop: 130,
    width: '80%',
  },
  containerSocialMedia: {
    marginTop: 180,
    marginBottom: 250,
  },
  containerBottomFormPart1: {
    position: 'absolute',
    width: '97vw',
    top: -85,
    left: -150,
    zIndex: -1,
  },
}));

type PageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

const Home: PageWithLayout = () => {
  const { classes } = useStyles();

  return (
    <Container fluid className={classes.containerPage}>
      <Head>
        <title>Nexalt</title>
        <meta name="description" content="Nexalt..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title order={1}>
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
      </Title>
      <Text size="xl" className={classes.textIntro}>
        Nexalt aide les étudiants à trouver une alternance plus facilement.
        Nexalt aide les étudiants à trouver une alternance plus facilement.
        Nexalt aide les étudiants à trouver une alternance plus facilement.
        Nexalt aide les étudiants à trouver une alternance plus facilement.
        Nexalt aide les étudiants à trouver une alternance plus facilement.
      </Text>
      <div className={classes.containerFilter}>
        <HomePageFilter />
      </div>
      <div className={classes.womanImageContainer}>
        <Image src={womanImage} width={550} height={750} priority />
      </div>
      <div className={classes.firstBackgroundDecorationContainer}>
        <FormTopHomePage />
      </div>
      <div className={classes.containerStrongPoints}>
        <StrongPoints />
      </div>
      <div className={classes.containerPartnerCompanies}>
        <PartnerCompanies />
      </div>
      <div className={classes.containerPlatformOperation}>
        <PlatformOperation />
      </div>

      <div className={classes.containerPricesPlansPresentation}>
        <div className={classes.containerBottomFormPart1}>
          <FormBottomHomePagePart1 />
        </div>
        <PricesPlansPresentation />
      </div>

      <div className={classes.containerShortPresentation}>
        <ShortPresentation />
      </div>
      <div className={classes.containerSocialMedia}>
        <SocialMedia />
      </div>
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
