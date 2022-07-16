import { Container, createStyles, Text, Title } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import { colors } from '../theme';
import { PriceForStudent } from '../components/PricesPage/PriceForStudent';
import { PricesPlans } from '../components/PricesPage/PricesPlans';
import { PricesComments } from '../components/PricesPage/PricesComments';
import { PricesPlansPresentationOnly } from '../components/PricesPage/PricesPlansPresentationOnly';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

interface IProps {}

const useStyles = createStyles(() => ({
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
        paddingBottom: 240,
        paddingTop: 140,
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
        textTransform: 'uppercase',
    },
    textIntro: {
        marginTop: 25,
        width: '50%',
        zIndex: 4,
        position: 'relative',
        '@media (max-width: 1720px)': {
            width: '40%',
        },
        '@media (max-width: 1549px)': {
            width: '33%',
        },
        '@media (max-width: 1400px)': {
            width: '30%',
        },
    },
    pricesPlansContainer: {
        position: 'absolute',
        right: 180,
        bottom: 0,
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
    containerStudentsPrices: {
        backgroundColor: colors.primaryBlue,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        width: '95%',
        marginLeft: 'auto',
        padding: 50,
        paddingLeft: 60,
    },
    containerPricesPlans: {
        margin: 'auto',
        marginTop: 140,
        width: '100%',
        paddingLeft: '150px',
        paddingRight: '150px',
    },
    containerPricesComments: {
        margin: 'auto',
        marginTop: 140,
        marginBottom: 140,
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
    containerFooter: {
        backgroundColor: colors.secondaryBlue,
        width: '95%',
        paddingTop: 60,
        borderTopRightRadius: 50,
        paddingBottom: 40,
    },
}));

const Prices: NextPage<IProps> = () => {
    const { classes } = useStyles();

    return (
        <Container fluid className={classes.containerPage}>
            <Head>
                <title>Offres et tarifs</title>
                <meta name="description" content="NVous pourrez retrouver toutes les offres et tarifs proposés par nexalt" />
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
                            <div className={classes.pricesPlansContainer}>
                                <PricesPlansPresentationOnly />
                            </div>
                            <Title order={1}>
                                <Text
                                    className={classes.title}
                                    weight={800}
                                    color={colors.primaryBlue}
                                >
                                    Offre
                                </Text>
                                <Text
                                    className={classes.title}
                                    weight={800}
                                    color={colors.secondaryBlue}
                                >
                                    et tarifs
                                </Text>
                            </Title>
                            <Text size="xl" className={classes.textIntro}>
                                Retrouvez toutes nos offres et nos tarifs.
                                Nos offres sont faites pour les étudiants et pour les entreprises.
                                Il ne vous reste plus qu’à faire votre choix !
                            </Text>
                        </div>
                    </div>
                    <div className={classes.containerStudentsPrices}>
                        <PriceForStudent />
                    </div>
                    <div className={classes.containerPricesPlans}>
                        <PricesPlans />
                    </div>
                    <div className={classes.containerPricesComments}>
                        <PricesComments />
                    </div>
                </div>
            </main>
            <div className={classes.containerFooter}>
                <Footer />
            </div>
        </Container>
    );
};

export default Prices;
