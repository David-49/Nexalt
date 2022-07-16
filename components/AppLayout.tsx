import { FC } from 'react';

import { createStyles } from '@mantine/core';
import Image from 'next/image';
import Link from "next/link";

import { colors } from '../theme';

interface IProps {}

// @ts-ignore
// @ts-ignore
const useStyles = createStyles(({
    headerLogged: {
        position: 'fixed',
        left: 0,
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 120,
        height: 900,
        backgroundColor: colors.primaryBlue,
        borderBottomRightRadius: 25,
        zIndex: 100,
    },
    main: {
        position: 'relative',
    },
    headerInner: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoE: {
        width: 30,
        fill: colors.secondaryBackgroundColor,
    },
    navMenu: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 32,
    },
    firstMenu: {
        padding: 0,
        margin: 0,
    },
    liMenu: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        marginTop:35,
        marginBottom: 35,
        borderRadius: 10,
        backgroundColor: 'transparent',
        transition: 'backgroundColor 0.3s',
        ':hover': {
            content: '""',
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: colors.secondaryBackgroundColor,
            transition: 'backgroundColor 0.3s',
            svg: {
                fill: colors.primaryBlue,

            }
        },
    },
    menuLink: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuIcon: {
        width: 25,
        fill: colors.secondaryBackgroundColor,

    },
    activeMenu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        content: '""',
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: colors.secondaryBackgroundColor,
        transition: 'backgroundVolor 0.3s',
    },
    menuIconActive: {
        width: 25,
        fill: colors.primaryBlue,
        transition: 'fill 0.3s',
    }
}));

