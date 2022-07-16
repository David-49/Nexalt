import { Container, createStyles, Text, Title } from '@mantine/core';
import Head from 'next/head';
import type { NextPage } from 'next';
import Image from "next/image";
import Link from "next/link";
import { colors } from '../theme';
import { OurStory } from '../components/AboutPage/OurStory';
import { OurMissions } from "../components/AboutPage/OurMissions";
import {OurTeam} from "../components/AboutPage/OurTeam";
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import {OurVision} from "../components/AboutPage/OurVision";

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
        right: 180,
        bottom: -8,
        width: 750,
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
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 40,
        '@media (max-width: 1700px)': {
            flexDirection: 'column',
            width: '40%',
        },
        '@media (max-width: 1580px)': {
            flexDirection: 'row',
            width: '100%',
        },
    },
    btn1: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        fontSize: 24,
        textAlign: 'center',
        backgroundColor: colors.primaryBlue,
        color: colors.secondaryBackgroundColor,
        paddingTop: 15,
        paddingRight: 60,
        paddingBottom: 15,
        paddingLeft: 60,
        borderRadius: 10,
        textTransform: 'uppercase',
        transition: 'background-color .2s',
        ':hover': {
            backgroundColor: '#725FFE',
            transition: 'background-color .2s',
        },
        zIndex: 100,
    },
    btn2: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        fontSize: 24,
        textAlign: 'center',
        backgroundColor: colors.secondaryBackgroundColor,
        color: colors.primaryBlue,
        boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
        paddingTop: 15,
        paddingRight: 60,
        paddingBottom: 15,
        paddingLeft: 60,
        borderRadius: 10,
        marginLeft: 40,
        textTransform: 'uppercase',
        transition: 'background-color .2s, color .2s',
        ':hover': {
            color: colors.secondaryBackgroundColor,
            backgroundColor: colors.primaryBlue,
            transition: 'background-color .2s, color .2s',
        },
        '@media (max-width: 1700px)': {
            marginTop: 40,
            marginLeft: 0,
        },
        '@media (max-width: 1580px)': {
            marginTop: 0,
            marginLeft: 40,
        },
        zIndex: 100,
    },
}));

const About: NextPage<IProps> = () => {
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
                                <Image src='/assets/images/photo_group.png' width={4430} height={3475} priority />
                            </div>
                            <Title order={1}>
                                <Text
                                    className={classes.title}
                                    weight={800}
                                    color={colors.primaryBlue}
                                >
                                    Nous changeons la
                                </Text>
                                <Text
                                    className={classes.title}
                                    weight={800}
                                    color={colors.secondaryBlue}
                                >
                                    recherche d'alternance
                                </Text>
                            </Title>
                            <Text size="xl" className={classes.textIntro}>
                                Nexalt est une startup fondée en 2022 par Lilian Beillard et Bastien Robert.
                                Nous souhaitons aider les étudiants, comme nous, à trouver une alternance plus facilement et plus rapidement tout en éclairant les entreprises sur les possibilités de recrutement.
                            </Text>
                            <div className={classes.buttons}>
                                <Link href="/signup">
                                    <a className={classes.btn1}>
                                        je créé mon profil
                                    </a>
                                </Link>
                                <Link href="/prices">
                                    <a className={classes.btn2}>
                                        voir les prix
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={classes.containerStudentsPrices}>
                        <OurStory />
                    </div>
                    <div className={classes.containerOurMission}>
                        <OurMissions />
                    </div>
                    <div className={classes.containerOurVision}>
                        <OurVision />
                    </div>
                    <div className={classes.containerOurTeam}>
                        <OurTeam />
                    </div>
                </div>
            </main>
            <div className={classes.containerFooter}>
                <Footer />
            </div>
        </Container>
    );
};

export default About;
