import { FC } from 'react';

import { Button, createStyles, Group, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { CardPrice } from '../../components/HomePage/CardPrice';
import { colors } from '../../theme';

interface IProps {}

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans-serif',
    color: '#fff',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#fff',
    color: colors.secondaryBlue,
    width: 314,
    height: 65,
    fontSize: 25,
    marginTop: 45,
  },
  text: {
    width: '80%',
  },
}));

export const PricesPlansPresentation: FC<IProps> = (props) => {
  const { classes } = useStyles();
  return (
    <Group direction="row" grow>
      <Stack>
        <Title order={2} className={classes.title}>
          Offres et tarifs
        </Title>
        <Text color="#fff" className={classes.text}>
          Nexalt Pro vous permet d’accéder à plus de fonctionnalités pour
          trouver au plus vite votre alternant ou votre future entreprise.
          Sélectionner l’offre qui vous convient (étudiant ou entreprise) pour
          découvrir nos offres.
        </Text>
        <Link href="/learnMore" passHref>
          <Button component="a" radius={10} className={classes.btn}>
            EN SAVOIR PLUS
          </Button>
        </Link>
      </Stack>
      <Group spacing={65} align="flex-end" noWrap>
        <CardPrice
          linkUrl="/auth/signup"
          cardTitle="Formule Étudiante"
          price="0"
          labelBtn="Je m'inscris"
          listData={[
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
          ]}
        />
        <CardPrice
          linkUrl="/prices"
          cardTitle="Formule Entreprise"
          price="200-1000"
          labelBtn="Voir les tarifs"
          listData={[
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
          ]}
        />
      </Group>
    </Group>
  );
};