export const AppLayout: FC<IProps> = (props) => {
    const { classes } = useStyles();
    const { children } = props;
    return (
        <>
            <header className={classes.headerLogged}>
                <div className={classes.headerInner}>
                    <Link href="/">
                        <a>
                            <svg className={classes.logoE} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 29.5 30" xmlSpace="preserve">
                             <g id="Logo_nexalt" transform="translate(-22.933 -5.754)">
                             <g id="Calque_2_00000018920333840229996180000014502121412032225202_" transform="translate(22.933 5.754)">
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
                        </a>
                    </Link>
                    <nav className={classes.navMenu}>
                        <ul className={classes.firstMenu}>
                            <li className={classes.activeMenu}>
                                <Link href="/dashboard">
                                    <a className={classes.menuLink}>
                                    <svg className={classes.menuIconActive} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 26 24.2"
                                         xmlSpace="preserve">
                                        <path d="M21.4,24.2h-5.6c-0.6,0-1-0.4-1-1v-6.4h-3.5v6.4c0,0.6-0.4,1-1,1H4.6c-0.6,0-1-0.4-1-1V13.1H1c-0.4,0-0.8-0.3-0.9-0.6
                                            c-0.1-0.4,0-0.8,0.3-1.1l12-11.1c0.4-0.4,1-0.4,1.4,0l12,11.1c0.3,0.3,0.4,0.7,0.3,1.1c-0.2,0.4-0.5,0.6-0.9,0.6h-2.6v10.1
                                            C22.4,23.7,22,24.2,21.4,24.2z M16.8,22.2h3.6V12.1c0-0.6,0.4-1,1-1h1L13,2.4l-9.4,8.7h1c0.6,0,1,0.4,1,1v10.1h3.6v-6.4
                                            c0-0.6,0.4-1,1-1h5.5c0.6,0,1,0.4,1,1V22.2z"/>
                                        </svg>
                                    </a>
                                </Link>
                            </li>

                            <li className={classes.liMenu}>
                                <Link href="/research">
                                <a className={classes.menuLink}>
                                    <svg className={classes.menuIcon} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="0 0 22.4 22.4"
                                         xmlSpace="preserve">
                                    <g id="Loupe" transform="translate(1 1)">
                                     <path d="M21.1,19.7l-4.2-4.2c1.4-1.7,2.3-4,2.3-6.4C19.2,3.5,14.7-1,9.1-1C3.5-1-1,3.5-1,9.1c0,5.6,4.5,10.1,10.1,10.1
                                             c2.4,0,4.6-0.9,6.4-2.3l4.2,4.2c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C21.5,20.7,21.5,20.1,21.1,19.7z M1,9.1
                                                C1,4.7,4.7,1,9.1,1s8.1,3.6,8.1,8.1s-3.6,8.1-8.1,8.1S1,13.6,1,9.1z"/>
                                    </g>
                                    </svg>
                                </a>
                                </Link>
                            </li>
                            <li className={classes.liMenu}>
                                <Link href="/profilePage">
                                    <a className={classes.menuLink}>
                                        <svg className={classes.menuIcon} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 26 26"
                                             xmlSpace="preserve">
                                        <path d="M13,2c-3,0-5.5,2.5-5.5,5.5S10,13,13,13s5.5-2.5,5.5-5.5S16,2,13,2 M13,15.8c-3.7,0-11,1.8-11,5.5V24h22v-2.8
                                            C24,17.6,16.7,15.8,13,15.8 M13,0c4.1,0,7.5,3.4,7.5,7.5c0,2.9-1.6,5.3-4,6.6c1.4,0.3,2.8,0.7,4.1,1.2c1.5,0.6,2.7,1.3,3.5,2.1
                                            c1.5,1.4,1.8,2.9,1.8,3.9V26H0v-4.8c0-1,0.3-2.5,1.8-3.9c0.9-0.8,2.1-1.5,3.5-2.1c1.2-0.5,2.7-0.9,4.1-1.2c-2.4-1.3-4-3.8-4-6.6
                                            C5.5,3.4,8.9,0,13,0z"/>
                                        </svg>
                                    </a>
                                </Link>
                            </li>
                            <li className={classes.liMenu}>
                                <Link href="">
                                    <a className={classes.menuLink}>
                                        <svg className={classes.menuIcon}  version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 22 22"
                                             xmlSpace="preserve">
                                        <g id="Msg" transform="translate(-51 -290)">
                                            <path d="M52,312c-0.1,0-0.3,0-0.4-0.1c-0.4-0.2-0.6-0.5-0.6-0.9v-17.8c0-1.8,1.4-3.2,3.2-3.2h15.6c1.8,0,3.2,1.4,3.2,3.2v11.1
                                                c0,1.8-1.4,3.2-3.2,3.2H56.9l-4.2,4.2C52.5,311.9,52.3,312,52,312z M54.2,292c-0.7,0-1.2,0.5-1.2,1.2v15.4l2.7-2.7
                                                c0.2-0.2,0.4-0.3,0.7-0.3h13.3c0.7,0,1.2-0.5,1.2-1.2v-11.1c0-0.7-0.5-1.2-1.2-1.2H54.2z"/>
                                        </g>
                                        </svg>
                                    </a>
                                </Link>
                            </li>
                            <li className={classes.liMenu}>
                                <Link href="">
                                    <a className={classes.menuLink}>
                                        <svg className={classes.menuIcon}  version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
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
                                    </a>
                                </Link>
                            </li>
                            <li className={classes.liMenu}>
                                <Link href="">
                                    <a className={classes.menuLink}>
                                        <svg className={classes.menuIcon} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 28.6 28.6"
                                             xmlSpace="preserve">
                                        <g id="Icon_feather-settings" transform="translate(-0.4 -0.4)">
                                        <path d="M14.7,19.4c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7C19.4,17.3,17.3,19.4,14.7,19.4z
                                             M14.7,12.2c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5S16.1,12.2,14.7,12.2z"/>
                                        <path d="M14.8,29c-1.9,0-3.5-1.6-3.5-3.5v-0.1c0-0.3-0.2-0.7-0.6-0.8c-0.4-0.2-0.8-0.1-1,0.2l-0.1,0.1c-1.4,1.4-3.6,1.4-5,0
                                            c-0.7-0.7-1-1.5-1-2.5c0-0.9,0.4-1.8,1-2.5l0.1-0.1C4.9,19.7,5,19.4,5,19.2c0-0.2-0.1-0.5-0.3-0.6c-0.2-0.2-0.4-0.2-0.6-0.3H3.9
                                            c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5H4c0.3,0,0.7-0.2,0.8-0.6c0.2-0.4,0.1-0.8-0.2-1L4.6,9.6C3.2,8.3,3.2,6,4.6,4.7
                                            c1.4-1.4,3.6-1.4,5,0l0.1,0.1c0.2,0.2,0.6,0.3,1,0.2c0.1,0,0.2-0.1,0.2-0.1c0.2-0.2,0.4-0.4,0.4-0.7V3.9c0-0.9,0.4-1.8,1-2.5
                                            c0.7-0.7,1.5-1,2.5-1c0,0,0,0,0,0c1.9,0,3.5,1.6,3.5,3.5V4c0,0.5,0.4,0.9,0.9,0.9c0.2,0,0.4-0.1,0.6-0.3l0.1-0.1
                                            c1.4-1.4,3.6-1.4,5,0c1.4,1.4,1.4,3.6,0,5l-0.1,0.1c-0.2,0.2-0.3,0.6-0.2,1c0,0.1,0.1,0.2,0.1,0.2c0.2,0.2,0.4,0.4,0.7,0.4h0.2
                                            c0.9,0,1.8,0.4,2.5,1c0.7,0.7,1,1.5,1,2.5c0,1.9-1.6,3.5-3.5,3.5h-0.1c-0.3,0-0.6,0.2-0.8,0.5c0,0,0,0.1,0,0.1
                                            c-0.1,0.3-0.1,0.7,0.2,1l0.1,0.1c1.4,1.4,1.4,3.6,0,5c-1.4,1.4-3.6,1.4-5,0l-0.1-0.1c-0.2-0.2-0.4-0.2-0.6-0.2
                                            c-0.2,0-0.5,0.1-0.6,0.3c-0.2,0.2-0.2,0.4-0.3,0.6v0.2C18.3,27.4,16.7,29,14.8,29z M10.3,22.3c0.4,0,0.8,0.1,1.2,0.3
                                            c1.1,0.4,1.9,1.5,2,2.8l0,0.1c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3v-0.2c0-0.8,0.3-1.6,0.9-2.1c1.2-1.2,3.2-1.3,4.4-0.1l0.1,0.1
                                            c0.5,0.5,1.3,0.5,1.8,0c0.5-0.5,0.5-1.3,0-1.8l-0.1-0.1c-0.9-0.9-1.1-2.1-0.7-3.3c0,0,0-0.1,0-0.1c0.5-1.1,1.6-1.9,2.8-1.9h0.1
                                            c0.7,0,1.3-0.6,1.3-1.3c0-0.3-0.1-0.7-0.4-0.9c-0.2-0.2-0.6-0.4-0.9-0.4h-0.2c-1.2,0-2.3-0.7-2.8-1.9c0-0.1-0.1-0.2-0.1-0.3
                                            c-0.4-1.1-0.1-2.3,0.7-3.2L23.2,8c0.5-0.5,0.5-1.3,0-1.8c-0.5-0.5-1.3-0.5-1.8,0l-0.1,0.1c-0.6,0.6-1.3,0.9-2.1,0.9c0,0,0,0,0,0
                                            C17.4,7.1,16,5.7,16,4V3.9c0-0.7-0.6-1.3-1.3-1.3c0,0,0,0,0,0c-0.3,0-0.7,0.1-0.9,0.4s-0.4,0.6-0.4,0.9v0.2c0,1.2-0.7,2.3-1.9,2.8
                                            C11.4,7,11.3,7,11.2,7c-1.1,0.4-2.3,0.1-3.2-0.7L8,6.2c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l0.1,0.1
                                            c0.9,0.9,1.1,2.2,0.6,3.4c-0.4,1.1-1.5,1.9-2.8,2l-0.1,0c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3h0.2c0.8,0,1.6,0.3,2.1,0.9
                                            c0.6,0.6,0.9,1.3,0.9,2.2s-0.3,1.6-0.9,2.2l-0.1,0.1C6,21.7,5.9,22,5.9,22.4S6,23,6.2,23.3c0.5,0.5,1.3,0.5,1.8,0l0.1-0.1
                                            C8.7,22.6,9.5,22.3,10.3,22.3z"/>
                                        </g>
                                        </svg>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <ul className={classes.firstMenu}>
                            <li className={classes.liMenu}>
                                <Link href="">
                                    <a className={classes.menuLink}>
                                        <svg version="1.1" className={classes.menuIcon} id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 23.3 23.3"
                                             xmlSpace="preserve">
                                        <g id="Ressources" transform="translate(-48.73 -653.091)">
                                            <path id="Dossier" d="M59.9,655.6c0.7,0,1.3,0.7,1.6,1.4c0.6,1.1,0.4,1,1.7,1c2,0,4,0,5.9,0c1.4-0.1,2.6,0.9,2.8,2.2
                                                c0,0.2,0.1,0.5,0,0.7c0,3.3,0,6.7,0,10c0,1.6-1.2,2.9-2.8,2.9c0,0-0.1,0-0.1,0c-4.9,0-9.9,0-14.8,0c-1.7,0-3.1-1.1-3.6-2.7
                                                c-0.6-2.1-1.2-4.3-1.8-6.4c-0.4-0.9,0-2,0.8-2.6c0.5-0.3,1.1-0.4,1.7-0.4v-0.4c0-1,0-2,0-2.9c0-1.4,1-2.7,2.4-2.9H59.9z
                                                 M61.7,672.5h7.4c0.1,0,0.3,0,0.4,0c0.4,0,0.7-0.4,0.7-0.8c0-0.1,0-0.1,0-0.2c0-0.1-0.1-0.2-0.1-0.3c-0.6-2.1-1.2-4.3-1.9-6.4
                                                c-0.2-1-1.2-1.7-2.2-1.7c-4.9,0-9.9,0-14.8,0c-0.2,0-0.3,0-0.5,0c-0.4,0.1-0.6,0.4-0.6,0.8c0,0,0,0,0,0c0,0.1,0,0.2,0.1,0.3
                                                c0.6,2.1,1.2,4.3,1.9,6.4c0.2,1,1.2,1.7,2.2,1.7L61.7,672.5z M70.6,668.1L70.6,668.1c0.1,0,0.1-0.1,0.1-0.1c0-2.4,0-4.8,0-7.2
                                                c0-0.1,0-0.3,0-0.4c-0.2-0.7-0.8-1.1-1.5-1c-2.2,0-4.4,0-6.6,0c-0.8,0-1.5-0.4-1.8-1.1c-0.2-0.3-0.4-0.7-0.6-1
                                                c-0.1-0.2-0.4-0.4-0.6-0.4c-1.8,0-3.6,0-5.3,0c-0.8,0-1.4,0.6-1.4,1.3c0,0,0,0.1,0,0.1c0,0.6,0,1.2,0,1.8v1.6h0.4c4.3,0,8.7,0,13,0
                                                c1.4,0,2.7,0.9,3.3,2.2c0.1,0.3,0.2,0.7,0.3,1C70,666,70.3,667.1,70.6,668.1L70.6,668.1z"/>
                                        </g>
                                        </svg>
                                    </a>
                                </Link>
                            </li>
                            <li className={classes.liMenu}>
                                <Link href="">
                                    <a className={classes.menuLink}>
                                        <svg version="1.1" className={classes.menuIcon} id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 26 26"
                                             xmlSpace="preserve">
                                        <g id="Support" transform="translate(-49 -704)">
                                            <g id="Icon_feather-help-circle" transform="translate(47 702)">
                                                <path d="M15,28C7.8,28,2,22.2,2,15C2,7.8,7.8,2,15,2c7.2,0,13,5.8,13,13C28,22.2,22.2,28,15,28z M15,4C8.9,4,4,8.9,4,15
                                                    s4.9,11,11,11s11-4.9,11-11S21.1,4,15,4z"/>
                                                <path d="M14.9,17.2c-0.4,0-0.8-0.3-0.9-0.7c-0.2-0.5,0.1-1.1,0.6-1.3c0.8-0.3,2.9-1.3,2.9-2.7c0-1.1-0.7-2.1-1.7-2.5
                                                    c-1.4-0.5-2.8,0.2-3.3,1.6c-0.2,0.5-0.8,0.8-1.3,0.6c-0.5-0.2-0.8-0.8-0.6-1.3c0.8-2.4,3.5-3.7,5.9-2.8c1.9,0.6,3.1,2.4,3.1,4.4
                                                    c0,3.1-4.1,4.5-4.3,4.5C15.1,17.2,15,17.2,14.9,17.2z"/>
                                                <path d="M15,22c-0.3,0-0.5-0.1-0.7-0.3C14.1,21.5,14,21.3,14,21c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.1-0.2,0.2-0.3c0,0,0.1-0.1,0.1-0.1
                                                    c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c0.3-0.1,0.7,0,0.9,0.3c0.1,0.1,0.2,0.2,0.2,0.3C16,20.7,16,20.9,16,21
                                                    c0,0.3-0.1,0.5-0.3,0.7C15.5,21.9,15.3,22,15,22z"/>
                                            </g>
                                        </g>
                                        </svg>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Image
                        src="/assets/images/profile-picture.png" alt=""
                        width={70}
                        height={70}
                    />
                </div>
            </header>
            <main className={classes.main}>
                {children}
            </main>
        </>
    );
};
