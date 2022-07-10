import { FC } from 'react';

import { createStyles, Group, Title } from '@mantine/core';
import { colors } from '../../theme';
import { StrongPointsCard } from './StrongPointsCard';

interface IProps {}

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
}));

export const StrongPoints: FC<IProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Group spacing={20} direction="column">
      <Title className={classes.title} order={2}>
        Nos points forts
      </Title>
      <Group grow spacing={44} position="apart">
        <StrongPointsCard
          contentCard="Trouvez facilement des alternants pour votre entreprise et
              contactez gratuitement les profils vérifiés de votre choix."
          backgroundColor={colors.secondaryBlue}
          textColor="#FFFFFF"
          iconColor="#FFFFFF"
        />
        <StrongPointsCard
          contentCard="Une plateforme qui vous comprend. Notre équipe est composée d’étudiants qui ont eux aussi eu des difficultés à trouver une alternance."
          backgroundColor={colors.secondaryBlue}
          textColor="#FFFFFF"
          iconColor="#FFFFFF"
        />
        <StrongPointsCard
          contentCard="Vous souhaitez souscrire à un abonnement ? Nous vous promettons une alternance trouvée en moins de 2 mois !"
          backgroundColor={colors.secondaryBlue}
          textColor="#FFFFFF"
          iconColor="#FFFFFF"
        />
        <StrongPointsCard
          contentCard="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
          backgroundColor={colors.secondaryBlue}
          textColor="#FFFFFF"
          iconColor="#FFFFFF"
        />
      </Group>
    </Group>
  );
};
