import { ReactElement, ReactNode, useState } from 'react';

import { NextPage } from 'next';
import {
  Container,
  createStyles,
  Group,
  Title,
  Text,
  Button,
} from '@mantine/core';
import { ConfigurationLayout } from '../components/Layout/ConfigurationLayout';
import { colors } from '../theme';
import StatusSelector from '../components/Configuation/StatusSelector';

type PageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

// const DEFAULT_STATUS_STEPS_VALIDATION_STUDENT = [
//   { id: 1, step1: false, skip: false },
//   { id: 2, step2: false, skip: false },
//   { id: 3, step3: false, skip: false },
// ];

// const DEFAULT_STATUS_STEPS_VALIDATION_COMPANY = [
//   { id: 1, step1: false, skip: false },
// ];

const AccountConfiguration: PageWithLayout = () => {
  const [statusSelected, setStatusSelected] = useState<string | null>(null);
  const [activeSteps, setActiveSteps] = useState(0);
  // const [currentSteps, setCurrentSteps] = useState(
  //   DEFAULT_STATUS_STEPS_VALIDATION_STUDENT
  // );

  const STEPS_COMPONENTS_STUDENT = [
    <p>Premère étape étudiant</p>,
    <p>Deuxième étape étudiant</p>,
    <p>Troisième étape étudiant</p>,
  ];

  const STEPS_COMPONENTS_COMPANY = [<p>Premère étape entreprise</p>];

  const handleGoToPreviousSteps = () => {
    if (activeSteps === 0) {
      setStatusSelected(null);
    } else {
      setActiveSteps((previousSteps) => previousSteps - 1);
    }
  };

  const handleGoToNextSteps = () => {
    setActiveSteps((previousSteps) => previousSteps + 1);
  };

  return (
    <>
      {!statusSelected && (
        <StatusSelector
          onSetActiveSteps={setActiveSteps}
          onSetStatusUser={setStatusSelected}
        />
      )}
      {statusSelected === 'student' && STEPS_COMPONENTS_STUDENT[activeSteps]}
      {statusSelected === 'companies' && STEPS_COMPONENTS_COMPANY[activeSteps]}
      <Button onClick={() => handleGoToPreviousSteps()} color="blue">
        Retour
      </Button>
      <Button onClick={() => handleGoToNextSteps()} color="grape">
        Suivant
      </Button>
    </>
  );
};

AccountConfiguration.getLayout = function getLayout(page: ReactElement) {
  return (
    <ConfigurationLayout
      title="Quelle est votre situation ?"
      description="Deux types de comptes sont disponibles sur nexalt pour son bon fonctionnement."
    >
      {page}
    </ConfigurationLayout>
  );
};

export default AccountConfiguration;
