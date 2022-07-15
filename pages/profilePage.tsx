import { ReactElement, ReactNode } from 'react';

import {Container, createStyles} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from 'next';
import {AppLayout} from "../components/AppLayout";
import { colors } from '../theme';

type HomePageWithLayout = NextPage & {
    getLayout: (page: ReactElement) => ReactNode;
};

const useStyles = createStyles( ({
    containerPage: {
        padding: 0,
        width: '100%',
    },
    containerHeader: {
        paddingLeft: 150,
        paddingRight: 150,
    },
    main: {
        position: 'relative',
    },
    board: {
        position: 'fixed',
        backgroundColor: colors.secondaryBlue,
        width: 480,
        height: 900,
        borderBottomRightRadius: 25,
        zIndex: 2,
        '@media (max-width: 1820px)': {
            width: 384,
        }
    },
    boardInner: {
        width: 320,
        marginLeft: 136,
        marginTop: 52,
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        fontSize: 20,
        fontWeight: 400,
        color: colors.secondaryBackgroundColor,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
    },
    svgBack: {
        width: 15,
        fill: colors.secondaryBackgroundColor,
        marginRight: 10,
    },
    boardMenu: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flexStart',
        margin: 0,
        padding: 0,
    },
    liBoardMenu: {
        marginTop: 10,
        backgroundColor: colors.secondaryBlue,
        borderRadius: 10,
        paddingTop: 15,
        paddingRight: 40,
        paddingBottom: 15,
        paddingLeft: 20,
        width: '100%',
        listStyle: "none",
        '@media (max-width: 1820px)': {
            width: '72%',
        },
        '@media (max-width: 1700px)': {
            width: '72%',
        },
        ':hover': {
            backgroundColor: colors.primaryBlue,
            a: {
                color: colors.secondaryBackgroundColor,
                fontWeight: 600,
            },
            svg: {
                fill: colors.secondaryBackgroundColor,
            }
        },
    },
    linkBoardMenu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        fontSize: 16,
        fontWeight: 400,
        color: colors.tertiaryBlue,
    },
    svgLinkBoardMenu: {
        width: 20,
        marginRight: 15,
        fill: colors.tertiaryBlue,
    },
    liActiveBoardMenu: {
        marginTop: 10,
        backgroundColor: colors.primaryBlue,
        borderRadius: 10,
        paddingTop: 15,
        paddingRight: 40,
        paddingBottom: 15,
        paddingLeft: 20,
        listStyle: "none",
        '@media (max-width: 1820px)': {
            width: '72%',
        },
        '@media (max-width: 1700px)': {
            width: '72%',
        },
    },
    linkActiveBoardMenu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        fontSize: 16,
        fontWeight: 600,
        color: colors.secondaryBackgroundColor,
    },
    svgActiveLinkBoardMenu: {
        width: 20,
        marginRight: 15,
        fill: colors.secondaryBackgroundColor,
    },
    boardResult: {
        paddingTop: '2%',
        paddingRight: "5%",
        paddingBottom: 0,
        paddingLeft: "30%",
        '@media (max-width: 1820px)': {
            paddingTop: '2%',
            paddingRight: "5%",
            paddingBottom: 0,
            paddingLeft: "25%",
        },
        '@media (max-width: 1700px)': {
            paddingTop: '2%',
            paddingRight: "5%",
            paddingBottom: 0,
            paddingLeft: "32%",
        },
    },
    innerBoardResult: {
        display: 'flex',
        flexDirection: 'column',
    },
    topBoard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    h2: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 30,
        fontWeight: 600,
        color: colors.blackText,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
    },
    profileResult: {
        paddingTop: '2%',
        paddingRight: '5%',
        paddingBottom: '0%',
        paddingLeft: '30%',
        '@media (max-width: 1820px)': {
            paddingTop: '2%',
            paddingRight: "5%",
            paddingBottom: 0,
            paddingLeft: "25%",
        },
        '@media (max-width: 1700px)': {
            paddingTop: '2%',
            paddingRight: "5%",
            paddingBottom: 0,
            paddingLeft: "32%",
        },
    },
    innerProfileResult: {
        display: 'flex',
        flexDirection: 'column',
    },
    topProfile: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.secondaryBackgroundColor,
        paddingTop: 15,
        paddingRight: 20,
        paddingBottom: 15,
        paddingLeft: 20,
        borderRadius: 25,
    },
    imgProfileMask: {
        position: 'relative',
        width: 800,
        height: 200,
        overflow: 'hidden',
        borderRadius: 20,
    },
    imgProfilePosition: {
        position: "absolute",
        top: -35,
        '@media (max-width: 1700px)': {
            top: 0,
        }
    },
    identity: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        marginLeft: 30,
    },
    identityName: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    h1: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 30,
        fontWeight: 800,
        color: colors.blackText,
        margin: 0,
    },
    svgIdentityName: {
        width: 30,
        marginLeft: 20,
    },
    st0: {
        fill: colors.secondaryBackgroundColor,
        stroke: colors.primaryBlue,
        strokeWidth: 2,
        transition: 'fill .2s',
        ':hover': {
            fill: colors.primaryBlue,
            transition: 'fill .2s',
        }
    },
    identityCategory: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 20,
        fontWeight: 600,
        color: colors.blackText,
    },
    identityDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    identityLocalisation: {
        display: 'flex',
        flexDirection: 'row',
    },
    svgLocalisation: {
        width: 20,
        fill: colors.blackText,
    },
    localisationText: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.blackText,
        marginLeft: 15,
    },
    identityRecommandation: {
        display: 'flex',
        flexDirection: 'row',
    },
    svgRecommandation: {
        width: 20,
        fill: colors.blackText,
    },
    recommandationText: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.blackText,
        marginLeft: 15,
    },
    identityStudies: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    studiesYear: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 36,
        fontWeight: 700,
        color: colors.blackText,
    },
    studiesYearText: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 24,
        fontWeight: 400,
        color: '#87859EFF',
    },
    identityContact: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    contactText: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 16,
        fontWeight: 400,
        color: colors.blackText,
        textAlign: 'center',
    },
    contactButton: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 20,
        fontWeight: 700,
        color: colors.secondaryBackgroundColor,
        backgroundColor: colors.primaryBlue,
        paddingTop: 20,
        paddingRight: 55,
        paddingBottom: 20,
        paddingLeft: 55,
        borderRadius: 15,
        textAlign: 'center',
        marginTop: 15,
        transition: 'background-color .3s',
        ':hover': {
            backgroundColor: colors.secondaryBlue,
            transition: 'background-color .3s',
        }
    },
    allContent: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: 35,
        marginTop: 35,
        width: '100%',
        justifyContent: 'space-between',
    },
    firstPartContent: {
        display: 'flex',
        flexDirection: 'column',
        width: 800,
        '@media (max-width: 1700px)': {
            width: 420,
        }
    },
    profileContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 30,
        backgroundColor: colors.secondaryBackgroundColor,
        borderRadius: 25,
        marginBottom: 30,
    },
    profilePresentation: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.blackText,
        marginTop: 15,
    },
    profileContentRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    svgFullscreen: {
        width: 25,
        fill: colors.blackText,
    },
    portfolioPictures: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        '@media (max-width: 1700px)': {
            flexDirection: 'column',

        }
    },
    picture1: {
        width: 360,
        height: 360,
        borderRadius: 10,
        objectFit: 'cover',
        overflow: 'hidden',
    },
    portfolioGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: 20,
        gridAutoRows: 'minmax(100px, auto)',
        marginLeft: 20,
        '@media (max-width: 1700px)': {
            marginTop: 20,
            marginLeft: 0,
        }
    },
    pictureGrid: {
        width: 170,
        height: 170,
        objectFit: 'cover',
        borderRadius: 10,
        overflow: 'hidden',
    },
    seeAllButton: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 13,
        fontWeight: 700,
        color: colors.secondaryBackgroundColor,
        backgroundColor: colors.primaryBlue,
        paddingTop: 13,
        paddingRight: 20,
        paddingBottom: 13,
        paddingLeft: 20,
        textAlign: 'center',
        borderRadius: 10,
        textTransform: 'uppercase',
        transition: 'background-color .3s',
        ':hover': {
            backgroundColor: colors.secondaryBlue,
            transition: 'background-color .3s',
        },
    },
    skillGraph: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        '@media (max-width: 1700px)': {
            flexDirection: 'column',
        }
    },
    skills: {
        margin: 0,
        padding: 0,
    },
    skillsLi: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        marginRight: 0,
        marginBottom: 16,
        marginLeft: 0,
    },
    skillName: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 20,
        fontWeight: 500,
        color: colors.blackText,
        marginRight: 30,
    },
    skillBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    bar: {
        content: '""',
        width: 40,
        height: 7,
        borderRadius: 100,
        backgroundColor: colors.primaryBackgroundColor,
        ':nth-of-type(2)': {
            marginLeft: 5,
        },
        ':nth-of-type(3)': {
            marginLeft: 5,
        },
    },
    fill: {
        backgroundColor: `${colors.primaryBlue} !important`,
    },
    experiencesContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    experiencesFirstPart: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    officeName: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 24,
        fontWeight: 600,
        color: colors.blackText,
    },
    officeLocalisation: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.blackText,
    },
    svgOfficeLocalisation: {
        width: 20,
        fill: colors.blackText,
        marginLeft: 10,
    },
    experiencesSecondPart: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    jobName: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.blackText,
    },
    jobDate: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.blackText,
    },
    svgJobDate: {
        width: 20,
        fill: colors.blackText,
        marginLeft: 10,
    },
    experienceDescription: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.blackText,
        marginTop: 20,
    },
    secondPartContent: {
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        '@media (max-width: 1700px)': {
            width: 360,
        }
    },
    langContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    flag: {
        width: 53,
        height: 32,
        borderRadius: 5,
        overflow: 'hidden',
    },
    nameFlag: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 20,
    },
    langName: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 28,
        fontWeight: 600,
        color: colors.blackText,
    },
    langLevel: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.blackText,
    },
    categoryContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 15,
    },
    svgCategoryContent: {
        width: 20,
        fill: colors.primaryBlue,
    },
    categories: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 10,
        padding: 0,
    },
    categoryName: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.primaryBlue,
        listStyle: 'none',
        ':nth-of-type(2)': {
           marginTop: 5,
        },
        ':nth-of-type(3)': {
            marginTop: 5,
        },
    },
    localisationContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    tableCity: {
        margin: 0,
        padding: 0,
    },
    cityName: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.blackText,
        listStyle: 'none',
    },
    formationContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    imgMask: {
        position: 'relative',
        width: 70,
        height: 70,
        overflow: 'hidden',
        borderRadius: 15,
        ':nth-of-type(1)': {
            border: "solid 2px #1D1D1D",
        }
    },
    mds: {
        position: 'absolute',
        top: 20,
        left: 10,
        width: '70%',
    },
    openclassroom: {
        position: 'absolute',
        width: '100%',
    },
    formationTitles: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    formationTitle: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 24,
        fontWeight: 600,
        color: colors.blackText,
    },
    formationSubtitle: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.blackText,
    },
    similaryContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    similaryStudent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginRight: 0,
        marginBottom: 15,
        marginLeft: 0,
    },
    studentInfo: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 10,
    },
    studentName: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 24,
        fontWeight: 600,
        color: colors.blackText,
    },
    studentJob: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.blackText,
    },
}));

