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

export const OurVision: FC<IProps> = () => {
  const { classes } = useStyles();
  return (
      <div className={classes.container}>
        <Text className={classes.title}>
         Notre Vision
        </Text>
        <p className={classes.missionDescription}>Nous ambitionnons que toutes personnes s’inscrivant sur notre plateforme trouvera sa perle, que vous soyez un étudiant ou un professionnel.
          Nous souhaitons également apporter un accompagnement pour les recherches et de nombreux conseils pour préparer au mieux votre futur.</p>
        <p className={classes.missionDescription}>Les chiffres des contrats d’apprentissage sont en constante évolution.
          Actuellement, 6 jeunes sur 10 sont en emploi à l’issue de leur alternance. Nous nous projetons sur un chiffre allant de 7 à 8 jeunes qui seront en emploi à la fin de leurs études en alternance. </p>
      </div>
  );
};
