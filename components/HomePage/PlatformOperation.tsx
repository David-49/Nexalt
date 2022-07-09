import { FC } from 'react';

import { Button, createStyles, Group, Title } from '@mantine/core';
import { colors } from '../../theme';
import { StrongPointsCard } from './StrongPointsCard';

interface IProps {}

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 60,
    fontFamily: 'Poppins, sans-serif',
  },
  btn: {
    fontSize: 24,
    fontWeight: 'bold',
    height: 55,
    marginTop: 60,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 45,
    paddingRight: 45,
    color: colors.primaryBlue,
    backgroundColor: '#fff',
    boxShadow: '0px 5px 15px #0000001A',
  },
}));

export const PlatformOperation: FC<IProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Group direction="column" align="center">
      <Title className={classes.title} order={2}>
        Fonctionnement de la plateforme
      </Title>
      <Group grow spacing={44} position="apart" noWrap>
        <StrongPointsCard
          contentCard="Inscrivez-vous en tant qu’étudiant ou entreprise et renseignez vos informations personnelles."
          backgroundColor="#fff"
          textColor="#0F0C29"
          iconColor="#5f50cf"
          boxShadow="0px 5px 14px #0000001A"
        />
        <StrongPointsCard
          contentCard="Vous êtes étudiant :"
          backgroundColor="#fff"
          textColor="#0F0C29"
          iconColor="#5f50cf"
          boxShadow="0px 5px 14px #0000001A"
        />
        <StrongPointsCard
          contentCard="Vous êtes une entreprise :"
          backgroundColor="#fff"
          textColor="#0F0C29"
          iconColor="#5f50cf"
          boxShadow="0px 5px 14px #0000001A"
        />
        <StrongPointsCard
          contentCard="Trouvez facilement des alternants pour votre entreprise et contactez gratuitement les profils vérifiés de votre choix."
          backgroundColor="#fff"
          textColor="#0F0C29"
          iconColor="#5f50cf"
          boxShadow="0px 5px 14px #0000001A"
        />
      </Group>
      <Button radius={10} className={classes.btn}>
        VOIR LA RECHERCHE
      </Button>
    </Group>
  );
};
