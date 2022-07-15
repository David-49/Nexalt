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
    searchBarForm: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.secondaryBackgroundColor,
        width: 560,
        borderRadius: 15,
        '@media (max-width: 1700px)': {
            width: 448,
        },
    },
    formSearchInput: {
        backgroundColor: colors.secondaryBackgroundColor,
        color: 'rgb( #0F0C29, 50% )',
        fontFamily: 'Poppins, sans-serif',
        fontSize: 17,
        fontWeight: 500,
        padding: 15,
        borderRadius: 10,
        border:' none',
        width: '100%',
    },
    svgSearchInput: {
        width: 20,
        marginRight: 30,
    },
    boardContent: {
        backgroundColor: colors.secondaryBackgroundColor,
        padding: 30,
        margin: 10,
        borderRadius: 20,
        marginTop: 30,
    },
    innerBoardContent: {
        display: 'flex',
        flexDirection: 'row',
    },
    titleBoardContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    svgTitleBoardContent: {
        width: 20,
    },
    h3: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 26,
        fontWeight: 600,
        color: colors.blackText,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 15,
    },
    visibilityButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    weekButton: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
        fontWeight: 500,
        color: colors.secondaryBackgroundColor,
        backgroundColor: colors.primaryBlue,
        paddingTop: 6,
        paddingRight: 15,
        paddingBottom: 6,
        paddingLeft: 15,
        borderRadius: 10,
    },
    monthButton: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
        fontWeight: 500,
        color: colors.blackText,
        backgroundColor: colors.primaryBackgroundColor,
        paddingTop: 6,
        paddingRight: 15,
        paddingBottom: 6,
        paddingLeft: 15,
        borderRadius: 10,
        marginLeft: 15,
    },
    boardList: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 15,
        padding: 0,
        listStyle: 'none',
    },
    purpleLi: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 15,
        paddingRight: 20,
        paddingBottom: 15,
        paddingLeft: 20,
        borderRadius: 10,
        marginTop: 5,
        marginRight: 0,
        marginBottom: 5,
        marginLeft: 0,
        backgroundColor: colors.primaryBackgroundColor,
    },
    whiteLi: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 15,
        paddingRight: 20,
        paddingBottom: 15,
        paddingLeft: 20,
        borderRadius: 10,
        marginTop: 5,
        marginRight: 0,
        marginBottom: 5,
        marginLeft: 0,
        backgroundColor: colors.secondaryBackgroundColor,
    },
    contentOne: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    svgContentOne: {
        width: 20,
    },
    titleContentOne: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.blackText,
        marginLeft: 20,
    },
    buttonPremium: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.primaryBlue,
    },
    svgButtonPremium: {
        width: 20,
        fill: colors.primaryBlue,
        marginRight: 10,
    },
    contentGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    visibilityContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 25,
        paddingRight: 30,
        paddingBottom: 25,
        paddingLeft: 30,
        backgroundColor: colors.primaryBackgroundColor,
        borderRadius: 15,
        width: 360,
        '@media (max-width: 1700px)': {
            width: 233.6,
        },
    },
    visibilityInnerContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    svgVisibilityInnerContent: {
        width: 20,
        fill: colors.secondaryBlue,
    },
    h4: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 24,
        fontWeight: 700,
        color: colors.primaryBlue,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 15,

    },
    number: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 40,
        fontWeight: 700,
        color: colors.primaryBlue,
    },
    description: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 400,
        color: colors.blackText,
    },
    graph: {
        marginTop: 15,
    },
    profilesViewed: {
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridGap: 30,
        gridAutoRows: 'minmax(100px, auto)',
        width: '100%',
        marginTop: 20,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        padding: 0,
        '@media (max-width: 1700px)': {
            gridTemplateColumns: 'repeat(4, 1fr)',
        },
    },
    profilesViewedLi: {
        transform: 'scale(1)',
        transition: 'transform .3s',
        listStyle: 'none',
        ':hover': {
            transform: 'scale(1.02)',
            transition: 'transform .3s',
        }
    },
    linkProfilesViewed: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        fontSize: 16,
        fontWeight: 700,
        color: colors.blackText,
        textAlign: "center",
        span: {
            marginTop: 15,
        }
    },
    imgMask: {
        position: "relative",
        width: 112,
        height: 112,
        overflow: 'hidden',
        borderRadius: 20,
    },
    profileImg: {
        position: "absolute",
    },
    p13: {
        top: 0,
    },
    p14: {
        top: -30,
    },
    p15: {
        top: -10,
    },
    p16: {
        top: -10,
    },
    p17: {
        top: -10,
    },
    p18: {
        top: -25,
    },
    p19: {
        top: -30,
    },
    p20: {
        top: -30,
    },

}));

