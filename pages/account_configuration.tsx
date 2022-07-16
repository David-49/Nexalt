import { FC, useEffect, useMemo, useState } from 'react';

import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
} from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { IconChevronLeft } from '@tabler/icons';
import { useRouter } from 'next/router';
import { colors } from '../theme';
import StatusSelector from '../components/Configuation/StatusSelector';
import FirstStepStudent from '../components/Configuation/FirstStepStudent';
import SecondStepStudent from '../components/Configuation/SecondStepStudent';
import { IProfil } from '../types/Profil';

interface IProps {}

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: '100vh',
    backgroundColor: '#fff',
  },
  main: {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'stretch',
  },
  leftSide: {
    backgroundColor: colors.primaryBlue,
    borderBottomRightRadius: 50,
    width: '30%',
    paddingTop: 56,
    paddingLeft: 50,
  },
  leftSideChild: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '80%',
    paddingRight: 40,
  },
  titleLeftSide: {
    fontWeight: 800,
    fontSize: 40,
    color: '#fff',
    marginBottom: 23,
  },
  description: {
    fontWeight: 600,
    color: '#fff',
    fontSize: 24,
  },
  rightSide: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
  },
  titleRightSide: {
    fontSize: 40,
    fontWeight: 800,
  },
  backBtn: {
    fontWeight: 800,
    transition: 'ease 0.3s',
    ':hover': {
      backgroundColor: '#ebebeb',
      transition: 'ease 0.3s',
    },
  },
  skipBtn: {
    fontWeight: 800,
    color: colors.primaryBlue,
    backgroundColor: colors.primaryBackgroundColor,
    width: 300,
    transition: 'ease 0.3s',
    ':hover': {
      backgroundColor: '#dfdbff',
      transition: 'ease 0.3s',
    },
  },
  nextBtn: {
    backgroundColor: colors.primaryBlue,
    fontWeight: 800,
    color: '#fff',
    width: 300,
    transition: 'ease 0.3s',
    ':hover': {
      backgroundColor: colors.secondaryBlue,
      transition: 'ease 0.3s',
    },
  },
}));

const PRESENTATION_STEP_STUDENT = [
  {
    label: 'Dites nous en plus sur vous.',
    description:
      'Pour le bon fonctionnement de la plateforme mais aussi pour que vous soyez le mieux référencé, remplissez au mieux ces informations.',
  },
  {
    label: 'Quel est votre parcours professionnel ?',
    description:
      'Pour aider les employeurs à mieux se projeter sur vos expériences et vos compétences, décrivez votre parcours le plus précisément possible.',
  },
];

const PRESENTATION_STEP_COMPANY = [
  {
    label: 'Dites nous en plus sur votre entreprise.',
    description:
      'Aidez les candidats à en apprendre plus sur votre entreprise facilement.',
  },
  {
    label: 'Dernière étape.',
    description:
      "Complétez ces dernières informations pour accéder à des centaines de profils étudiants en recherche d'alternance.",
  },
];

