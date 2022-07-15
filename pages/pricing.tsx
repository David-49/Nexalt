import { Container, createStyles, Text, Title } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import { colors } from '../theme';
import { PricesPlansPresentationOnly } from '../components/HomePage/PricesPlansPresentationOnly';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

interface IProps {}

const useStyles = createStyles(({
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
        width: '50%',
        zIndex: 4,
        position: 'relative',
    },
    pricesPlansContainer: {
        position: 'absolute',
        right: 180,
        bottom: 0,
        zIndex: 0,
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
    containerFooter: {
        backgroundColor: colors.secondaryBlue,
        width: '95%',
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
                                    et tarif
                                </Text>
                            </Title>
                            <Text size="xl" className={classes.textIntro}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque lacus nunc.
                                Phasellus sed volutpat neque. Mauris a rutrum velit.
                                Quisque vehicula laoreet quam vel volutpat.
                            </Text>
                        </div>
                    </div>
                    <div className={classes.containerStudentsPrices}>

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
