import { FC } from 'react';

import { createStyles, Text } from '@mantine/core';
import Link from "next/link";
import {colors} from "../../theme";

interface IProps {}

const useStyles = createStyles(() => ({
  title: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: 40,
    marginBottom: 50,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pricingDescription: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 20,
    marginBottom: 50,
    textAlign: 'center',
    width: '70%',
  },
  allPrices: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.secondaryBackgroundColor,
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
    paddingTop: 45,
    paddingRight: 42,
    paddingBottom: 45,
    paddingLeft: 42,
    height: 710,
  },
  priceTitleContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  priceTitle: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: 27,
    marginBottom: 20,
    color: colors.blackText
  },
  priceCost: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: 50,
    color: colors.primaryBlue,
  },
  adventageList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  adventage: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginRight: 0,
    marginBottom: 25,
    marginLeft: 0,
    ':nth-of-type(1)': {
      marginTop: 0,
    },
    ':nth-last-of-type(-n+1)': {
      marginBottom: 0,
    }
  },
  svgAdventage: {
    width: 20,
    fill: colors.primaryBlue,
    marginTop: 0,
    marginRight: 10,
    marginBottom: 0,
    marginLeft: 0,
  },
  adventageName: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: 22,
    color: colors.primaryBlue,
    '@media (max-width: 1350px)': {
      fontSize: 18,
    }
  },
  chooseBtn: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: colors.primaryBlue,
    color: colors.secondaryBackgroundColor,
    paddingTop: 25,
    paddingRight: 65,
    paddingBottom: 25,
    paddingLeft: 65,
    borderRadius: 10,
    transition: 'background-color .2s',
    ':hover': {
      backgroundColor: '#725FFE',
      transition: 'background-color .2s',
    },
    '@media (max-width: 1450px)': {
      paddingTop: 25,
      paddingRight: 40,
      paddingBottom: 25,
      paddingLeft: 40,
    }
  },
  chooseBtnWhite: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: colors.secondaryBackgroundColor,
    color: colors.primaryBlue,
    paddingTop: 25,
    paddingRight: 65,
    paddingBottom: 25,
    paddingLeft: 65,
    borderRadius: 10,
    transition: 'background-color .2s, color .2s',
    ':hover': {
      color: colors.secondaryBackgroundColor,
      backgroundColor: '#725FFE',
      transition: 'background-color .2s, color .2s',
    },
    '@media (max-width: 1450px)': {
      paddingTop: 25,
      paddingRight: 40,
      paddingBottom: 25,
      paddingLeft: 40,
    }
  },
}));

