import { FC, useState } from 'react';

import {
  Container,
  createStyles,
  Group,
  Title,
  Text,
  Button,
} from '@mantine/core';
import { colors } from '../../theme';

interface IProps {
  onSetActiveSteps: (data: number) => void;
  onSetStatusUser: (value: string) => void;
}

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  title: {
    fontSize: 40,
    fontWeight: 800,
  },
  btnSelectionStatus: {
    backgroundColor: colors.primaryBackgroundColor,
    height: 387,
    width: '45%',
    minWidth: 328,
    ':hover': {
      backgroundColor: '#eeeeee',
    },
  },
  selectedBtn: {
    border: `solid 2px ${colors.primaryBlue}`,
  },
  titleBtn: {
    color: '#0F0C29CC',
  },
  descriptionActionBtn: {
    color: '#0F0C2980',
    fontSize: 20,
    whiteSpace: 'normal',
  },
  btnValidation: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primaryBlue,
    width: 350,
    marginTop: 60,
    fontSize: 20,
    fontWeight: 800,
    fontFamily: 'Montserrat',
    transition: 'ease 0.3s',
    ':hover': {
      backgroundColor: colors.secondaryBlue,
      transition: 'ease 0.3s',
    },
  },
}));

const StatusSelector: FC<IProps> = (props) => {
  const { classes } = useStyles();
  const { onSetActiveSteps, onSetStatusUser } = props;
  const [statusSelected, setStatusSelected] = useState<string | null>(null);

  const handleOnValidation = () => {
    onSetStatusUser(statusSelected!);
    onSetActiveSteps(0);
  };

  return (
    <Container
      pt={114}
      pl={100}
      pr={100}
      pb={150}
      className={classes.container}
      fluid
    >
      <Title pb={60} className={classes.title} order={1}>
        Inscription
      </Title>
      <Group spacing={50} position="apart">
        <Button
          radius={15}
          className={`${classes.btnSelectionStatus} ${
            statusSelected === 'student' && classes.selectedBtn
          }`}
          component="div"
          onClick={() => setStatusSelected('student')}
        >
          <Group direction="column" align="flex-start">
            <Text className={classes.titleBtn} weight={800}>
              Étudiant
            </Text>
            <Text weight={400} className={classes.descriptionActionBtn}>
              Créez votre profil étudiant, renseignez vos compétences,
              expériences ou encore votre formation et faites vous remarquer par
              des centaines d'entreprises en France
            </Text>
          </Group>
        </Button>
        <Button
          radius={15}
          className={`${classes.btnSelectionStatus} ${
            statusSelected === 'companies' && classes.selectedBtn
          }`}
          component="div"
          onClick={() => setStatusSelected('companies')}
        >
          <Group direction="column" align="flex-start">
            <Text className={classes.titleBtn} weight={800}>
              Entreprise
            </Text>
            <Text weight={400} className={classes.descriptionActionBtn}>
              Recherchez parmi des milliers d'étudiants en recherche
              d'alternance dans votre domaine d'expertise.
              <br />
              <br />
              Consultez leurs profils à la recherche des compétences requises
              pour le poste ou encore les différents travaux de l'étudiant.
            </Text>
          </Group>
        </Button>
      </Group>
      <Button
        radius={15}
        className={classes.btnValidation}
        size="xl"
        disabled={!statusSelected}
        onClick={() => handleOnValidation()}
      >
        Suivant
      </Button>
    </Container>
  );
};

export default StatusSelector;