import { ReactElement, ReactNode } from 'react';

import {Container, createStyles} from "@mantine/core";
import Head from "next/head";
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
    filter: {
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
    filterInner: {
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
    filters: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flexStart',
        margin: 0,
        padding: 0,
    },
    filtersLabel: {
        width: '100%',
        '@media (max-width: 1820px)': {
            width: '85%',
        },
    },
    filtersInput: {
        backgroundColor: colors.primaryBackgroundColor,
        color: 'rgb( #0F0C29, 50% )',
        fontFamily: 'Poppins, sans-serif',
        fontSize: 18,
        fontWeight: 500,
        padding: 15,
        borderRadius: 10,
        marginTop: 7.5,
        marginRight: 0,
        marginBottom: 7.5,
        marginLeft: 0,
        border: 'none',
        width: '100%',
        '@media (max-width: 1820px)': {
            width: '85%',
        },
    },
    filterSearchButton: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundCcolor: colors.secondaryBackgroundColor,
        paddingTop: 15,
        paddingRight: 25,
        paddingBottom: 15,
        paddingLeft: 25,
        borderRadius: 10,
        marginTop: 7.5,
        border: 'none',
        cursor: 'pointer',
        '@media (max-width: 1820px)': {
            width: '72%',
        },
    },
    svgFilterSearchButton: {
        width: 20,
        fill: colors.secondaryBlue,
    },
    textFilterSearchButton: {
        color: colors.secondaryBlue,
        fontFamily: 'Poppins, sans-serif',
        fontSize: 16,
        fontWeight: 600,
        marginLeft: 15,
    },

    searchResult: {
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
    innerSearchResult: {
        display: 'flex',
        flexDirection: 'column',
    },
    topSearch: {
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
    searchContents: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: 30,
        gridAutoRows: "minmax(100px, auto)",
        padding: 0,
        marginTop: 30,
        marginRight: 0,
        marginBottom: 30,
        marginLeft: 0,
        '@media (max-width: 1700px)': {
            gridTemplateColumns: "repeat(3, 1fr)",
        },
    },
    card: {
        backgroundColor: colors.secondaryBackgroundColor,
        width: 288,
        height: 'auto',
        borderRadius: 25,
        padding: 10,
        boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
        transform: 'scale(1)',
        transition: 'transform 0.3s',
        ':hover': {
            transform: 'scale(1.03)',
            transition: 'transform 0.3s',
        }
    },
    imgMask: {
        position: "relative",
        width: 265,
        height: 200,
        overflow: 'hidden',
        borderRadius: 20,
    },
    cardImg: {
        position: "absolute",
    },
    p1: {
        top: -35,
    },
    p2: {
        top: -35,
    },
    p3: {
        top: -45,
    },
    p4: {
        top: -85,
    },
    p5: {
        top: -35,
    },
    p6: {
        top: -60,
    },
    p7: {
        top: -50,
    },
    p8: {
        top: -35,
    },
    p9: {
        top: -65,
    },
    p10: {
        top: -95,
    },
    p11: {
        top: -75,
    },
    p12: {
        top: -10,
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        marginRight: 20,
        marginBottom: 15,
        marginLeft: 20,
    },
    firstCardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    name: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 20,
        fontWeight: 700,
        color: colors.blackText,
    },
    job: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 16,
        fontWeight: 400,
        color: '#87859EFF',
    },
    secondCardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    year: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 16,
        fontWeight: 700,
        color: colors.blackText,
    },
    yearText: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 10,
        fontWeight: 400,
        color: '#87859EFF',
    },

}));

