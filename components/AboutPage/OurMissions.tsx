import { FC } from 'react';

import { createStyles, Text } from '@mantine/core';
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
    width: 1052,
  },
  missionDescription: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 20,
    marginBottom: 50,
    textAlign: 'center',
    width: '100%',
  },
  statsContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 130,
    gridAutoRows: 'minmax(100px, auto)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statsNumber: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: 55,
    color: colors.primaryBlue,
  },
  statsText: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 20,
    color: colors.blackText,
    textAlign: 'center',
  },

}));

export const OurMissions: FC<IProps> = () => {
  const { classes } = useStyles();
  return (
      <div className={classes.container}>
        <Text className={classes.title}>
          Notre mission
        </Text>
        <p className={classes.missionDescription}>Nous mettons tout en œuvre, avec notre équipe, pour que cette mission soit concrétiser le plus rapidement et efficacement possible.</p>
        <div className={classes.statsContent}>
          <div className={classes.content}>
            <span className={classes.statsNumber}>94%</span>
            <p className={classes.statsText}> Des alternants ont trouvés
              leur entreprise grâce à nous</p>
          </div>
          <div className={classes.content}>
            <span className={classes.statsNumber}>5738</span>
            <p className={classes.statsText}> Profils étudiants postés</p>
          </div>
          <div className={classes.content}>
            <span className={classes.statsNumber}>5126</span>
            <p className={classes.statsText}> Entreprises qui ont indiqué
              les postes qu’elle pourvoit </p>
          </div>
        </div>
      </div>
  );
};