export const PricesPlans: FC<IProps> = () => {
  const { classes } = useStyles();
  return (
      <div className={classes.container}>
        <Text className={classes.title}>
          Les tarifs pour les entreprises
        </Text>
        <p className={classes.pricingDescription}>Choisissez la formule la plus adéquat à vos besoins !
          Vous ne trouverez pas de formules vous assurant d’avoir un alternant super drôle ou encore quelqu’un grimpant au plafond, en revanche, on vous assure un accès illimité à des profils de qualité.</p>
        <div className={classes.allPrices}>
            <div className={classes.priceCard} style={{transform: 'scale(0.90)',}}>
              <div className={classes.priceTitleContent}>
                <span className={classes.priceTitle}>Formule par jours</span>
                <span className={classes.priceCost}>200€</span>
              </div>
              <ul className={classes.adventageList}>
                <li className={classes.adventage}>
                  <svg className={classes.svgAdventage} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 30 30" xmlSpace="preserve">
                  <path id="Icon_awesome-check-square" d="M26.8,30H3.2C1.4,30,0,28.6,0,26.8V3.2C0,1.4,1.4,0,3.2,0h23.6C28.6,0,30,1.4,30,3.2v23.6
                      C30,28.6,28.6,30,26.8,30z M13.1,23.4l12.3-12.3c0.4-0.4,0.4-1.1,0-1.5l-1.5-1.5c-0.4-0.4-1.1-0.4-1.5,0l-10,10l-4.7-4.7
                      c-0.4-0.4-1.1-0.4-1.5,0L4.6,15c-0.4,0.4-0.4,1.1,0,1.5l7,7C12,23.9,12.7,23.9,13.1,23.4C13.1,23.4,13.1,23.4,13.1,23.4z"/>
                  </svg>
                  <span className={classes.adventageName}>Accès aux profils</span>
                </li>
                <li className={classes.adventage}>
                  <svg className={classes.svgAdventage} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 30 30" xmlSpace="preserve">
                    <path id="Icon_awesome-check-square" d="M26.8,30H3.2C1.4,30,0,28.6,0,26.8V3.2C0,1.4,1.4,0,3.2,0h23.6C28.6,0,30,1.4,30,3.2v23.6
                      C30,28.6,28.6,30,26.8,30z M13.1,23.4l12.3-12.3c0.4-0.4,0.4-1.1,0-1.5l-1.5-1.5c-0.4-0.4-1.1-0.4-1.5,0l-10,10l-4.7-4.7
                      c-0.4-0.4-1.1-0.4-1.5,0L4.6,15c-0.4,0.4-0.4,1.1,0,1.5l7,7C12,23.9,12.7,23.9,13.1,23.4C13.1,23.4,13.1,23.4,13.1,23.4z"/>
                  </svg>
                  <span className={classes.adventageName}>2 nouveaux profils par jour</span>
                </li>
                <li className={classes.adventage}>
                  <svg className={classes.svgAdventage} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 30 30" xmlSpace="preserve">
                    <path id="Icon_awesome-check-square" d="M26.8,30H3.2C1.4,30,0,28.6,0,26.8V3.2C0,1.4,1.4,0,3.2,0h23.6C28.6,0,30,1.4,30,3.2v23.6
                      C30,28.6,28.6,30,26.8,30z M13.1,23.4l12.3-12.3c0.4-0.4,0.4-1.1,0-1.5l-1.5-1.5c-0.4-0.4-1.1-0.4-1.5,0l-10,10l-4.7-4.7
                      c-0.4-0.4-1.1-0.4-1.5,0L4.6,15c-0.4,0.4-0.4,1.1,0,1.5l7,7C12,23.9,12.7,23.9,13.1,23.4C13.1,23.4,13.1,23.4,13.1,23.4z"/>
                  </svg>
                  <span className={classes.adventageName}>Accompagnement personnalisé</span>
                </li>
              </ul>
              <Link href="">
                <a className={classes.chooseBtn}>Choisir l'offre</a>
              </Link>
            </div>
            <div className={classes.priceCard} style={{backgroundColor: colors.primaryBlue,}}>
              <div className={classes.priceTitleContent} >
                <span className={classes.priceTitle} style={{color: colors.secondaryBackgroundColor,}}>Formule par semaines</span>
                <span className={classes.priceCost} style={{color: colors.secondaryBackgroundColor,}}>500€</span>
              </div>
              <ul className={classes.adventageList}>
                <li className={classes.adventage}>
                  <svg className={classes.svgAdventage} style={{fill: colors.secondaryBackgroundColor,}} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 30 30" xmlSpace="preserve">
                    <path id="Icon_awesome-check-square" d="M26.8,30H3.2C1.4,30,0,28.6,0,26.8V3.2C0,1.4,1.4,0,3.2,0h23.6C28.6,0,30,1.4,30,3.2v23.6
                      C30,28.6,28.6,30,26.8,30z M13.1,23.4l12.3-12.3c0.4-0.4,0.4-1.1,0-1.5l-1.5-1.5c-0.4-0.4-1.1-0.4-1.5,0l-10,10l-4.7-4.7
                      c-0.4-0.4-1.1-0.4-1.5,0L4.6,15c-0.4,0.4-0.4,1.1,0,1.5l7,7C12,23.9,12.7,23.9,13.1,23.4C13.1,23.4,13.1,23.4,13.1,23.4z"/>
                  </svg>
                  <span className={classes.adventageName} style={{color: colors.secondaryBackgroundColor,}}>Accès aux profils complets</span>
                </li>
                <li className={classes.adventage}>
                  <svg className={classes.svgAdventage} style={{fill: colors.secondaryBackgroundColor,}} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 30 30" xmlSpace="preserve">
                    <path id="Icon_awesome-check-square" d="M26.8,30H3.2C1.4,30,0,28.6,0,26.8V3.2C0,1.4,1.4,0,3.2,0h23.6C28.6,0,30,1.4,30,3.2v23.6
                      C30,28.6,28.6,30,26.8,30z M13.1,23.4l12.3-12.3c0.4-0.4,0.4-1.1,0-1.5l-1.5-1.5c-0.4-0.4-1.1-0.4-1.5,0l-10,10l-4.7-4.7
                      c-0.4-0.4-1.1-0.4-1.5,0L4.6,15c-0.4,0.4-0.4,1.1,0,1.5l7,7C12,23.9,12.7,23.9,13.1,23.4C13.1,23.4,13.1,23.4,13.1,23.4z"/>
                  </svg>
                  <span className={classes.adventageName} style={{color: colors.secondaryBackgroundColor,}}>4 nouveaux profils par jour</span>
                </li>
                <li className={classes.adventage}>
                  <svg className={classes.svgAdventage} style={{fill: colors.secondaryBackgroundColor,}} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 30 30" xmlSpace="preserve">
                    <path id="Icon_awesome-check-square" d="M26.8,30H3.2C1.4,30,0,28.6,0,26.8V3.2C0,1.4,1.4,0,3.2,0h23.6C28.6,0,30,1.4,30,3.2v23.6
                      C30,28.6,28.6,30,26.8,30z M13.1,23.4l12.3-12.3c0.4-0.4,0.4-1.1,0-1.5l-1.5-1.5c-0.4-0.4-1.1-0.4-1.5,0l-10,10l-4.7-4.7
                      c-0.4-0.4-1.1-0.4-1.5,0L4.6,15c-0.4,0.4-0.4,1.1,0,1.5l7,7C12,23.9,12.7,23.9,13.1,23.4C13.1,23.4,13.1,23.4,13.1,23.4z"/>
                  </svg>
                  <span className={classes.adventageName} style={{color: colors.secondaryBackgroundColor,}}>Accompagnement personnalisé</span>
                </li>
                <li className={classes.adventage}>
                  <svg className={classes.svgAdventage} style={{fill: colors.secondaryBackgroundColor,}} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 30 30" xmlSpace="preserve">
                    <path id="Icon_awesome-check-square" d="M26.8,30H3.2C1.4,30,0,28.6,0,26.8V3.2C0,1.4,1.4,0,3.2,0h23.6C28.6,0,30,1.4,30,3.2v23.6
                      C30,28.6,28.6,30,26.8,30z M13.1,23.4l12.3-12.3c0.4-0.4,0.4-1.1,0-1.5l-1.5-1.5c-0.4-0.4-1.1-0.4-1.5,0l-10,10l-4.7-4.7
                      c-0.4-0.4-1.1-0.4-1.5,0L4.6,15c-0.4,0.4-0.4,1.1,0,1.5l7,7C12,23.9,12.7,23.9,13.1,23.4C13.1,23.4,13.1,23.4,13.1,23.4z"/>
                  </svg>
                  <span className={classes.adventageName} style={{color: colors.secondaryBackgroundColor,}}>Contrats en ligne</span>
                </li>
              </ul>
              <Link href="">
                <a className={classes.chooseBtnWhite}>Choisir l'offre</a>
              </Link>
            </div>
            <div className={classes.priceCard} style={{transform: 'scale(0.90)',}}>
              <div className={classes.priceTitleContent}>
                <span className={classes.priceTitle}>Formule par mois</span>
                <span className={classes.priceCost}>800€</span>
              </div>
              <ul className={classes.adventageList}>
                <li className={classes.adventage}>
                  <svg className={classes.svgAdventage} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 30 30" xmlSpace="preserve">
                    <path id="Icon_awesome-check-square" d="M26.8,30H3.2C1.4,30,0,28.6,0,26.8V3.2C0,1.4,1.4,0,3.2,0h23.6C28.6,0,30,1.4,30,3.2v23.6
                      C30,28.6,28.6,30,26.8,30z M13.1,23.4l12.3-12.3c0.4-0.4,0.4-1.1,0-1.5l-1.5-1.5c-0.4-0.4-1.1-0.4-1.5,0l-10,10l-4.7-4.7
                      c-0.4-0.4-1.1-0.4-1.5,0L4.6,15c-0.4,0.4-0.4,1.1,0,1.5l7,7C12,23.9,12.7,23.9,13.1,23.4C13.1,23.4,13.1,23.4,13.1,23.4z"/>
                  </svg>
                  <span className={classes.adventageName}>Accès aux profils complets</span>
                </li>
                <li className={classes.adventage}>
                  <svg className={classes.svgAdventage} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 30 30" xmlSpace="preserve">
                    <path id="Icon_awesome-check-square" d="M26.8,30H3.2C1.4,30,0,28.6,0,26.8V3.2C0,1.4,1.4,0,3.2,0h23.6C28.6,0,30,1.4,30,3.2v23.6
                      C30,28.6,28.6,30,26.8,30z M13.1,23.4l12.3-12.3c0.4-0.4,0.4-1.1,0-1.5l-1.5-1.5c-0.4-0.4-1.1-0.4-1.5,0l-10,10l-4.7-4.7
                      c-0.4-0.4-1.1-0.4-1.5,0L4.6,15c-0.4,0.4-0.4,1.1,0,1.5l7,7C12,23.9,12.7,23.9,13.1,23.4C13.1,23.4,13.1,23.4,13.1,23.4z"/>
                  </svg>
                  <span className={classes.adventageName}>5 nouveaux profils par jour</span>
                </li>
                <li className={classes.adventage}>
                  <svg className={classes.svgAdventage} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 30 30" xmlSpace="preserve">
                    <path id="Icon_awesome-check-square" d="M26.8,30H3.2C1.4,30,0,28.6,0,26.8V3.2C0,1.4,1.4,0,3.2,0h23.6C28.6,0,30,1.4,30,3.2v23.6
                      C30,28.6,28.6,30,26.8,30z M13.1,23.4l12.3-12.3c0.4-0.4,0.4-1.1,0-1.5l-1.5-1.5c-0.4-0.4-1.1-0.4-1.5,0l-10,10l-4.7-4.7
                      c-0.4-0.4-1.1-0.4-1.5,0L4.6,15c-0.4,0.4-0.4,1.1,0,1.5l7,7C12,23.9,12.7,23.9,13.1,23.4C13.1,23.4,13.1,23.4,13.1,23.4z"/>
                  </svg>
                  <span className={classes.adventageName}>Accompagnement personnalisé</span>
                </li>
                <li className={classes.adventage}>
                  <svg className={classes.svgAdventage} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 30 30" xmlSpace="preserve">
                    <path id="Icon_awesome-check-square" d="M26.8,30H3.2C1.4,30,0,28.6,0,26.8V3.2C0,1.4,1.4,0,3.2,0h23.6C28.6,0,30,1.4,30,3.2v23.6
                      C30,28.6,28.6,30,26.8,30z M13.1,23.4l12.3-12.3c0.4-0.4,0.4-1.1,0-1.5l-1.5-1.5c-0.4-0.4-1.1-0.4-1.5,0l-10,10l-4.7-4.7
                      c-0.4-0.4-1.1-0.4-1.5,0L4.6,15c-0.4,0.4-0.4,1.1,0,1.5l7,7C12,23.9,12.7,23.9,13.1,23.4C13.1,23.4,13.1,23.4,13.1,23.4z"/>
                  </svg>
                  <span className={classes.adventageName}>Contrats en ligne</span>
                </li>
                <li className={classes.adventage}>
                  <svg className={classes.svgAdventage} version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 30 30" xmlSpace="preserve">
                    <path id="Icon_awesome-check-square" d="M26.8,30H3.2C1.4,30,0,28.6,0,26.8V3.2C0,1.4,1.4,0,3.2,0h23.6C28.6,0,30,1.4,30,3.2v23.6
                      C30,28.6,28.6,30,26.8,30z M13.1,23.4l12.3-12.3c0.4-0.4,0.4-1.1,0-1.5l-1.5-1.5c-0.4-0.4-1.1-0.4-1.5,0l-10,10l-4.7-4.7
                      c-0.4-0.4-1.1-0.4-1.5,0L4.6,15c-0.4,0.4-0.4,1.1,0,1.5l7,7C12,23.9,12.7,23.9,13.1,23.4C13.1,23.4,13.1,23.4,13.1,23.4z"/>
                  </svg>
                  <span className={classes.adventageName}>Paiement à 45 jours</span>
                </li>
              </ul>
              <Link href="">
                <a className={classes.chooseBtn}>Choisir l'offre</a>
              </Link>
            </div>
        </div>
      </div>
  );
};
