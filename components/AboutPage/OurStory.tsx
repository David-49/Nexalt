import { FC } from 'react';

import { createStyles, Title } from '@mantine/core';
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 20,

  },
  storyContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 30,
    gridAutoRows: 'minmax(100px, auto',
  },
  story: {
    backgroundColor: colors.secondaryBlue,
    borderRadius: 20,
    paddingTop: 23,
    paddingRight: 25,
    paddingBottom: 23,
    paddingLeft: 25,
  },
  subtitle: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    color: colors.secondaryBackgroundColor,
    width: '100%',
  },
  storyNumber: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: 35,
    color: colors.secondaryBackgroundColor,
  },
  storyText: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    color: colors.secondaryBackgroundColor,
    marginTop: 10,
    marginBottom: 0,

  },
}));

export const OurStory: FC<IProps> = (props) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title className={classes.title} order={2}>
          Notre histoire
        </Title>
        <p className={classes.subtitle}>En souscrivant à cette option, cela vous assure de remonter dans le classement des offres et d’avoir un placement privilégié.
          Qu’attendez-vous ?</p>
      </div>
      <div className={classes.storyContent}>
        <div className={classes.story}>
          <span className={classes.storyNumber}>01.</span>
          <p className={classes.storyText}>Pourquoi Nexalt ? Voici la contraction de «Nexus» et d’«alternance» ; qui représentent le lien entre les personnes, et ici ce sont les étudiants en recherche d’alternance.</p>
        </div>
        <div className={classes.story}>
          <span className={classes.storyNumber}>02.</span>
          <p className={classes.storyText}>Notre but est de créer une plate-forme pour tous. Que vous soyez professionnel ou étudiant, Nexalt fera tout son possible pour vous satisfaire.
          </p>
        </div>
        <div className={classes.story}>
          <span className={classes.storyNumber}>03.</span>
          <p className={classes.storyText}>Nous souhaitons avoir un effet gagnant-gagnant : toutes les entreprises trouvent leur perle rare tandis que les étudiants, ont leur nouvelle entreprise pour la rentrée. </p>
        </div>
      </div>
    </div>
  );
};
