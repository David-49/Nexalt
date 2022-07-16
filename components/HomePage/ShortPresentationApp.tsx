import { FC } from 'react';

import { Button, createStyles, Group, Stack, Title } from '@mantine/core';
import Link from 'next/link';
import { colors } from '../../theme';
import { StrongPointsCard } from './StrongPointsCard';

interface IProps {}

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 800,
    fontSize: 40,
    width: '70%',
    textAlign: 'center',
    marginBottom: 60,
  },
  firstBtn: {
    fontSize: 24,
    color: colors.primaryBlue,
    backgroundColor: '#fff',
    height: 64,
    boxShadow: '0px 5px 15px #0000001A',
  },
  secondBtn: {
    fontSize: 24,
    backgroundColor: colors.primaryBlue,
    height: 64,
    boxShadow: '0px 5px 15px #0000001A',
    fontWeight: 800,
    transition: 'background-color .2s',
    ':hover': {
      backgroundColor: '#725FFE',
      transition: 'background-color .2s',
    },
  },
  containerCard: {
    alignItems: 'stretch',
  },
}));

export const ShortPresentation: FC<IProps> = (props) => {
  const { classes } = useStyles();
  return (
    <Stack align="center">
      <Title order={2} className={classes.title}>
        Bienvenue sur la meilleure plateforme de recherche d'alternance
      </Title>
      <Group spacing={60} className={classes.containerCard}>
        <StrongPointsCard
          backgroundColor="#fff"
          iconColor={colors.primaryBlue}
          contentCard="Trouvez facilement des alternants pour votre entreprise et contactez gratuitement les profils vérifiés de votre choix."
          textColor="#0F0C29"
          boxShadow="0px 5px 14px #0000001A"
        />
        <StrongPointsCard
          backgroundColor="#fff"
          iconColor={colors.primaryBlue}
          contentCard="Renseignez vos informations en complétant tous les champs, pour une meilleure optimisation de votre profil."
          textColor="#0F0C29"
          boxShadow="0px 5px 14px #0000001A"
        />
        <StrongPointsCard
          backgroundColor="#fff"
          iconColor={colors.primaryBlue}
          contentCard="Nous offrons des conseils provenant de nos experts pour parfaire vos documents tels que votre lettre de motivation, cv…"
          textColor="#0F0C29"
          boxShadow="0px 5px 14px #0000001A"
        />
      </Group>
      <Group spacing={40} style={{ marginTop: 70 }}>
        <Link href="/auth/signup" passHref>
          <Button component="a" radius={10} className={classes.secondBtn}>
            JE CRÉÉ MON PROFIL
          </Button>
        </Link>
      </Group>
    </Stack>
  );
};
