import { Container, createStyles, Text, Title } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { colors } from '../theme';
import { HomePageFilter } from '../components/HomePageFilter';
import womanImage from '../public/assets/images/photo_accueil@2x.png';
import { StrongPoints } from '../components/HomePage/StrongPoints';
import { PartnerCompanies } from '../components/HomePage/PartnerCompanies';
import { PlatformOperation } from '../components/HomePage/PlatformOperation';
import { PricesPlansPresentation } from '../components/HomePage/PricesPlansPresentation';
import { ShortPresentation } from '../components/HomePage/ShortPresentationApp';
import { SocialMedia } from '../components/HomePage/SocialMedia';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

interface IProps {}

const useStyles = createStyles((theme) => ({
  containerPage: {
    padding: 0,
    width: '100%',
  },
  containerHeader: {
    paddingLeft: '150px',
    backgroundColor: colors.primaryBackgroundColor,
    zIndex: 4,
    position: 'relative',
    width: '93%',
    marginRight: 'auto',
  },
  containerWhiteBlockTop: {
    backgroundColor: colors.primaryBackgroundColor,
    borderBottomRightRadius: 50,
    paddingBottom: 293,
    paddingTop: 138,
    width: '93%',
    marginRight: 'auto',
    paddingLeft: '150px',
    paddingRight: '150px',
  },

  title: {
    fontSize: 50,
    lineHeight: 1,
    fontFamily: 'Montserrat',
    zIndex: 4,
    position: 'relative',
  },
  textIntro: {
    marginTop: 25,
    width: '65%',
    zIndex: 4,
    position: 'relative',
  },
  containerFilter: {
    marginTop: 55,
    zIndex: 4,
    position: 'relative',
  },
  womanImageContainer: {
    position: 'absolute',
    right: 180,
    bottom: -10,
    zIndex: 0,
  },
  firstBackgroundDecorationContainer: {
    position: 'absolute',
    zIndex: -1,
    right: 0,
    top: 0,
  },
  blueShapeTop: {
    position: 'absolute',
    top: -638,
    bottom: 0,
    right: 0,
    width: 200,
    backgroundColor: colors.primaryBlue,
    zIndex: -2,
  },
  containerStrongPoints: {
    backgroundColor: colors.primaryBlue,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    width: '95%',
    marginLeft: 'auto',
    padding: 50,
    paddingLeft: 60,
  },
  containerPartnerCompanies: {
    margin: 'auto',
    marginTop: 220,
    width: '100%',
    paddingLeft: '150px',
    paddingRight: '150px',
  },
  containerPlatformOperation: {
    marginTop: 140,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: '150px',
    paddingRight: '150px',
  },
  containerPricesPlansPresentation: {
    marginTop: 247,
    paddingLeft: 150,
    paddingTop: 40,
    width: '95%',
    position: 'relative',
    backgroundColor: colors.secondaryBlue,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  containerShortPresentation: {
    margin: 'auto',
    width: '80%',
  },
  containerSocialMedia: {
    marginTop: 180,
    paddingBottom: 100,
  },
  containerShapeBottom: {
    position: 'relative',
    paddingLeft: 150,
    paddingRight: 150,
  },
  blueShape: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 250,
    zIndex: -2,
    backgroundColor: colors.secondaryBlue,
  },
  containerWhiteBlock: {
    paddingTop: 130,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: colors.primaryBackgroundColor,
  },
  containerFooter: {
    backgroundColor: colors.secondaryBlue,
    width: '95%',
    paddingLeft: 150,
    paddingRight: 50,
    paddingTop: 60,
    borderTopRightRadius: 50,
    paddingBottom: 40,
  },
}));

const Home: NextPage<IProps> = () => {
  const { classes } = useStyles();

  return (
    <Container fluid className={classes.containerPage}>
      <Head>
        <title>Nexalt</title>
        <meta name="description" content="Nexalt..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.containerHeader}>
        <Header />
      </div>
      <main>
        <div>
          <div style={{ position: 'relative' }}>
            <div className={classes.blueShapeTop} />
            <div className={classes.containerWhiteBlockTop}>
              <div className={classes.womanImageContainer}>
                <Image src={womanImage} width={550} height={750} priority />
              </div>
              <Title order={1}>
                <Text
                  className={classes.title}
                  weight={800}
                  color={colors.primaryBlue}
                >
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
                Nexalt aide les étudiants à trouver une alternance plus
                facilement. Nexalt aide les étudiants à trouver une alternance
                plus facilement. Nexalt aide les étudiants à trouver une
                alternance plus facilement. Nexalt aide les étudiants à trouver
                une alternance plus facilement. Nexalt aide les étudiants à
                trouver une alternance plus facilement.
              </Text>
              <div className={classes.containerFilter}>
                <HomePageFilter />
              </div>
            </div>
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
        </div>

        <div className={classes.containerPricesPlansPresentation}>
          <PricesPlansPresentation />
        </div>

        <div className={classes.containerShapeBottom}>
          <div className={classes.blueShape} />
          <div className={classes.containerWhiteBlock}>
            <div className={classes.containerShortPresentation}>
              <ShortPresentation />
            </div>
            <div className={classes.containerSocialMedia}>
              <SocialMedia />
            </div>
          </div>
        </div>
      </main>

      <div className={classes.containerFooter}>
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
