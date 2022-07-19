import { FC } from 'react';

import { Button, createStyles, Group, Title } from '@mantine/core';
import Link from 'next/link';
import { colors } from '../../theme';
import { StrongPointsCard } from './StrongPointsCard';

interface IProps {}

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 60,
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center',
  },
  btn: {
    fontSize: 24,
    fontWeight: 800,
    height: 55,
    marginTop: 60,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 45,
    paddingRight: 45,
    color: colors.primaryBlue,
    backgroundColor: '#fff',
    boxShadow: '0px 5px 15px #0000001A',
    transition: 'background-color .2s, color .2s',
    ':hover': {
      backgroundColor: colors.primaryBlue,
      color: colors.secondaryBackgroundColor,
      transition: 'background-color .2s, color .2s',
    },
  },
  containerCard: {
    alignItems: 'stretch',
  },
}));

export const PlatformOperation: FC<IProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Group direction="column" align="center">
      <Title className={classes.title} order={2}>
        Fonctionnement de la plateforme
      </Title>
      <Group
        grow
        spacing={44}
        position="apart"
        className={classes.containerCard}
      >
        <StrongPointsCard
          contentCard="Inscrivez-vous en tant qu’étudiant ou entreprise et renseignez vos informations personnelles."
          backgroundColor="#fff"
          textColor="#0F0C29"
          iconColor="#5f50cf"
          boxShadow="0px 5px 14px #0000001A"
        />
        <StrongPointsCard
          contentCard="Vous êtes étudiant : indiquez votre situation, donnez des informations sur vous, indiquez des informations sur votre projet professionnel"
          backgroundColor="#fff"
          textColor="#0F0C29"
          iconColor="#5f50cf"
          boxShadow="0px 5px 14px #0000001A"
        />
        <StrongPointsCard
          contentCard="Vous êtes une entreprise : présentez votre entreprise, indiquez les postes que vous recherchez."
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
      <Link href="/research" passHref>
        <Button component="a" radius={10} className={classes.btn}>
          VOIR LA RECHERCHE
        </Button>
      </Link>
    </Group>
  );
};
