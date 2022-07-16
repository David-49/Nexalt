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
  subtitle: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    color: colors.secondaryBackgroundColor,
    width: '80%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 20,

  },
  category: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
    marginTop: 20,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    padding: 0,
    '@media (max-width: 1720px)': {
      width: '50%',
    },
  },
  categoryList: {
    listStyle: 'none',
  },
  categoryBtn: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 20,
    fontWeight: 700,
    color: colors.blackText,
    backgroundColor: colors.secondaryBackgroundColor,
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 15,
    paddingLeft: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    borderRadius: 15,
    transition: 'background-color .2s, color .2s',
    ':hover': {
      color: colors.secondaryBackgroundColor,
      backgroundColor: '#725FFE',
      transition: 'background-color .2s, color .2s',
    }
  },
}));

export const BlogCategories: FC<IProps> = (props) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title className={classes.title} order={2}>
          Catégories
        </Title>
        <p className={classes.subtitle}>Afin d’avoir une ressources qui colle au mieux à vos recherches, vous pouvez choisir entre les différentes catégories qui se proposent à vous.</p>
      </div>
      <ul className={classes.category}>
        <li className={classes.categoryList}>
          <Link href="">
            <a className={classes.categoryBtn}>CV</a>
          </Link>
        </li>
        <li className={classes.categoryList}>
          <Link href="">
            <a className={classes.categoryBtn}>Etudiants</a>
          </Link>
        </li>
        <li className={classes.categoryList}>
          <Link href="">
            <a className={classes.categoryBtn}>Entreprises</a>
          </Link>
        </li>
        <li className={classes.categoryList}>
          <Link href="">
            <a className={classes.categoryBtn}>Guides</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
