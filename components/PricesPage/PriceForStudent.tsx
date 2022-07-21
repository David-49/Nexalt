import { FC } from 'react';

import { createStyles, Title } from '@mantine/core';
import Link from "next/link";
import { colors } from '../../theme';


interface IProps {}

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 40,
    fontWeight: 800,
    color: '#fff',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 1000,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  forStudentPrice: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: 35,
    color: colors.secondaryBackgroundColor,
  },
  forStudentText: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    color: colors.secondaryBackgroundColor,
  },
  visibilityBtn: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: 20,
    color: colors.primaryBlue,
    backgroundColor: colors.secondaryBackgroundColor,
    paddingTop: 15,
    paddingRight: 40,
    paddingBottom: 15,
    paddingLeft: 40,
    borderRadius: 15,
    transition: 'background-color .2s, color .2s',
    ':hover': {
      color: colors.secondaryBackgroundColor,
      backgroundColor: '#725FFE',
      transition: 'background-color .2s, color .2s',
    }
  },
}));

export const PriceForStudent: FC<IProps> = (props) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title className={classes.title} order={2}>
          Pour les étudiants
        </Title>
        <span className={classes.forStudentPrice}>20€/mois</span>
      </div>
      <p className={classes.forStudentText}>En souscrivant à cette option, cela vous assure de remonter dans le classement des offres et d’avoir un placement privilégié.
          Qu’attendez-vous ?</p>
      <Link href="">
        <a className={classes.visibilityBtn}>J'augmente ma visibilité</a>
      </Link>
    </div>
  );
};