const ProfilePage: HomePageWithLayout = () => {
    const {classes} = useStyles();

    return (
        <Container fluid className={classes.containerPage}>
            <section className={classes.board}>
                <div className={classes.boardInner}>
                    <a href="page_recherche.html" className={classes.title}>
                        <svg className={classes.svgBack} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 20 19.9"
                             xmlSpace="preserve">
                        <path d="M15.2,18.1c0.4,0.4,0.4,1.1,0,1.5c-0.2,0.2-0.5,0.3-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.3l-8.9-8.9c-0.4-0.4-0.4-1.1,0-1.5
                            l8.9-8.9c0.4-0.4,1.1-0.4,1.5,0c0.4,0.4,0.4,1.1,0,1.5L7,9.9L15.2,18.1z"/>
                        </svg>
                        Retour à la recherche</a>
                    <ul className={classes.boardMenu}>
                        <li className={classes.liActiveBoardMenu}>
                            <Link href="#about">
                                <a className={classes.linkActiveBoardMenu}>
                                    À propos
                                </a>
                            </Link>
                        </li>
                        <li className={classes.liBoardMenu}>
                            <Link href="#portfolio">
                                <a className={classes.linkBoardMenu}>
                                    Portfolio
                                </a>
                            </Link>
                        </li>
                        <li className={classes.liBoardMenu}>
                            <Link href="#skills">
                                <a className={classes.linkBoardMenu}>
                                    Compétences
                                </a>
                            </Link>
                        </li>
                        <li className={classes.liBoardMenu}>
                            <Link href="#experiences">
                                <a className={classes.linkBoardMenu}>
                                    Expériences
                                </a>
                            </Link>
                        </li>
                        <li className={classes.liBoardMenu}>
                            <Link href="#formations">
                                <a className={classes.linkBoardMenu}>
                                    Formations
                                </a>
                            </Link>
                        </li>
                        <li className={classes.liBoardMenu}>
                            <Link href="#languages">
                                <a className={classes.linkBoardMenu}>
                                    Langues
                                </a>
                            </Link>
                        </li>
                        <li className={classes.liBoardMenu}>
                            <Link href="#categories">
                                <a className={classes.linkBoardMenu}>
                                    Catégories
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={classes.profileResult}>
                <div className={classes.innerProfileResult}>
                    <div className={classes.topProfile}>
                        <div className={classes.imgProfileMask}>
                            <div className={classes.imgProfilePosition}>
                                <Image
                                    src="/assets/images/research/photo_1.jpg" alt=""
                                    width= "1080"
                                    height= "1400"
                                />
                            </div>
                        </div>
                        <div className={classes.identity}>
                            <div className={classes.identityName}>
                                <h1 className={classes.h1}>Margaux Dupuis</h1>
                                <svg className={classes.svgIdentityName} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 26 22.9"
                                     xmlSpace="preserve">
                                    <path id="Icon_feather-heart" className={classes.st0} d="M23.1,2.8c-2.5-2.5-6.5-2.5-8.9,0c0,0,0,0,0,0L13,4.1l-1.2-1.2c-2.5-2.5-6.5-2.5-8.9,0
                                    s-2.5,6.5,0,8.9L4.1,13l8.9,8.9l8.9-8.9l1.2-1.2C25.6,9.3,25.6,5.3,23.1,2.8C23.2,2.9,23.1,2.9,23.1,2.8L23.1,2.8z"/>
                                </svg>
                            </div>
                            <span className={classes.identityCategory}>Graphiste | Branding</span>
                            <div className={classes.identityDetails}>
                                <div className={classes.identityLocalisation}>
                                    <svg className={classes.svgLocalisation} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 30 30"
                                         xmlSpace="preserve">
                                        <path id="Icon_ionic-md-pin" d="M15,0C9.1,0,4.4,4.6,4.3,10.5C4.3,18.4,15,30,15,30s10.7-11.6,10.7-19.5C25.6,4.6,20.9,0,15,0z
                                         M15,14.3c-2.1,0-3.7-1.8-3.7-3.8c0-2.1,1.8-3.7,3.8-3.7c2,0,3.7,1.7,3.7,3.7C18.8,12.6,17.1,14.3,15,14.3
                                        C15.1,14.3,15,14.3,15,14.3z"/>
                                    </svg>
                                    <span className={classes.localisationText}>Cherche à Angers, Tours, Paris, Evreux</span>
                                </div>
                                <div className={classes.identityRecommandation}>
                                    <svg className={classes.svgRecommandation} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 30 30"
                                         xmlSpace="preserve">
                                        <path id="Icon_awesome-thumbs-up" d="M6.1,13.1H1.4c-0.8,0-1.4,0.6-1.4,1.4v14.1C0,29.4,0.6,30,1.4,30c0,0,0,0,0,0h4.7
                                        c0.8,0,1.4-0.6,1.4-1.4l0,0V14.5C7.5,13.8,6.9,13.1,6.1,13.1z M3.8,27.7c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4
                                        S4.5,27.7,3.8,27.7L3.8,27.7z M22.5,4.8c0,2.5-1.5,3.9-1.9,5.5h6c1.9,0,3.4,1.5,3.5,3.4c0,1.1-0.4,2.1-1.1,2.9l0,0
                                        c0.6,1.5,0.4,3.3-0.5,4.7c0.5,1.5,0.1,3.2-1,4.4c0.3,0.9,0.1,1.8-0.4,2.6C25.8,30,22.8,30,20.3,30h-0.2c-2.4-0.1-4.8-0.7-7-1.9
                                        c-1-0.5-2-0.8-3.1-0.9c-0.4,0-0.7-0.3-0.7-0.7V14c0-0.2,0.1-0.4,0.2-0.5c2.3-2.3,3.3-4.7,5.2-6.6c0.8-1,1.3-2.2,1.5-3.5
                                        c0.3-1.1,0.8-3.4,2-3.4C19.7,0,22.5,0.5,22.5,4.8z"/>
                                    </svg>
                                    <span className={classes.recommandationText}>7 recommandations</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.identityStudies}>
                            <span className={classes.studiesYear}>3ème</span>
                            <span className={classes.studiesYearText}>année</span>
                        </div>
                        <div className={classes.identityContact}>
                            <p className={classes.contactText}>Margaux est toujours à la recherche d'une alternance, si son profil vous intéresse, contactez la !</p>
                            <Link href="">
                                <a className={classes.contactButton}>Contacter Margaux</a>
                            </Link>
                        </div>
                    </div>

                    <div className={classes.allContent}>

                        <div className={classes.firstPartContent}>
                            <div className={classes.profileContent} id="about">
                                <h2 className={classes.h2}>À propos de moi</h2>
                                <p className={classes.profilePresentation}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan magna sit amet nibh mollis fringilla. Donec luctus, felis quis sollicitudin congue, libero lorem commodo metus, maximus ullamcorper felis turpis et neque. Sed pulvinar at arcu et ultricies. Quisque rhoncus tellus eget ante placerat, sed accumsan tortor dictum.
                                    Integer at lorem sem. Phasellus at sapien id tellus venenatis ultrices sit amet euismod ipsum. Aliquam erat volutpat.</p>
                            </div>

                            <div className={classes.profileContent} id="portfolio">
                                <div className={classes.profileContentRow}>
                                    <h2 className={classes.h2} >Portfolio</h2>
                                    <svg className={classes.svgFullscreen} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 30 30"
                                         xmlSpace="preserve">
                                        <path id="Icon_material-fullscreen" d="M4.3,19.3H0V30h10.7v-4.3H4.3V19.3z M0,10.7h4.3V4.3h6.4V0H0V10.7z M25.7,25.7h-6.4V30H30
                                        V19.3h-4.3V25.7z M19.3,0v4.3h6.4v6.4H30V0H19.3z"/>
                                    </svg>
                                </div>
                                <div className={classes.portfolioPictures}>
                                    <div className={classes.picture1}>
                                        <Image src="/assets/images/project_1.jpg" alt=""
                                               width= "500"
                                               height= "500"
                                        />
                                    </div>
                                    <div className={classes.portfolioGrid}>
                                        <div className={classes.pictureGrid}>
                                            <Image
                                                src="/assets/images/project_2.jpg" alt=""
                                                width= "200"
                                                height= "200"
                                            />
                                        </div>
                                        <div className={classes.pictureGrid}>
                                            <Image
                                                src="/assets/images/project_3.jpg" alt=""
                                                width= "200"
                                                height= "200"
                                            />
                                        </div>
                                        <div className={classes.pictureGrid}>
                                            <Image
                                                src="/assets/images/project_4.jpg" alt=""
                                                width= "200"
                                                height= "200"
                                            />
                                        </div>
                                        <div className={classes.pictureGrid}>
                                            <Image
                                                src="/assets/images/project_5.jpg" alt=""
                                                width= "200"
                                                height= "200"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.profileContent} id="skills">
                                <div className={classes.profileContentRow}>
                                    <h2 className={classes.h2}>Compétences</h2>
                                    <Link href="">
                                        <a className={classes.seeAllButton}>tout voir</a>
                                    </Link>

                                </div>

                                <div className={classes.skillGraph}>
                                    <ul className={classes.skills}>
                                        <li className={classes.skillsLi}>
                                            <span className={classes.skillName}>Graphisme</span>
                                            <div className={classes.skillBar}>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                            </div>
                                        </li>
                                        <li className={classes.skillsLi}>
                                            <span className={classes.skillName}>Charte graphique</span>
                                            <div className={classes.skillBar}>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={classes.bar}></div>
                                            </div>
                                        </li>
                                        <li className={classes.skillsLi}>
                                            <span className={classes.skillName}>Webdesign</span>
                                            <div className={classes.skillBar}>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={classes.bar}></div>
                                                <div className={classes.bar}></div>
                                            </div>
                                        </li>
                                        <li className={classes.skillsLi}>
                                            <span className={classes.skillName}>Branding</span>
                                            <div className={classes.skillBar}>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                            </div>
                                        </li>
                                        <li className={classes.skillsLi}>
                                            <span className={classes.skillName}>UI Design</span>
                                            <div className={classes.skillBar}>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className={classes.skills}>
                                        <li className={classes.skillsLi}>
                                            <span className={classes.skillName}>UX Design</span>
                                            <div className={classes.skillBar}>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                            </div>
                                        </li>
                                        <li className={classes.skillsLi}>
                                            <span className={classes.skillName}>Infographie</span>
                                            <div className={classes.skillBar}>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={classes.bar}></div>
                                                <div className={classes.bar}></div>
                                            </div>
                                        </li>
                                        <li className={classes.skillsLi}>
                                            <span className={classes.skillName}>Motion Design</span>
                                            <div className={classes.skillBar}>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={classes.bar}></div>
                                            </div>
                                        </li>
                                        <li className={classes.skillsLi}>
                                            <span className={classes.skillName}>Intégration Web</span>
                                            <div className={classes.skillBar}>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={classes.bar}></div>
                                            </div>
                                        </li>
                                        <li className={classes.skillsLi}>
                                            <span className={classes.skillName}>Affiches</span>
                                            <div className={classes.skillBar}>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                                <div className={`${classes.bar} ${classes.fill}`}></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.profileContent} id="experiences">
                                <h2 className={classes.h2}>Expériences</h2>
                                <div className={classes.experiencesContent}>
                                    <div className={classes.experiencesFirstPart}>
                                        <span className={classes.officeName}>Moreau-Millet</span>
                                        <div>
                                            <span className={classes.officeLocalisation}>Angers</span>
                                            <svg className={classes.svgOfficeLocalisation} version="1.1" id="Calque_1"
                                                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                 viewBox="0 0 30 30"
                                                 xmlSpace="preserve">
                                                <path id="Icon_ionic-md-pin" d="M15,0C9.1,0,4.4,4.6,4.3,10.5C4.3,18.4,15,30,15,30s10.7-11.6,10.7-19.5C25.6,4.6,20.9,0,15,0z
                                                 M15,14.3c-2.1,0-3.7-1.8-3.7-3.8c0-2.1,1.8-3.7,3.8-3.7c2,0,3.7,1.7,3.7,3.7C18.8,12.6,17.1,14.3,15,14.3
                                                C15.1,14.3,15,14.3,15,14.3z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={classes.experiencesSecondPart}>
                                        <span className={classes.jobName}>Graphiste | Intégrateur web</span>
                                        <div>
                                            <span className={classes.jobDate}>Juin 2020 - Août 2020</span>
                                            <svg className={classes.svgJobDate} version="1.1" id="Calque_1"
                                                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                 viewBox="0 0 30 34.3" xmlSpace="preserve">
                                                <path id="Icon_awesome-calendar-alt" d="M0,31.1c0,1.8,1.4,3.2,3.2,3.2h23.6c1.8,0,3.2-1.4,3.2-3.2V12.9H0V31.1z M21.4,17.9
                                                c0-0.4,0.4-0.8,0.8-0.8h2.7c0.4,0,0.8,0.4,0.8,0.8v2.7c0,0.4-0.4,0.8-0.8,0.8h-2.7c-0.4,0-0.8-0.4-0.8-0.8L21.4,17.9z M21.4,26.5
                                                c0-0.4,0.4-0.8,0.8-0.8h2.7c0.4,0,0.8,0.4,0.8,0.8v2.7c0,0.4-0.4,0.8-0.8,0.8h-2.7c-0.4,0-0.8-0.4-0.8-0.8L21.4,26.5z M12.9,17.9
                                                c0-0.4,0.4-0.8,0.8-0.8h2.7c0.4,0,0.8,0.4,0.8,0.8v2.7c0,0.4-0.4,0.8-0.8,0.8h-2.7c-0.4,0-0.8-0.4-0.8-0.8V17.9z M12.9,26.5
                                                c0-0.4,0.4-0.8,0.8-0.8h2.7c0.4,0,0.8,0.4,0.8,0.8v2.7c0,0.4-0.4,0.8-0.8,0.8h-2.7c-0.4,0-0.8-0.4-0.8-0.8V26.5z M4.3,17.9
                                                c0-0.4,0.4-0.8,0.8-0.8h2.7c0.4,0,0.8,0.4,0.8,0.8v2.7c0,0.4-0.4,0.8-0.8,0.8H5.1c-0.4,0-0.8-0.4-0.8-0.8L4.3,17.9z M4.3,26.5
                                                c0-0.4,0.4-0.8,0.8-0.8h2.7c0.4,0,0.8,0.4,0.8,0.8v2.7c0,0.4-0.4,0.8-0.8,0.8H5.1c-0.4,0-0.8-0.4-0.8-0.8L4.3,26.5z M26.8,4.3h-3.2
                                                V1.1c0-0.6-0.5-1.1-1.1-1.1h-2.1c-0.6,0-1.1,0.5-1.1,1.1v3.2h-8.6V1.1c0-0.6-0.5-1.1-1.1-1.1c0,0,0,0,0,0H7.5C6.9,0,6.4,0.5,6.4,1.1
                                                v3.2H3.2C1.4,4.3,0,5.7,0,7.5v3.2h30V7.5C30,5.7,28.6,4.3,26.8,4.3z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className={classes.experienceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan magna sit amet nibh mollis fringilla. Donec luctus, felis quis sollicitudin congue, libero lorem commodo metus, maximus ullamcorper felis turpis et neque. Sed pulvinar at arcu et ultricies. Quisque rhoncus tellus eget ante placerat, sed accumsan tortor dictum.
                                    </p>
                                </div>
                                <div className={classes.experiencesContent}>
                                    <div className={classes.experiencesFirstPart}>
                                        <span className={classes.officeName}>Réussir sa prépa</span>
                                        <div>
                                            <span className={classes.officeLocalisation}>Angers</span>
                                            <svg className={classes.svgOfficeLocalisation} version="1.1" id="Calque_1"
                                                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                 viewBox="0 0 30 30"
                                                 xmlSpace="preserve">
                                                <path id="Icon_ionic-md-pin" d="M15,0C9.1,0,4.4,4.6,4.3,10.5C4.3,18.4,15,30,15,30s10.7-11.6,10.7-19.5C25.6,4.6,20.9,0,15,0z
                                                 M15,14.3c-2.1,0-3.7-1.8-3.7-3.8c0-2.1,1.8-3.7,3.8-3.7c2,0,3.7,1.7,3.7,3.7C18.8,12.6,17.1,14.3,15,14.3
                                                C15.1,14.3,15,14.3,15,14.3z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={classes.experiencesSecondPart}>
                                        <span className={classes.jobName}>Graphiste | Intégrateur web</span>
                                        <div>
                                            <span className={classes.jobDate}>Juin 2021 - Août 2021</span>
                                            <svg className={classes.svgJobDate} version="1.1" id="Calque_1"
                                                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                 viewBox="0 0 30 34.3" xmlSpace="preserve">
                                                <path id="Icon_awesome-calendar-alt" d="M0,31.1c0,1.8,1.4,3.2,3.2,3.2h23.6c1.8,0,3.2-1.4,3.2-3.2V12.9H0V31.1z M21.4,17.9
                                                c0-0.4,0.4-0.8,0.8-0.8h2.7c0.4,0,0.8,0.4,0.8,0.8v2.7c0,0.4-0.4,0.8-0.8,0.8h-2.7c-0.4,0-0.8-0.4-0.8-0.8L21.4,17.9z M21.4,26.5
                                                c0-0.4,0.4-0.8,0.8-0.8h2.7c0.4,0,0.8,0.4,0.8,0.8v2.7c0,0.4-0.4,0.8-0.8,0.8h-2.7c-0.4,0-0.8-0.4-0.8-0.8L21.4,26.5z M12.9,17.9
                                                c0-0.4,0.4-0.8,0.8-0.8h2.7c0.4,0,0.8,0.4,0.8,0.8v2.7c0,0.4-0.4,0.8-0.8,0.8h-2.7c-0.4,0-0.8-0.4-0.8-0.8V17.9z M12.9,26.5
                                                c0-0.4,0.4-0.8,0.8-0.8h2.7c0.4,0,0.8,0.4,0.8,0.8v2.7c0,0.4-0.4,0.8-0.8,0.8h-2.7c-0.4,0-0.8-0.4-0.8-0.8V26.5z M4.3,17.9
                                                c0-0.4,0.4-0.8,0.8-0.8h2.7c0.4,0,0.8,0.4,0.8,0.8v2.7c0,0.4-0.4,0.8-0.8,0.8H5.1c-0.4,0-0.8-0.4-0.8-0.8L4.3,17.9z M4.3,26.5
                                                c0-0.4,0.4-0.8,0.8-0.8h2.7c0.4,0,0.8,0.4,0.8,0.8v2.7c0,0.4-0.4,0.8-0.8,0.8H5.1c-0.4,0-0.8-0.4-0.8-0.8L4.3,26.5z M26.8,4.3h-3.2
                                                V1.1c0-0.6-0.5-1.1-1.1-1.1h-2.1c-0.6,0-1.1,0.5-1.1,1.1v3.2h-8.6V1.1c0-0.6-0.5-1.1-1.1-1.1c0,0,0,0,0,0H7.5C6.9,0,6.4,0.5,6.4,1.1
                                                v3.2H3.2C1.4,4.3,0,5.7,0,7.5v3.2h30V7.5C30,5.7,28.6,4.3,26.8,4.3z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className={classes.experienceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan magna sit amet nibh mollis fringilla. Donec luctus, felis quis sollicitudin congue, libero lorem commodo metus, maximus ullamcorper felis turpis et neque. Sed pulvinar at arcu et ultricies. Quisque rhoncus tellus eget ante placerat, sed accumsan tortor dictum.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.secondPartContent}>

                            <div className={classes.profileContent} id="languages">
                                <h2 className={classes.h2}>Langues</h2>
                                <div className={classes.langContent}>
                                    <div className={classes.flag}>
                                        <Image
                                            src="/assets/images/en-flag.jpg" alt=""
                                            width= "225"
                                            height= "135"
                                        />
                                    </div>
                                    <div className={classes.nameFlag}>
                                        <span className={classes.langName}>Anglais</span>
                                        <span className={classes.langLevel}>Niveau avancé</span>
                                    </div>
                                </div>
                                <div className={classes.langContent}>
                                    <div className={classes.flag}>
                                        <Image
                                            src="/assets/images/fr-flag.jpg" alt=""
                                            width= "225"
                                            height= "135"
                                        />
                                    </div>
                                    <div className={classes.nameFlag}>
                                        <span className={classes.langName}>Français</span>
                                        <span className={classes.langLevel}>Bilingue ou natif</span>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.profileContent} id="categories">
                                <h2 className={classes.h2}>Catégorie</h2>
                                <div className={classes.categoryContent}>
                                    <svg className={classes.svgCategoryContent} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 30 30" xmlSpace="preserve">
                                        <path id="Icon_awesome-paint-brush" d="M9.8,18.1c-2.6,0-4.9,1.7-5.7,4.2C4,22.7,3.6,23,3.2,22.9c-0.7,0-2.7-1.6-3.2-2
                                    C0,25.8,2.2,30,7.5,30c4.4,0,7.5-2.6,7.5-7c0-0.2,0-0.4-0.1-0.5L9.8,18.1L9.8,18.1z M26.8,0c-0.9,0-1.7,0.4-2.4,1
                                    c-12,10.7-13.2,11-13.2,14.1c0,0.8,0.2,1.6,0.5,2.3l3.7,3.1c0.4,0.1,0.9,0.2,1.3,0.2c3.6,0,5.7-2.7,12.4-15c0.5-0.8,0.8-1.7,0.8-2.7
                                    C29.9,1.2,28.5-0.1,26.8,0z"/>
                                    </svg>
                                    <ul className={classes.categories}>
                                        <li className={classes.categoryName}>Graphiste</li>
                                        <li className={classes.categoryName}>UI / UX Designer</li>
                                        <li className={classes.categoryName}>Webdesigner</li>
                                    </ul>
                                </div>
                                <div className={classes.categoryContent}>
                                    <svg className={classes.svgCategoryContent} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 30 30" xmlSpace="preserve">
                                        <path id="Icon_awesome-code" d="M13.1,27l-2.9-0.8c-0.3-0.1-0.5-0.4-0.4-0.7c0,0,0,0,0,0l6.4-22c0.1-0.3,0.4-0.5,0.7-0.4
                                    c0,0,0,0,0,0l2.9,0.8c0.3,0.1,0.5,0.4,0.4,0.7c0,0,0,0,0,0l-6.4,22C13.7,26.9,13.4,27.1,13.1,27C13.1,27,13.1,27,13.1,27z M7.7,21.7
                                    l2-2.2c0.2-0.2,0.2-0.6,0-0.8c0,0,0,0,0,0L5.5,15l4.2-3.7c0.2-0.2,0.3-0.6,0.1-0.8c0,0,0,0,0,0l-2-2.2c-0.2-0.2-0.6-0.2-0.8,0
                                    c0,0,0,0,0,0l-6.7,6.3c-0.2,0.2-0.2,0.6,0,0.8c0,0,0,0,0,0l6.7,6.3C7.2,21.9,7.5,21.9,7.7,21.7C7.7,21.7,7.7,21.7,7.7,21.7z
                                     M23.1,21.7l6.7-6.3c0.2-0.2,0.2-0.6,0-0.8c0,0,0,0,0,0l-6.7-6.3c-0.2-0.2-0.6-0.2-0.8,0l-2,2.2c-0.2,0.2-0.2,0.6,0,0.8c0,0,0,0,0,0
                                    l4.2,3.7l-4.2,3.7c-0.2,0.2-0.3,0.6-0.1,0.8c0,0,0,0,0,0l2,2.2C22.5,21.9,22.8,21.9,23.1,21.7L23.1,21.7z"/>
                                    </svg>
                                    <ul className={classes.categories}>
                                        <li className={classes.categoryName}>Intégrateur Web</li>
                                        <li className={classes.categoryName}>Développeur Web Front-end</li>
                                        <li className={classes.categoryName}>Développeur Web Back-end</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.profileContent}>
                                <div className={classes.localisationContent}>
                                    <h2 className={classes.h2}>Localisation</h2>
                                    <span className={classes.cityName}>Angers, France</span>

                                    <div style={{marginTop: 30}}>
                                        <h2 className={classes.h2}>Cherche aussi à</h2>
                                        <ul className={classes.tableCity}>
                                            <li className={classes.cityName}>Tours, France</li>
                                            <li className={classes.cityName}>Paris, France</li>
                                            <li className={classes.cityName}>Evreux, France</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.profileContent} id="formations">
                                <div className={classes.formationContent}>
                                    <h2 className={classes.h2}>Formation en cours</h2>
                                    <div className={classes.content}>
                                        <div className={classes.imgMask}>
                                            <div className={classes.mds}>
                                                <Image
                                                    src="/assets/images/mds-logo.png" alt=""
                                                    width= "300"
                                                    height= "150"
                                                />
                                            </div>
                                        </div>
                                        <div className={classes.formationTitles}>
                                            <span className={classes.formationTitle}>Master UI/UX Design</span>
                                            <span className={classes.formationSubtitle}>MyDigitalSchool - Angers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.profileContent}>
                                <div className={classes.formationContent}>
                                    <h2 className={classes.h2}>Formations terminées</h2>
                                    <div className={classes.content}>
                                        <div className={classes.imgMask}>
                                            <div className={classes.mds}>
                                                <Image
                                                    src="/assets/images/mds-logo.png" alt=""
                                                    width= "300"
                                                    height= "150"
                                                />
                                            </div>
                                        </div>
                                        <div className={classes.formationTitles}>
                                            <span className={classes.formationTitle}>Master UI/UX Design</span>
                                            <span className={classes.formationSubtitle}>MyDigitalSchool - Angers</span>
                                        </div>
                                    </div>
                                    <div className={classes.content}>
                                        <div className={classes.imgMask}>
                                            <div className={classes.openclassroom}>
                                                <Image
                                                    src="/assets/images/openclassroom.jpg" alt=""
                                                    width= "200"
                                                    height= "200"
                                                />
                                            </div>
                                        </div>
                                        <div className={classes.formationTitles}>
                                            <span className={classes.formationTitle}>Master UI/UX Design</span>
                                            <span className={classes.formationSubtitle}>MyDigitalSchool - Angers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.profileContent}>
                                <div className={classes.similaryContent}>
                                    <h2 className={classes.h2}>Profils similaires</h2>
                                    <div className={classes.similaryStudent}>
                                        <div className={classes.imgMask}>
                                            <Image src="/assets/images/research/photo_21.jpg" alt=""
                                                   width= "1080"
                                                   height= "1620"
                                            />
                                        </div>
                                        <div className={classes.studentInfo}>
                                            <span className={classes.studentName}>Ivan Apa</span>
                                            <span className={classes.studentJob}>Intégrateur Web</span>
                                        </div>
                                    </div>
                                    <div className={classes.similaryStudent}>
                                        <div className={classes.imgMask}>
                                            <Image src="/assets/images/research/photo_22.jpg" alt=""
                                                   width= "1080"
                                                   height= "1620"
                                            />
                                        </div>
                                        <div className={classes.studentInfo}>
                                            <span className={classes.studentName}>Leila Bracadabra</span>
                                            <span className={classes.studentJob}>UI / UX Designer</span>
                                        </div>
                                    </div>
                                    <div className={classes.similaryStudent}>
                                        <div className={classes.imgMask}>
                                            <Image src="/assets/images/research/photo_11.jpg" alt=""
                                                   width= "1080"
                                                   height= "1620"
                                            />
                                        </div>
                                        <div className={classes.studentInfo}>
                                            <span className={classes.studentName}>Mathieu Frisku</span>
                                            <span className={classes.studentJob}>Graphiste | Webdesigner</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

ProfilePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    );
};

export default ProfilePage;