const Research: HomePageWithLayout = () => {

    const {classes} = useStyles();

    return (
        <Container fluid className={classes.containerPage}>
            <Head>
                <title>Bienvenue sur la page de recherche</title>
                <meta name="description" content="Faites vos recherches" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={classes.filter}>
                <div className={classes.filterInner}>
                    <h1 className={classes.title}>Filtres de recherche</h1>
                    <form className={classes.filters}>
                        <label className={classes.filtersLabel} htmlFor="localisation">
                            <input className={classes.filtersInput} name="localisation" id="localisation" type="text" placeholder="Localisation..."/>
                        </label>
                        <label className={classes.filtersLabel} htmlFor="poste">
                            <input className={classes.filtersInput} name="poste" id="poste" type="text" placeholder="Poste..."/>
                        </label>
                        <label className={classes.filtersLabel} htmlFor="schoolYear">
                            <input className={classes.filtersInput} name="schoolYear" id="schoolYear" type="text" placeholder="Année d'étude..."/>
                        </label>
                        <label className={classes.filtersLabel} htmlFor="timeContract">
                            <input className={classes.filtersInput} name="timeContract" id="timeContract" type="text" placeholder="Durée de contrat..."/>
                        </label>
                        <label className={classes.filtersLabel} htmlFor="skills">
                            <input className={classes.filtersInput} name="skills" id="skills" type="text" placeholder="Compétences..."/>
                        </label>
                        <button className={classes.filterSearchButton} type="submit">
                            <svg className={classes.svgFilterSearchButton} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 22.4 22.4"
                                 xmlSpace="preserve">
                            <g id="Loupe" transform="translate(1 1)">
                                <path d="M21.1,19.7l-4.2-4.2c1.4-1.7,2.3-4,2.3-6.4C19.2,3.5,14.7-1,9.1-1C3.5-1-1,3.5-1,9.1c0,5.6,4.5,10.1,10.1,10.1
                                    c2.4,0,4.6-0.9,6.4-2.3l4.2,4.2c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C21.5,20.7,21.5,20.1,21.1,19.7z M1,9.1
                                    C1,4.7,4.7,1,9.1,1s8.1,3.6,8.1,8.1s-3.6,8.1-8.1,8.1S1,13.6,1,9.1z"/>
                            </g>
                            </svg>
                            <span className={classes.textFilterSearchButton}>Rechercher</span>
                        </button>
                    </form>
                </div>
            </section>

            <section className={classes.searchResult}>
                <div className={classes.innerSearchResult}>
                    <div className={classes.topSearch}>
                        <h2 className={classes.h2}>Recherche pour "Webdesigner"</h2>
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

                    <div className={classes.searchContents}>
                        <Link href="">
                            <a className={classes.card}>
                                <div className={classes.imgMask}>
                                    <div className={`${classes.cardImg} ${classes.p1}`}>
                                        <Image
                                            src="/assets/images/research/photo_1.jpg" alt="student"
                                            width= '1080'
                                            height= '1400'
                                        />
                                    </div>
                                </div>
                                <div className={classes.cardContent}>
                                    <div className={classes.firstCardContent}>
                                        <span className={classes.name}>Margaux Dupuis</span>
                                        <span className={classes.job}>Webdesign</span>
                                    </div>
                                    <div className={classes.secondCardContent}>
                                        <span className={classes.year}>3ème</span>
                                        <span className={classes.yearText}>année</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="">
                            <a className={classes.card}>
                                <div className={classes.imgMask}>
                                    <div className={`${classes.cardImg} ${classes.p2}`}>
                                        <Image
                                            src="/assets/images/research/photo_2.jpg" alt="student"
                                            width= '1080'
                                            height= '1400'
                                        />
                                    </div>
                                </div>
                                <div className={classes.cardContent}>
                                    <div className={classes.firstCardContent}>
                                        <span className={classes.name}>Margaux Dupuis</span>
                                        <span className={classes.job}>Webdesign</span>
                                    </div>
                                    <div className={classes.secondCardContent}>
                                        <span className={classes.year}>3ème</span>
                                        <span className={classes.yearText}>année</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="">
                            <a className={classes.card}>
                                <div className={classes.imgMask}>
                                    <div className={`${classes.cardImg} ${classes.p3}`}>
                                        <Image
                                            src="/assets/images/research/photo_3.jpg" alt="student"
                                            width= '1080'
                                            height= '1400'
                                        />
                                    </div>
                                </div>
                                <div className={classes.cardContent}>
                                    <div className={classes.firstCardContent}>
                                        <span className={classes.name}>Margaux Dupuis</span>
                                        <span className={classes.job}>Webdesign</span>
                                    </div>
                                    <div className={classes.secondCardContent}>
                                        <span className={classes.year}>3ème</span>
                                        <span className={classes.yearText}>année</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="">
                            <a className={classes.card}>
                                <div className={classes.imgMask}>
                                    <div className={`${classes.cardImg} ${classes.p4}`}>
                                        <Image
                                            src="/assets/images/research/photo_4.jpg" alt="student"
                                            width= '1080'
                                            height= '1400'
                                        />
                                    </div>
                                </div>
                                <div className={classes.cardContent}>
                                    <div className={classes.firstCardContent}>
                                        <span className={classes.name}>Margaux Dupuis</span>
                                        <span className={classes.job}>Webdesign</span>
                                    </div>
                                    <div className={classes.secondCardContent}>
                                        <span className={classes.year}>3ème</span>
                                        <span className={classes.yearText}>année</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="">
                            <a className={classes.card}>
                                <div className={classes.imgMask}>
                                    <div className={`${classes.cardImg} ${classes.p5}`}>
                                        <Image
                                            src="/assets/images/research/photo_5.jpg" alt="student"
                                            width= '1080'
                                            height= '1400'
                                        />
                                    </div>
                                </div>
                                <div className={classes.cardContent}>
                                    <div className={classes.firstCardContent}>
                                        <span className={classes.name}>Margaux Dupuis</span>
                                        <span className={classes.job}>Webdesign</span>
                                    </div>
                                    <div className={classes.secondCardContent}>
                                        <span className={classes.year}>3ème</span>
                                        <span className={classes.yearText}>année</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="">
                            <a className={classes.card}>
                                <div className={classes.imgMask}>
                                    <div className={`${classes.cardImg} ${classes.p6}`}>
                                        <Image
                                            src="/assets/images/research/photo_6.jpg" alt="student"
                                            width= '1080'
                                            height= '1400'
                                        />
                                    </div>
                                </div>
                                <div className={classes.cardContent}>
                                    <div className={classes.firstCardContent}>
                                        <span className={classes.name}>Margaux Dupuis</span>
                                        <span className={classes.job}>Webdesign</span>
                                    </div>
                                    <div className={classes.secondCardContent}>
                                        <span className={classes.year}>3ème</span>
                                        <span className={classes.yearText}>année</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="">
                            <a className={classes.card}>
                                <div className={classes.imgMask}>
                                    <div className={`${classes.cardImg} ${classes.p7}`}>
                                        <Image
                                            src="/assets/images/research/photo_7.jpg" alt="student"
                                            width= '1080'
                                            height= '1400'
                                        />
                                    </div>
                                </div>
                                <div className={classes.cardContent}>
                                    <div className={classes.firstCardContent}>
                                        <span className={classes.name}>Margaux Dupuis</span>
                                        <span className={classes.job}>Webdesign</span>
                                    </div>
                                    <div className={classes.secondCardContent}>
                                        <span className={classes.year}>3ème</span>
                                        <span className={classes.yearText}>année</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="">
                            <a className={classes.card}>
                                <div className={classes.imgMask}>
                                    <div className={`${classes.cardImg} ${classes.p8}`}>
                                        <Image
                                            src="/assets/images/research/photo_8.jpg" alt="student"
                                            width= '1080'
                                            height= '1400'
                                        />
                                    </div>
                                </div>
                                <div className={classes.cardContent}>
                                    <div className={classes.firstCardContent}>
                                        <span className={classes.name}>Margaux Dupuis</span>
                                        <span className={classes.job}>Webdesign</span>
                                    </div>
                                    <div className={classes.secondCardContent}>
                                        <span className={classes.year}>3ème</span>
                                        <span className={classes.yearText}>année</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="">
                            <a className={classes.card}>
                                <div className={classes.imgMask}>
                                    <div className={`${classes.cardImg} ${classes.p9}`}>
                                        <Image
                                            src="/assets/images/research/photo_9.jpg" alt="student"
                                            width= '1080'
                                            height= '1400'
                                        />
                                    </div>
                                </div>
                                <div className={classes.cardContent}>
                                    <div className={classes.firstCardContent}>
                                        <span className={classes.name}>Margaux Dupuis</span>
                                        <span className={classes.job}>Webdesign</span>
                                    </div>
                                    <div className={classes.secondCardContent}>
                                        <span className={classes.year}>3ème</span>
                                        <span className={classes.yearText}>année</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="">
                            <a className={classes.card}>
                                <div className={classes.imgMask}>
                                    <div className={`${classes.cardImg} ${classes.p10}`}>
                                        <Image
                                            src="/assets/images/research/photo_10.jpg" alt="student"
                                            width= '1080'
                                            height= '1400'
                                        />
                                    </div>
                                </div>
                                <div className={classes.cardContent}>
                                    <div className={classes.firstCardContent}>
                                        <span className={classes.name}>Margaux Dupuis</span>
                                        <span className={classes.job}>Webdesign</span>
                                    </div>
                                    <div className={classes.secondCardContent}>
                                        <span className={classes.year}>3ème</span>
                                        <span className={classes.yearText}>année</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="">
                            <a className={classes.card}>
                                <div className={classes.imgMask}>
                                    <div className={`${classes.cardImg} ${classes.p11}`}>
                                        <Image
                                            src="/assets/images/research/photo_11.jpg" alt="student"
                                            width= '1080'
                                            height= '1400'
                                        />
                                    </div>
                                </div>
                                <div className={classes.cardContent}>
                                    <div className={classes.firstCardContent}>
                                        <span className={classes.name}>Margaux Dupuis</span>
                                        <span className={classes.job}>Webdesign</span>
                                    </div>
                                    <div className={classes.secondCardContent}>
                                        <span className={classes.year}>3ème</span>
                                        <span className={classes.yearText}>année</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link href="">
                            <a className={classes.card}>
                                <div className={classes.imgMask}>
                                    <div className={`${classes.cardImg} ${classes.p12}`}>
                                        <Image
                                            src="/assets/images/research/photo_12.jpg" alt="student"
                                            width= '1080'
                                            height= '1400'
                                        />
                                    </div>
                                </div>
                                <div className={classes.cardContent}>
                                    <div className={classes.firstCardContent}>
                                        <span className={classes.name}>Margaux Dupuis</span>
                                        <span className={classes.job}>Webdesign</span>
                                    </div>
                                    <div className={classes.secondCardContent}>
                                        <span className={classes.year}>3ème</span>
                                        <span className={classes.yearText}>année</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>

                </div>
            </section>
        </Container>
    );
};

Research.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    );
};

export default Research;