const Dashboard: HomePageWithLayout = () => {
    const {classes} = useStyles();

    // @ts-ignore
    // @ts-ignore
    return (
        <Container fluid className={classes.containerPage}>
        <section className={classes.board}>
            <div className={classes.boardInner}>
                <h1 className={classes.title}>Tableau de bord</h1>
                <ul className={classes.boardMenu}>
                    <li className={classes.liActiveBoardMenu}>
                        <Link href="#notifications">
                            <a className={classes.linkActiveBoardMenu}>
                                <svg className={classes.svgActiveLinkBoardMenu} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 23.3 24.7"
                                     xmlSpace="preserve">
                                <path d="M22.2,19.1H1.1c-0.5,0-0.9-0.3-1.1-0.8c-0.1-0.5,0.1-1,0.5-1.2c0,0,3-2.1,3-9.2C3.6,3.4,7.3-0.1,11.7,0c0.1,0,0.1,0,0.2,0
                                    c4.3,0,7.9,3.5,7.9,7.8c0,0,0,0,0,0c0,7.1,3,9.2,3,9.2c0.4,0.3,0.6,0.8,0.4,1.2C23.1,18.8,22.6,19.1,22.2,19.1z M3.5,16.9h16.2
                                    c-1.1-1.7-2.2-4.5-2.2-9c-0.1-3.2-2.7-5.7-5.9-5.7c-3.2,0-5.9,2.5-5.9,5.7C5.7,12.4,4.6,15.2,3.5,16.9z"/>
                                                <path d="M11.6,24.7c-0.6,0-1.2-0.2-1.7-0.5C9.4,24,9,23.5,8.7,23c-0.3-0.5-0.1-1.2,0.4-1.5c0.5-0.3,1.2-0.1,1.5,0.4
                                    c0.1,0.2,0.2,0.3,0.4,0.4c0.3,0.2,0.6,0.2,0.9,0.1c0.3-0.1,0.5-0.3,0.7-0.5c0.3-0.5,1-0.7,1.5-0.4c0.5,0.3,0.7,1,0.4,1.5
                                    c-0.4,0.8-1.2,1.3-2,1.6C12.2,24.7,11.9,24.7,11.6,24.7z"/>
                                </svg>
                                Dernières notification
                            </a>
                        </Link>
                    </li>
                    <li className={classes.liBoardMenu}>
                        <Link href="#visibility">
                            <a className={classes.linkBoardMenu}>
                                <svg className={classes.svgLinkBoardMenu} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 23.6 23.1"
                                     xmlSpace="preserve">
                                <path d="M11.8,20.6c-7.4,0-11.5-8.1-11.7-8.4c-0.1-0.2-0.1-0.5,0-0.7C0.3,11.1,4.4,3,11.8,3s11.5,8.1,11.7,8.4
                                    c0.1,0.2,0.1,0.5,0,0.7C23.3,12.5,19.2,20.6,11.8,20.6z M1.7,11.8C2.6,13.3,6.2,19,11.8,19c5.6,0,9.2-5.7,10.1-7.2
                                    c-0.9-1.5-4.5-7.2-10.1-7.2C6.2,4.6,2.6,10.3,1.7,11.8z"/>
                                    <path d="M11.8,15.6c-2.1,0-3.8-1.7-3.8-3.8C8,9.7,9.7,8,11.8,8s3.8,1.7,3.8,3.8C15.6,13.9,13.9,15.6,11.8,15.6z M11.8,9.6
                                    c-1.2,0-2.2,1-2.2,2.2s1,2.2,2.2,2.2s2.2-1,2.2-2.2S13,9.6,11.8,9.6z"/>
                                </svg>
                                Visibilité
                            </a>
                        </Link>
                    </li>
                    <li className={classes.liBoardMenu}>
                        <Link href="#statistics">
                            <a className={classes.linkBoardMenu}>
                                <svg className={classes.svgLinkBoardMenu} version="1.1" id="Icon_ionic-ios-stats" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink"
                                     x="0px" y="0px" viewBox="0 0 20 21.8"
                                     xmlSpace="preserve">
                                <path id="Tracé_49" d="M5.9,21.8h2.7c0.3,0,0.5-0.2,0.5-0.5V0.5C9.1,0.2,8.9,0,8.6,0H5.9C5.7,0,5.5,0.2,5.5,0.5v20.9
                                    C5.5,21.6,5.7,21.8,5.9,21.8z"/>
                                                <path id="Tracé_50" d="M0.5,21.8h2.7c0.2,0,0.5-0.2,0.5-0.5v-8.1c0-0.2-0.2-0.5-0.5-0.5H0.5C0.2,12.8,0,13,0,13.2v8.1
                                    C0,21.6,0.2,21.8,0.5,21.8C0.5,21.8,0.5,21.8,0.5,21.8z"/>
                                                <path id="Tracé_51" d="M11.4,21.8h2.7c0.3,0,0.5-0.2,0.5-0.5c0,0,0,0,0,0V9.6c0-0.3-0.2-0.5-0.5-0.5c0,0,0,0,0,0h-2.7
                                    c-0.3,0-0.5,0.2-0.5,0.5c0,0,0,0,0,0v11.7C10.9,21.6,11.1,21.8,11.4,21.8C11.4,21.8,11.4,21.8,11.4,21.8z"/>
                                                <path id="Tracé_52" d="M16.4,4.2v17.2c0,0.3,0.2,0.5,0.5,0.5c0,0,0,0,0,0h2.7c0.3,0,0.5-0.2,0.5-0.5c0,0,0,0,0,0V4.2
                                    c0-0.3-0.2-0.5-0.5-0.5c0,0,0,0,0,0h-2.7C16.6,3.7,16.4,4,16.4,4.2C16.4,4.2,16.4,4.2,16.4,4.2z"/>
                                </svg>
                                Statistiques des 7 derniers jours
                            </a>
                        </Link>
                    </li>
                    <li className={classes.liBoardMenu}>
                        <Link href="#keywords">
                            <a className={classes.linkBoardMenu}>
                                <svg className={classes.svgLinkBoardMenu} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 21.8 21.8"
                                     xmlSpace="preserve">
                                <path id="Icon_awesome-key" d="M21.8,7.5c0,4.1-3.4,7.5-7.5,7.5c-0.5,0-0.9,0-1.4-0.1l-1,1.2c-0.2,0.2-0.5,0.3-0.8,0.3H9.5v1.7
                                    c0,0.6-0.5,1-1,1l0,0H6.8v1.7c0,0.6-0.5,1-1,1c0,0,0,0,0,0H1c-0.6,0-1-0.5-1-1v-3.3c0-0.3,0.1-0.5,0.3-0.7l6.9-6.9
                                    C5.9,5.9,8,1.7,12,0.4s8.2,0.8,9.5,4.8C21.7,5.9,21.8,6.7,21.8,7.5z M14.3,5.5c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2l0,0
                                    C15.2,3.4,14.3,4.3,14.3,5.5C14.3,5.5,14.3,5.5,14.3,5.5L14.3,5.5z"/>
                                </svg>
                                Mots-clés utilisés pour vous trouver
                            </a>
                        </Link>
                    </li>
                    <li className={classes.liBoardMenu}>
                        <Link href="#views">
                            <a className={classes.linkBoardMenu}>
                                <svg className={classes.svgLinkBoardMenu} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 26 26"
                                     xmlSpace="preserve">
                                <path d="M13,2c-3,0-5.5,2.5-5.5,5.5S10,13,13,13s5.5-2.5,5.5-5.5S16,2,13,2 M13,15.8c-3.7,0-11,1.8-11,5.5V24h22v-2.8
                                    C24,17.6,16.7,15.8,13,15.8 M13,0c4.1,0,7.5,3.4,7.5,7.5c0,2.9-1.6,5.3-4,6.6c1.4,0.3,2.8,0.7,4.1,1.2c1.5,0.6,2.7,1.3,3.5,2.1
                                    c1.5,1.4,1.8,2.9,1.8,3.9V26H0v-4.8c0-1,0.3-2.5,1.8-3.9c0.9-0.8,2.1-1.5,3.5-2.1c1.2-0.5,2.7-0.9,4.1-1.2c-2.4-1.3-4-3.8-4-6.6
                                    C5.5,3.4,8.9,0,13,0z"/>
                                </svg>
                                Personnes qui ont vus votre profil
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>

        <section className={classes.boardResult}>
            <div className={classes.innerBoardResult}>
                <div className={classes.topBoard}>
                    <h2 className={classes.h2}>Bonjour Bastien !</h2>
                    <form className={classes.searchBarForm}>
                        <div className={classes.searchBar}>
                            <input className={classes.formSearchInput} type="text" placeholder="Rechercher un métier, une personne, etc..."/>
                                <svg className={classes.svgSearchInput} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 22.4 22.4"
                                     xmlSpace="preserve">
                                <g id="Loupe" transform="translate(1 1)">
                                    <path d="M21.1,19.7l-4.2-4.2c1.4-1.7,2.3-4,2.3-6.4C19.2,3.5,14.7-1,9.1-1C3.5-1-1,3.5-1,9.1c0,5.6,4.5,10.1,10.1,10.1
                                        c2.4,0,4.6-0.9,6.4-2.3l4.2,4.2c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C21.5,20.7,21.5,20.1,21.1,19.7z M1,9.1
                                        C1,4.7,4.7,1,9.1,1s8.1,3.6,8.1,8.1s-3.6,8.1-8.1,8.1S1,13.6,1,9.1z"/>
                                </g>
                                </svg>
                        </div>
                    </form>
                </div>
                <div className={classes.boardContent} id="notifications">
                    <div className={classes.innerBoardContent}>
                        <div className={classes.titleBoardContent}>
                            <svg className={classes.svgTitleBoardContent} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 23.3 24.7"
                                 xmlSpace="preserve">
                            <path d="M22.2,19.1H1.1c-0.5,0-0.9-0.3-1.1-0.8c-0.1-0.5,0.1-1,0.5-1.2c0,0,3-2.1,3-9.2C3.6,3.4,7.3-0.1,11.7,0c0.1,0,0.1,0,0.2,0
                                c4.3,0,7.9,3.5,7.9,7.8c0,0,0,0,0,0c0,7.1,3,9.2,3,9.2c0.4,0.3,0.6,0.8,0.4,1.2C23.1,18.8,22.6,19.1,22.2,19.1z M3.5,16.9h16.2
                                c-1.1-1.7-2.2-4.5-2.2-9c-0.1-3.2-2.7-5.7-5.9-5.7c-3.2,0-5.9,2.5-5.9,5.7C5.7,12.4,4.6,15.2,3.5,16.9z"/>
                                            <path d="M11.6,24.7c-0.6,0-1.2-0.2-1.7-0.5C9.4,24,9,23.5,8.7,23c-0.3-0.5-0.1-1.2,0.4-1.5c0.5-0.3,1.2-0.1,1.5,0.4
                                c0.1,0.2,0.2,0.3,0.4,0.4c0.3,0.2,0.6,0.2,0.9,0.1c0.3-0.1,0.5-0.3,0.7-0.5c0.3-0.5,1-0.7,1.5-0.4c0.5,0.3,0.7,1,0.4,1.5
                                c-0.4,0.8-1.2,1.3-2,1.6C12.2,24.7,11.9,24.7,11.6,24.7z"/>
                            </svg>
                            <h3 className={classes.h3}>Dernière notifications</h3>
                        </div>
                    </div>
                    <ul className={classes.boardList}>
                        <li className={classes.purpleLi}>
                            <div className={classes.contentOne}>
                                <svg className={classes.svgContentOne} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 23.6 23.1"
                                     xmlSpace="preserve">
                                <path d="M11.8,20.6c-7.4,0-11.5-8.1-11.7-8.4c-0.1-0.2-0.1-0.5,0-0.7C0.3,11.1,4.4,3,11.8,3s11.5,8.1,11.7,8.4
                                    c0.1,0.2,0.1,0.5,0,0.7C23.3,12.5,19.2,20.6,11.8,20.6z M1.7,11.8C2.6,13.3,6.2,19,11.8,19c5.6,0,9.2-5.7,10.1-7.2
                                    c-0.9-1.5-4.5-7.2-10.1-7.2C6.2,4.6,2.6,10.3,1.7,11.8z"/>
                                                <path d="M11.8,15.6c-2.1,0-3.8-1.7-3.8-3.8C8,9.7,9.7,8,11.8,8s3.8,1.7,3.8,3.8C15.6,13.9,13.9,15.6,11.8,15.6z M11.8,9.6
                                    c-1.2,0-2.2,1-2.2,2.2s1,2.2,2.2,2.2s2.2-1,2.2-2.2S13,9.6,11.8,9.6z"/>
                                </svg>
                                <span className={classes.titleContentOne}>Votre profil à été vu par une personne</span>
                            </div>
                            <Link href="">
                                <a  className={classes.buttonPremium}>
                                    <svg className={classes.svgButtonPremium} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 29.5 30"
                                         xmlSpace="preserve">
                                    <g id="Logo_nexalt" transform="translate(-22.933 -5.754)">
                                        <g id="Calque_2_00000018920333840229996180000014502121412032225202_"
                                           transform="translate(22.933 5.754)">
                                            <path id="Tracé_16" d="M29.5,17v-3.2c0-0.9-0.1-1.9-0.2-2.8v0c-0.5-4.2-3.2-7.8-7-9.5h0c-0.6-0.3-1.2-0.5-1.9-0.7
                                                C18.7,0.2,16.8,0,15,0c-1.7,0-3.4,0.2-5,0.8C9,1.1,8,1.5,7.2,2C5.8,2.7,4.5,3.8,3.5,5C1.1,7.8-0.1,11.4,0,15
                                                c-0.1,3.8,1.4,7.5,4,10.2c2.2,2.2,5,3.7,8,4.3c1.7,0.4,3.3,0.6,5,0.6c1.8,0,3.6-0.2,5.4-0.5c1.9-0.3,3.7-1.1,5.4-2.2v-7.7h-0.3
                                                c-2.3,2.3-5.9,3.5-10,3.5c-1.2,0-2.4-0.1-3.6-0.4c0,0,0,0,0,0s0,0-0.1,0c-0.9-0.2-1.7-0.5-2.5-1.1c0,0-0.1,0-0.1,0
                                                c-0.1,0-0.1-0.1-0.2-0.1L11,21.3l0,0c-0.1-0.1-0.2-0.1-0.2-0.2c-0.9-0.7-1.7-1.6-2.1-2.7l0,0c0-0.1-0.1-0.1-0.1-0.2
                                                c0,0,0-0.1-0.1-0.1c0,0,0,0,0-0.1c-0.5-1.1-0.7-2.3-0.7-3.6C7.6,9.8,11,6,15.2,6s7.6,3.7,7.6,8.4c0,0.9-0.1,1.8-0.4,2.6L29.5,17z"
                                            />
                                            <circle id="Ellipse_4" cx="15.4" cy="14.6" r="3"/>
                                        </g>
                                    </g>
                                    </svg>
                                    Découvrez qui à vu votre profil avec Nexalt Pro
                                </a>
                            </Link>
                        </li>
                        <li className={classes.whiteLi}>
                            <div className={classes.contentOne}>
                                <svg className={classes.svgContentOne} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 22 22"
                                     xmlSpace="preserve">
                                <g id="Msg" transform="translate(-51 -290)">
                                    <path d="M52,312c-0.1,0-0.3,0-0.4-0.1c-0.4-0.2-0.6-0.5-0.6-0.9v-17.8c0-1.8,1.4-3.2,3.2-3.2h15.6c1.8,0,3.2,1.4,3.2,3.2v11.1
                                        c0,1.8-1.4,3.2-3.2,3.2H56.9l-4.2,4.2C52.5,311.9,52.3,312,52,312z M54.2,292c-0.7,0-1.2,0.5-1.2,1.2v15.4l2.7-2.7
                                        c0.2-0.2,0.4-0.3,0.7-0.3h13.3c0.7,0,1.2-0.5,1.2-1.2v-11.1c0-0.7-0.5-1.2-1.2-1.2H54.2z"/>
                                </g>
                                </svg>
                                <span className={classes.titleContentOne}>Vous avez reçu un nouveau message de Brio Academy</span>
                            </div>
                        </li>
                        <li className={classes.purpleLi}>
                            <div className={classes.contentOne}>
                                <svg className={classes.svgContentOne} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 22 22"
                                     xmlSpace="preserve">
                                <g id="Msg" transform="translate(-51 -290)">
                                    <path d="M52,312c-0.1,0-0.3,0-0.4-0.1c-0.4-0.2-0.6-0.5-0.6-0.9v-17.8c0-1.8,1.4-3.2,3.2-3.2h15.6c1.8,0,3.2,1.4,3.2,3.2v11.1
                                        c0,1.8-1.4,3.2-3.2,3.2H56.9l-4.2,4.2C52.5,311.9,52.3,312,52,312z M54.2,292c-0.7,0-1.2,0.5-1.2,1.2v15.4l2.7-2.7
                                        c0.2-0.2,0.4-0.3,0.7-0.3h13.3c0.7,0,1.2-0.5,1.2-1.2v-11.1c0-0.7-0.5-1.2-1.2-1.2H54.2z"/>
                                </g>
                                </svg>
                                <span className={classes.titleContentOne}>Vous avez reçu un message de Trois Double Vé</span>
                            </div>
                        </li>
                        <li className={classes.whiteLi}>
                            <div className={classes.contentOne}>
                                <svg className={classes.svgContentOne} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 22.4 22.4"
                                     xmlSpace="preserve">
                                <g id="Loupe" transform="translate(1 1)">
                                    <path d="M21.1,19.7l-4.2-4.2c1.4-1.7,2.3-4,2.3-6.4C19.2,3.5,14.7-1,9.1-1C3.5-1-1,3.5-1,9.1c0,5.6,4.5,10.1,10.1,10.1
                                        c2.4,0,4.6-0.9,6.4-2.3l4.2,4.2c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C21.5,20.7,21.5,20.1,21.1,19.7z M1,9.1
                                        C1,4.7,4.7,1,9.1,1s8.1,3.6,8.1,8.1s-3.6,8.1-8.1,8.1S1,13.6,1,9.1z"/>
                                </g>
                                </svg>
                                <span className={classes.titleContentOne}>Votre profil à été vu par deux personnes</span>
                            </div>
                            <Link href="">
                                <a className={classes.buttonPremium}>
                                    <svg className={classes.svgButtonPremium}  version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 29.5 30"
                                         xmlSpace="preserve">
                                    <g id="Logo_nexalt" transform="translate(-22.933 -5.754)">
                                        <g id="Calque_2_00000018920333840229996180000014502121412032225202_"
                                           transform="translate(22.933 5.754)">
                                            <path id="Tracé_16" d="M29.5,17v-3.2c0-0.9-0.1-1.9-0.2-2.8v0c-0.5-4.2-3.2-7.8-7-9.5h0c-0.6-0.3-1.2-0.5-1.9-0.7
                                                C18.7,0.2,16.8,0,15,0c-1.7,0-3.4,0.2-5,0.8C9,1.1,8,1.5,7.2,2C5.8,2.7,4.5,3.8,3.5,5C1.1,7.8-0.1,11.4,0,15
                                                c-0.1,3.8,1.4,7.5,4,10.2c2.2,2.2,5,3.7,8,4.3c1.7,0.4,3.3,0.6,5,0.6c1.8,0,3.6-0.2,5.4-0.5c1.9-0.3,3.7-1.1,5.4-2.2v-7.7h-0.3
                                                c-2.3,2.3-5.9,3.5-10,3.5c-1.2,0-2.4-0.1-3.6-0.4c0,0,0,0,0,0s0,0-0.1,0c-0.9-0.2-1.7-0.5-2.5-1.1c0,0-0.1,0-0.1,0
                                                c-0.1,0-0.1-0.1-0.2-0.1L11,21.3l0,0c-0.1-0.1-0.2-0.1-0.2-0.2c-0.9-0.7-1.7-1.6-2.1-2.7l0,0c0-0.1-0.1-0.1-0.1-0.2
                                                c0,0,0-0.1-0.1-0.1c0,0,0,0,0-0.1c-0.5-1.1-0.7-2.3-0.7-3.6C7.6,9.8,11,6,15.2,6s7.6,3.7,7.6,8.4c0,0.9-0.1,1.8-0.4,2.6L29.5,17z"
                                            />
                                            <circle id="Ellipse_4" cx="15.4" cy="14.6" r="3"/>
                                        </g>
                                    </g>
                                    </svg>
                                    Découvrez qui à vu votre profil avec Nexalt Pro
                                </a>
                            </Link>
                        </li>
                        <li className={classes.purpleLi}>
                            <div className={classes.contentOne}>
                                <svg className={classes.svgContentOne} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 23.6 23.1"
                                     xmlSpace="preserve">
                                <path d="M11.8,20.6c-7.4,0-11.5-8.1-11.7-8.4c-0.1-0.2-0.1-0.5,0-0.7C0.3,11.1,4.4,3,11.8,3s11.5,8.1,11.7,8.4
                                    c0.1,0.2,0.1,0.5,0,0.7C23.3,12.5,19.2,20.6,11.8,20.6z M1.7,11.8C2.6,13.3,6.2,19,11.8,19c5.6,0,9.2-5.7,10.1-7.2
                                    c-0.9-1.5-4.5-7.2-10.1-7.2C6.2,4.6,2.6,10.3,1.7,11.8z"/>
                                                <path d="M11.8,15.6c-2.1,0-3.8-1.7-3.8-3.8C8,9.7,9.7,8,11.8,8s3.8,1.7,3.8,3.8C15.6,13.9,13.9,15.6,11.8,15.6z M11.8,9.6
                                    c-1.2,0-2.2,1-2.2,2.2s1,2.2,2.2,2.2s2.2-1,2.2-2.2S13,9.6,11.8,9.6z"/>
                                </svg>
                                <span className={classes.titleContentOne}>Votre profil est apparu 54 fois dans les recherches, continuez comme ça !</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={classes.boardContent} id="visibility">
                    <div className={classes.innerBoardContent}>
                        <div className={classes.titleBoardContent}>
                            <svg className={classes.svgTitleBoardContent} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 23.6 23.1"
                                 xmlSpace="preserve">
                            <path d="M11.8,20.6c-7.4,0-11.5-8.1-11.7-8.4c-0.1-0.2-0.1-0.5,0-0.7C0.3,11.1,4.4,3,11.8,3s11.5,8.1,11.7,8.4
                                c0.1,0.2,0.1,0.5,0,0.7C23.3,12.5,19.2,20.6,11.8,20.6z M1.7,11.8C2.6,13.3,6.2,19,11.8,19c5.6,0,9.2-5.7,10.1-7.2
                                c-0.9-1.5-4.5-7.2-10.1-7.2C6.2,4.6,2.6,10.3,1.7,11.8z"/>
                                            <path d="M11.8,15.6c-2.1,0-3.8-1.7-3.8-3.8C8,9.7,9.7,8,11.8,8s3.8,1.7,3.8,3.8C15.6,13.9,13.9,15.6,11.8,15.6z M11.8,9.6
                                c-1.2,0-2.2,1-2.2,2.2s1,2.2,2.2,2.2s2.2-1,2.2-2.2S13,9.6,11.8,9.6z"/>
                            </svg>
                            <h3 className={classes.h3}>Visibilité</h3>
                        </div>
                        <div className={classes.visibilityButton}>
                            <span className={classes.weekButton}>Semaine</span>
                            <span className={classes.monthButton}>Mois</span>
                        </div>
                    </div>
                    <div className={classes.contentGroup}>
                        <div className={classes.visibilityContent}>
                            <div className={classes.visibilityInnerContent}>
                                <svg className={classes.svgVisibilityInnerContent} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 26 26.1"
                                     xmlSpace="preserve">
                                <g id="Fav" transform="translate(-49 -345.531)">
                                    <path d="M62,370c-0.3,0-0.5-0.1-0.7-0.3l-10.2-10.2c-1.4-1.4-2.1-3.2-2.1-5.2c0-2,0.8-3.8,2.1-5.2c2.9-2.9,7.5-2.9,10.3,0l0.5,0.5
                                        l0.5-0.5c0,0,0,0,0,0c2.9-2.9,7.5-2.9,10.3,0c0,0,0,0,0.1,0.1c1.4,1.4,2.1,3.2,2.1,5.1c0,2-0.8,3.8-2.1,5.2l-10.1,10.1
                                        C62.5,369.9,62.3,370,62,370z M56.3,349.1c-1.4,0-2.7,0.5-3.8,1.6c-1,1-1.6,2.3-1.6,3.8c0,1.4,0.6,2.8,1.6,3.8l9.4,9.4l9.4-9.4
                                        c2.1-2.1,2.1-5.4,0-7.5c0,0,0,0,0,0c-2.1-2-5.4-2-7.5,0c0,0,0,0,0,0l-1.2,1.2c-0.4,0.4-1,0.4-1.4,0l-1.2-1.2
                                        C59,349.6,57.7,349.1,56.3,349.1z M73.1,349.9L73.1,349.9L73.1,349.9z"/>
                                </g>
                                </svg>
                                <h4 className={classes.h4}>Favoris</h4>
                            </div>
                            <span className={classes.number}>13</span>
                            <p className={classes.description}>C'est le nombre de personnes qui ont ajouté votre profil à
                                leur favoris</p>
                        </div>
                        <div className={classes.visibilityContent}>
                            <div className={classes.visibilityInnerContent}>
                                <svg className={classes.svgVisibilityInnerContent} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 22.4 22.4"
                                     xmlSpace="preserve">
                                <g id="Loupe" transform="translate(1 1)">
                                    <path d="M21.1,19.7l-4.2-4.2c1.4-1.7,2.3-4,2.3-6.4C19.2,3.5,14.7-1,9.1-1C3.5-1-1,3.5-1,9.1c0,5.6,4.5,10.1,10.1,10.1
                                        c2.4,0,4.6-0.9,6.4-2.3l4.2,4.2c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C21.5,20.7,21.5,20.1,21.1,19.7z M1,9.1
                                        C1,4.7,4.7,1,9.1,1s8.1,3.6,8.1,8.1s-3.6,8.1-8.1,8.1S1,13.6,1,9.1z"/>
                                </g>
                                </svg>
                                <h4 className={classes.h4}>Apparitions</h4>
                            </div>
                            <span className={classes.number}>248</span>
                            <p className={classes.description}>C'est le nombre d'apparitions de votre profil sur notre
                                moteur de recherche</p>
                        </div>
                        <div className={classes.visibilityContent}>
                            <div className={classes.visibilityInnerContent}>
                                <svg className={classes.svgVisibilityInnerContent} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 23.6 23.1"
                                     xmlSpace="preserve">
                                <path d="M11.8,20.6c-7.4,0-11.5-8.1-11.7-8.4c-0.1-0.2-0.1-0.5,0-0.7C0.3,11.1,4.4,3,11.8,3s11.5,8.1,11.7,8.4
                                    c0.1,0.2,0.1,0.5,0,0.7C23.3,12.5,19.2,20.6,11.8,20.6z M1.7,11.8C2.6,13.3,6.2,19,11.8,19c5.6,0,9.2-5.7,10.1-7.2
                                    c-0.9-1.5-4.5-7.2-10.1-7.2C6.2,4.6,2.6,10.3,1.7,11.8z"/>
                                                <path d="M11.8,15.6c-2.1,0-3.8-1.7-3.8-3.8C8,9.7,9.7,8,11.8,8s3.8,1.7,3.8,3.8C15.6,13.9,13.9,15.6,11.8,15.6z M11.8,9.6
                                    c-1.2,0-2.2,1-2.2,2.2s1,2.2,2.2,2.2s2.2-1,2.2-2.2S13,9.6,11.8,9.6z"/>
                                </svg>
                                <h4 className={classes.h4}>Visionnages</h4>
                            </div>
                            <span className={classes.number}>152</span>
                            <p className={classes.description}>C'est le nombre de personnes qui ont vu votre profil</p>
                        </div>
                    </div>
                </div>
                <div className={classes.boardContent} id="statistics">
                    <div className={classes.innerBoardContent}>
                        <div className={classes.titleBoardContent}>
                            <svg className={classes.svgTitleBoardContent} version="1.1" id="Icon_ionic-ios-stats" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                 x="0px" y="0px" viewBox="0 0 20 21.8"
                                 xmlSpace="preserve">
                                <path id="Tracé_49" d="M5.9,21.8h2.7c0.3,0,0.5-0.2,0.5-0.5V0.5C9.1,0.2,8.9,0,8.6,0H5.9C5.7,0,5.5,0.2,5.5,0.5v20.9
                                C5.5,21.6,5.7,21.8,5.9,21.8z"/>
                                            <path id="Tracé_50" d="M0.5,21.8h2.7c0.2,0,0.5-0.2,0.5-0.5v-8.1c0-0.2-0.2-0.5-0.5-0.5H0.5C0.2,12.8,0,13,0,13.2v8.1
                                C0,21.6,0.2,21.8,0.5,21.8C0.5,21.8,0.5,21.8,0.5,21.8z"/>
                                            <path id="Tracé_51" d="M11.4,21.8h2.7c0.3,0,0.5-0.2,0.5-0.5c0,0,0,0,0,0V9.6c0-0.3-0.2-0.5-0.5-0.5c0,0,0,0,0,0h-2.7
                                c-0.3,0-0.5,0.2-0.5,0.5c0,0,0,0,0,0v11.7C10.9,21.6,11.1,21.8,11.4,21.8C11.4,21.8,11.4,21.8,11.4,21.8z"/>
                                            <path id="Tracé_52" d="M16.4,4.2v17.2c0,0.3,0.2,0.5,0.5,0.5c0,0,0,0,0,0h2.7c0.3,0,0.5-0.2,0.5-0.5c0,0,0,0,0,0V4.2
                                c0-0.3-0.2-0.5-0.5-0.5c0,0,0,0,0,0h-2.7C16.6,3.7,16.4,4,16.4,4.2C16.4,4.2,16.4,4.2,16.4,4.2z"/>
                            </svg>
                            <h3 className={classes.h3}>Statistiques des 7 derniers jours</h3>
                        </div>
                    </div>
                    <div className={classes.graph}>
                        <Image
                            src="/assets/images/graph.jpg" alt=''
                            width='1317'
                            height='410'
                        />
                    </div>
                </div>
                <div className={classes.boardContent} id="keywords">
                    <div className={classes.innerBoardContent}>
                        <div className={classes.titleBoardContent}>
                            <svg className={classes.svgTitleBoardContent} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 21.8 21.8"
                                 xmlSpace="preserve">
                            <path id="Icon_awesome-key" d="M21.8,7.5c0,4.1-3.4,7.5-7.5,7.5c-0.5,0-0.9,0-1.4-0.1l-1,1.2c-0.2,0.2-0.5,0.3-0.8,0.3H9.5v1.7
                                c0,0.6-0.5,1-1,1l0,0H6.8v1.7c0,0.6-0.5,1-1,1c0,0,0,0,0,0H1c-0.6,0-1-0.5-1-1v-3.3c0-0.3,0.1-0.5,0.3-0.7l6.9-6.9
                                C5.9,5.9,8,1.7,12,0.4s8.2,0.8,9.5,4.8C21.7,5.9,21.8,6.7,21.8,7.5z M14.3,5.5c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2l0,0
                                C15.2,3.4,14.3,4.3,14.3,5.5C14.3,5.5,14.3,5.5,14.3,5.5L14.3,5.5z"/>
                            </svg>
                            <h3 className={classes.h3}>Mots-clés utilisés pour vous trouver</h3>
                        </div>
                    </div>
                    <ul className={classes.boardList}>
                        <li className={classes.purpleLi}>
                            <div className={classes.contentOne}>
                                <svg className={classes.svgContentOne} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 21.8 21.8"
                                     xmlSpace="preserve">
                                <path id="Icon_awesome-key" d="M21.8,7.5c0,4.1-3.4,7.5-7.5,7.5c-0.5,0-0.9,0-1.4-0.1l-1,1.2c-0.2,0.2-0.5,0.3-0.8,0.3H9.5v1.7
                                    c0,0.6-0.5,1-1,1l0,0H6.8v1.7c0,0.6-0.5,1-1,1c0,0,0,0,0,0H1c-0.6,0-1-0.5-1-1v-3.3c0-0.3,0.1-0.5,0.3-0.7l6.9-6.9
                                    C5.9,5.9,8,1.7,12,0.4s8.2,0.8,9.5,4.8C21.7,5.9,21.8,6.7,21.8,7.5z M14.3,5.5c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2l0,0
                                    C15.2,3.4,14.3,4.3,14.3,5.5C14.3,5.5,14.3,5.5,14.3,5.5L14.3,5.5z"/>
                                </svg>
                                <span className={classes.titleContentOne}>Webdesigner</span>
                            </div>
                        </li>
                        <li className={classes.whiteLi}>
                            <div className={classes.contentOne}>
                                <svg className={classes.svgContentOne} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 21.8 21.8"
                                     xmlSpace="preserve">
                                <path id="Icon_awesome-key" d="M21.8,7.5c0,4.1-3.4,7.5-7.5,7.5c-0.5,0-0.9,0-1.4-0.1l-1,1.2c-0.2,0.2-0.5,0.3-0.8,0.3H9.5v1.7
                                    c0,0.6-0.5,1-1,1l0,0H6.8v1.7c0,0.6-0.5,1-1,1c0,0,0,0,0,0H1c-0.6,0-1-0.5-1-1v-3.3c0-0.3,0.1-0.5,0.3-0.7l6.9-6.9
                                    C5.9,5.9,8,1.7,12,0.4s8.2,0.8,9.5,4.8C21.7,5.9,21.8,6.7,21.8,7.5z M14.3,5.5c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2l0,0
                                    C15.2,3.4,14.3,4.3,14.3,5.5C14.3,5.5,14.3,5.5,14.3,5.5L14.3,5.5z"/>
                                </svg>
                                <span className={classes.titleContentOne}>Intégrateur</span>
                            </div>
                        </li>
                        <li className={classes.purpleLi}>
                            <div className={classes.contentOne}>
                                <svg className={classes.svgContentOne} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 21.8 21.8"
                                     xmlSpace="preserve">
                                <path id="Icon_awesome-key" d="M21.8,7.5c0,4.1-3.4,7.5-7.5,7.5c-0.5,0-0.9,0-1.4-0.1l-1,1.2c-0.2,0.2-0.5,0.3-0.8,0.3H9.5v1.7
                                    c0,0.6-0.5,1-1,1l0,0H6.8v1.7c0,0.6-0.5,1-1,1c0,0,0,0,0,0H1c-0.6,0-1-0.5-1-1v-3.3c0-0.3,0.1-0.5,0.3-0.7l6.9-6.9
                                    C5.9,5.9,8,1.7,12,0.4s8.2,0.8,9.5,4.8C21.7,5.9,21.8,6.7,21.8,7.5z M14.3,5.5c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2l0,0
                                    C15.2,3.4,14.3,4.3,14.3,5.5C14.3,5.5,14.3,5.5,14.3,5.5L14.3,5.5z"/>
                                </svg>
                                <span className={classes.titleContentOne}>Développeur</span>
                            </div>
                        </li>
                        <li className={classes.whiteLi}>
                            <div className={classes.contentOne}>
                                <svg className={classes.svgContentOne} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 21.8 21.8"
                                     xmlSpace="preserve">
                                <path id="Icon_awesome-key" d="M21.8,7.5c0,4.1-3.4,7.5-7.5,7.5c-0.5,0-0.9,0-1.4-0.1l-1,1.2c-0.2,0.2-0.5,0.3-0.8,0.3H9.5v1.7
                                    c0,0.6-0.5,1-1,1l0,0H6.8v1.7c0,0.6-0.5,1-1,1c0,0,0,0,0,0H1c-0.6,0-1-0.5-1-1v-3.3c0-0.3,0.1-0.5,0.3-0.7l6.9-6.9
                                    C5.9,5.9,8,1.7,12,0.4s8.2,0.8,9.5,4.8C21.7,5.9,21.8,6.7,21.8,7.5z M14.3,5.5c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2l0,0
                                    C15.2,3.4,14.3,4.3,14.3,5.5C14.3,5.5,14.3,5.5,14.3,5.5L14.3,5.5z"/>
                                </svg>
                                <span className={classes.titleContentOne}>Designer</span>
                            </div>
                        </li>
                        <li className={classes.purpleLi}>
                            <div className={classes.contentOne}>
                                <svg className={classes.svgContentOne} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 21.8 21.8"
                                     xmlSpace="preserve">
                                <path id="Icon_awesome-key" d="M21.8,7.5c0,4.1-3.4,7.5-7.5,7.5c-0.5,0-0.9,0-1.4-0.1l-1,1.2c-0.2,0.2-0.5,0.3-0.8,0.3H9.5v1.7
                                    c0,0.6-0.5,1-1,1l0,0H6.8v1.7c0,0.6-0.5,1-1,1c0,0,0,0,0,0H1c-0.6,0-1-0.5-1-1v-3.3c0-0.3,0.1-0.5,0.3-0.7l6.9-6.9
                                    C5.9,5.9,8,1.7,12,0.4s8.2,0.8,9.5,4.8C21.7,5.9,21.8,6.7,21.8,7.5z M14.3,5.5c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2l0,0
                                    C15.2,3.4,14.3,4.3,14.3,5.5C14.3,5.5,14.3,5.5,14.3,5.5L14.3,5.5z"/>
                                </svg>
                                <span className={classes.titleContentOne}>Motion design</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={classes.boardContent} id="views">
                    <div className={classes.innerBoardContent}>
                        <div className={classes.titleBoardContent}>
                            <svg className={classes.svgTitleBoardContent} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 26 26"
                                 xmlSpace="preserve">
                            <path d="M13,2c-3,0-5.5,2.5-5.5,5.5S10,13,13,13s5.5-2.5,5.5-5.5S16,2,13,2 M13,15.8c-3.7,0-11,1.8-11,5.5V24h22v-2.8
                                C24,17.6,16.7,15.8,13,15.8 M13,0c4.1,0,7.5,3.4,7.5,7.5c0,2.9-1.6,5.3-4,6.6c1.4,0.3,2.8,0.7,4.1,1.2c1.5,0.6,2.7,1.3,3.5,2.1
                                c1.5,1.4,1.8,2.9,1.8,3.9V26H0v-4.8c0-1,0.3-2.5,1.8-3.9c0.9-0.8,2.1-1.5,3.5-2.1c1.2-0.5,2.7-0.9,4.1-1.2c-2.4-1.3-4-3.8-4-6.6
                                C5.5,3.4,8.9,0,13,0z"/>
                            </svg>
                            <h3 className={classes.h3}>Personnes qui ont vus votre profil</h3>
                        </div>
                    </div>
                    <ul className={classes.profilesViewed}>
                        <li className={classes.profilesViewedLi}>
                            <Link href="">
                                <a className={classes.linkProfilesViewed}>
                                    <div className={classes.imgMask}>
                                        <div className={`${classes.profileImg} ${classes.p13}`}>
                                            <Image
                                                src="/assets/images/photo_13.jpg"
                                                width={400}
                                                height={600}
                                            />
                                        </div>
                                    </div>
                                    <span>Couteau<br/>Emmanuel</span>
                                </a>
                            </Link>
                        </li>
                        <li className={classes.profilesViewedLi}>
                            <Link href="">
                                <a className={classes.linkProfilesViewed}>
                                    <div className={classes.imgMask}>
                                        <div className={`${classes.profileImg} ${classes.p14}`}>
                                            <Image
                                                src="/assets/images/photo_14.jpg"
                                                width={400}
                                                height={600}
                                            />
                                        </div>
                                    </div>
                                    <span>Ngom<br/>Gora</span>
                                </a>
                            </Link>
                        </li>
                        <li className={classes.profilesViewedLi}>
                            <Link href="">
                                <a className={classes.linkProfilesViewed}>
                                    <div className={classes.imgMask}>
                                        <div className={`${classes.profileImg} && ${classes.p15}`}>
                                            <Image
                                                src="/assets/images/photo_15.jpg"
                                                width={400}
                                                height={600}
                                            />
                                        </div>
                                    </div>
                                    <span>Frigant<br/>Caroline</span>
                                </a>
                            </Link>
                        </li>
                        <li className={classes.profilesViewedLi}>
                            <Link href="">
                                <a className={classes.linkProfilesViewed}>
                                    <div className={classes.imgMask}>
                                        <div className={`${classes.profileImg} && ${classes.p16}`}>
                                            <Image
                                                src="/assets/images/photo_16.jpg"
                                                width={400}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                    <span>Nadine<br/>Bertrand</span>
                                </a>
                            </Link>
                        </li>
                        <li className={classes.profilesViewedLi}>
                            <Link href="">
                                <a className={classes.linkProfilesViewed}>
                                    <div className={classes.imgMask}>
                                        <div className={`${classes.profileImg} && ${classes.p17}`}>
                                            <Image
                                                src="/assets/images/photo_17.jpg"
                                                width={400}
                                                height={600}
                                            />
                                        </div>
                                    </div>
                                    <span>Amal<br/>Thomas</span>
                                </a>
                            </Link>
                        </li>
                        <li className={classes.profilesViewedLi}>
                            <Link href="">
                                <a className={classes.linkProfilesViewed}>
                                    <div className={classes.imgMask}>
                                        <div className={`${classes.profileImg} && ${classes.p18}`}>
                                            <Image
                                                src="/assets/images/photo_18.jpg"
                                                width={400}
                                                height={600}
                                            />
                                        </div>
                                    </div>
                                    <span>Farrel<br/>Vivien</span>
                                </a>
                            </Link>
                        </li>
                        <li className={classes.profilesViewedLi}>
                            <Link href="">
                                <a className={classes.linkProfilesViewed}>
                                    <div className={classes.imgMask}>
                                        <div className={`${classes.profileImg} && ${classes.p19}`}>
                                            <Image
                                                src="/assets/images/photo_19.jpg"
                                                width={400}
                                                height={600}
                                            />
                                        </div>
                                    </div>
                                    <span>Johnson<br/>Jim</span>
                                </a>
                            </Link>
                        </li>
                        <li className={classes.profilesViewedLi}>
                            <Link href="">
                                <a className={classes.linkProfilesViewed}>
                                    <div className={classes.imgMask}>
                                        <div className={`${classes.profileImg} && ${classes.p20}`}>
                                            <Image
                                                src="/assets/images/photo_20.jpg"
                                                width={400}
                                                height={600}
                                            />
                                        </div>
                                    </div>
                                    <span>Fardeau<br/>Xavier</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </Container>
    );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout>
        {page}
        </AppLayout>
    );
};

export default Dashboard;
