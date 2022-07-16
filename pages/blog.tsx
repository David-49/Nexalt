import { Container, createStyles, Text, Title } from '@mantine/core';
import Head from 'next/head';
import type { NextPage } from 'next';
import Image from "next/image";
import { colors } from '../theme';
import {BlogCategories} from "../components/BlogPage/BlogCategories";
import {BlogCards} from "../components/BlogPage/BlogCards";
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
        paddingBottom: 180,
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
        '@media (max-width: 1580px)': {
            width: '100%',
        },
    },
    photoGroupContainer: {
        position: 'absolute',
        right: 350,
        bottom: -8,
        width: 300,
        zIndex: 0,
        '@media (max-width: 1580px)': {
            display: 'none',
        }
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
    containerOurMission: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 140,
        width: '100%',
        paddingLeft: '150px',
        paddingRight: '150px',
    },
    containerOurVision: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 140,
        marginBottom: 140,
        width: '100%',
        paddingLeft: '150px',
        paddingRight: '150px',
    },
    containerOurTeam: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 140,
        marginBottom: 140,
        width: '100%',
        paddingLeft: '150px',
        paddingRight: '150px',
    },
    containerFooter: {
        backgroundColor: colors.secondaryBlue,
        width: '95%',
        paddingTop: 60,
        borderTopRightRadius: 50,
        paddingBottom: 40,
    },
}));

const Blog: NextPage<IProps> = () => {
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
                            <div className={classes.photoGroupContainer}>
                                <Image src='/assets/images/blog_picture.png' width={2505} height={4819} priority />
                            </div>
                            <Title order={1}>
                                <Text
                                    className={classes.title}
                                    weight={800}
                                    color={colors.primaryBlue}
                                >
                                    Nos
                                </Text>
                                <Text
                                    className={classes.title}
                                    weight={800}
                                    color={colors.secondaryBlue}
                                >
                                    ressources
                                </Text>
                            </Title>
                            <Text size="xl" className={classes.textIntro}>
                                Nexalt souhaite vous accompagner dans toutes vos démarches.
                                Pour ce faire, nous avons une équipe constituée d’experts pouvant vous donner les meilleurs conseils en toute matière !<br/>
                                Toujours pas convaincu ? Jetez-y un œil, vous nous en redirez des nouvelles…
                            </Text>
                        </div>
                    </div>
                    <div className={classes.containerStudentsPrices}>
                        <BlogCategories />
                    </div>
                    <div className={classes.containerOurTeam}>
                        <BlogCards />
                    </div>
                </div>
            </main>
            <div className={classes.containerFooter}>
                <Footer />
            </div>
        </Container>
    );
};

export default Blog;