const AccountConfiguration: FC<IProps> = (props) => {
  const { classes } = useStyles();
  const router = useRouter();
  const [statusSelected, setStatusSelected] = useState<string>('');
  const [activeSteps, setActiveSteps] = useState(-1);
  const [profilInfos, setProfilInfos] = useState<IProfil>({});

  const STEPS_COMPONENTS_STUDENT = [
    <FirstStepStudent
      onSetProfilInfos={setProfilInfos}
      profilInfos={profilInfos}
    />,
    <SecondStepStudent
      onSetProfilInfos={setProfilInfos}
      profilInfos={profilInfos}
    />,
  ];

  useEffect(() => {
    if (statusSelected === 'companies') {
      setProfilInfos({
        localization: '',
        skill: [],
        previousFormations: [],
        formation: '',
        description: '',
        searchZone: [],
        experiences: [],
      });
    }
  }, [statusSelected]);

  const handleSkipStep = () => {
    if (activeSteps === 0) {
      setActiveSteps((previousSteps) => previousSteps + 1);
      setProfilInfos({
        ...profilInfos,
        localization: '',
        skill: [],
        description: '',
        searchZone: [],
      });
    }
    if (activeSteps === 1) {
      setProfilInfos({
        ...profilInfos,
        previousFormations: [],
        formation: '',
        experiences: [],
      });
      router.push('/dashboard');
    }
  };

  const STEPS_COMPONENTS_COMPANY = [
    <p>Premère étape entreprise</p>,
    <p>Deuxième étape entreprise</p>,
  ];

  const handleGoToPreviousSteps = () => {
    setActiveSteps((previousSteps) => previousSteps - 1);
  };

  const handleGoToNextSteps = () => {
    if (activeSteps === 0) {
      setActiveSteps((previousSteps) => previousSteps + 1);
    }
    if (activeSteps === 1 && statusSelected === 'student') {
      router.push('/profilePage');
    }
  };

  const label = useMemo(() => {
    if (activeSteps > 0) {
      if (statusSelected === 'student') {
        return PRESENTATION_STEP_STUDENT[activeSteps].label;
      }
      if (statusSelected === 'companies') {
        return PRESENTATION_STEP_COMPANY[activeSteps].label;
      }
    }
    return 'Quelle est votre situation ?';
  }, [activeSteps, statusSelected]);

  const description = useMemo(() => {
    if (activeSteps > 0) {
      if (statusSelected === 'student') {
        return PRESENTATION_STEP_STUDENT[activeSteps].description;
      }
      if (statusSelected === 'companies') {
        return PRESENTATION_STEP_COMPANY[activeSteps].description;
      }
    }
    return 'Deux types de comptes sont disponibles sur nexalt pour son bon fonctionnement.';
  }, [activeSteps, statusSelected]);

  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <div className={classes.leftSide}>
          <Link href="/">
            <a>
              <Image
                src="/assets/logo_blanc.svg"
                alt="Logo de Nexalt"
                width={120}
                height={40}
                priority
              />
            </a>
          </Link>
          <div className={classes.leftSideChild}>
            <Title className={classes.titleLeftSide} order={2}>
              {label}
            </Title>
            <Text className={classes.description}>{description}</Text>
          </div>
        </div>
        <Container
          pt={80}
          pl={100}
          pr={100}
          pb={80}
          fluid
          className={classes.rightSide}
        >
          <Title pb={60} className={classes.titleRightSide} order={1}>
            Inscription
          </Title>
          {activeSteps === -1 && (
            <StatusSelector
              onSetActiveSteps={setActiveSteps}
              onSetStatusUser={setStatusSelected}
              statusUserSelected={statusSelected}
            />
          )}
          {statusSelected === 'student' && (
            <div style={{ paddingBottom: 50 }}>
              {STEPS_COMPONENTS_STUDENT[activeSteps]}
            </div>
          )}
          {statusSelected === 'companies' &&
            STEPS_COMPONENTS_COMPANY[activeSteps]}
          {activeSteps >= 0 && (
            <Group
              align="center"
              position="apart"
              style={{ marginTop: 'auto' }}
            >
              <Button
                size="xl"
                radius={15}
                variant="subtle"
                leftIcon={<IconChevronLeft />}
                className={classes.backBtn}
                onClick={() => handleGoToPreviousSteps()}
              >
                Précédent
              </Button>
              <Group align="center" spacing={20}>
                <Button
                  radius={15}
                  className={classes.skipBtn}
                  size="xl"
                  variant="light"
                  onClick={() => handleSkipStep()}
                >
                  Remplir plus tard
                </Button>
                <Button
                  className={classes.nextBtn}
                  radius={15}
                  size="xl"
                  onClick={() => handleGoToNextSteps()}
                >
                  {activeSteps === 1 ? 'Terminer' : 'Suivant'}
                </Button>
              </Group>
            </Group>
          )}
        </Container>
      </main>
    </div>
  );
};

export default AccountConfiguration;
