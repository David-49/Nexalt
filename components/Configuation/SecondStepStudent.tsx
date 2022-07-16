import { FC, useEffect, useState } from 'react';

import {
  Container,
  createStyles,
  Group,
  TextInput,
  Text,
  Divider,
} from '@mantine/core';
import { colors } from '../../theme';
import ExperiencesInput from './ExperiencesInput';
import { IExperience } from '../../types/Experience';
import PreviousFormationsInput from './PreviousFormationsInput';
import { IFormation } from '../../types/Formation';
import DisplayExperienceItem from './DisplayExperienceItem';
import { IProfil } from '../../types/Profil';

interface IProps {
  onSetProfilInfos: (data: IProfil) => void;
  profilInfos: IProfil;
}

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 0,
    gap: 50,
  },
  form: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 50,
  },
  containerLeftSide: { width: '50%' },
  containerRightSide: {
    width: '50%',
  },
  containerInput: {
    width: '100%',
  },
  label: {
    fontWeight: 800,
    fontSize: 24,
  },
  description: {
    fontSize: 16,
  },
  input: {
    borderWidth: 2,
    ':focus': {
      border: `solid 2px ${colors.primaryBlue}`,
    },
  },
}));

const SecondStepStudent: FC<IProps> = (props) => {
  const { classes } = useStyles();
  const { profilInfos, onSetProfilInfos } = props;
  const [experiences, setExperiences] = useState<IExperience[]>(
    profilInfos.experiences ?? []
  );
  const [actualFormation, setActualFormation] = useState(profilInfos.formation);
  const [previousFormations, setPreviousFormations] = useState<IFormation[]>(
    profilInfos.previousFormations ?? []
  );

  useEffect(() => {
    onSetProfilInfos({
      ...profilInfos,
      previousFormations,
      formation: actualFormation,
      experiences,
    });
  }, [previousFormations, actualFormation, experiences]);

  return (
    <Container className={classes.container} fluid>
      <Group className={classes.containerLeftSide} direction="column">
        <Group direction="column" spacing={2}>
          <Text className={classes.label}>Vos expériences</Text>
          <Text className={classes.description}>
            Indiquez ce que vous voulez faire savoir aux entreprises qui vont
            vous recruter.
          </Text>
          <Group
            style={{
              width: '100%',
              overflowY: 'auto',
            }}
            mb={10}
          >
            {experiences.map((exp) =>
              !exp.edit ? (
                <div key={exp.id} style={{ width: '100%' }}>
                  <DisplayExperienceItem
                    onSetExperiences={setExperiences}
                    experiences={experiences}
                    experience={exp}
                  />
                </div>
              ) : (
                <ExperiencesInput
                  edit
                  onSetExperiences={setExperiences}
                  experiences={experiences}
                  experience={exp}
                />
              )
            )}
          </Group>

          <Divider mt={10} mb={10} style={{ width: '100%' }} />
          <ExperiencesInput
            onSetExperiences={setExperiences}
            experiences={experiences}
          />
        </Group>
      </Group>
      <Group
        direction="column"
        spacing={50}
        className={classes.containerRightSide}
      >
        <TextInput
          classNames={{
            label: classes.label,
            description: classes.description,
            input: classes.input,
          }}
          onChange={(e) => setActualFormation(e.target.value)}
          value={actualFormation}
          label="Votre formation actuelle"
          description="Indiquez votre formation actuelle"
          placeholder="Ex : étudiant à MyDigitalSchool Angers..."
          variant="filled"
          size="lg"
          className={classes.containerInput}
        />
        <PreviousFormationsInput
          onSetPreviousFormations={setPreviousFormations}
          previousFormations={previousFormations}
        />
      </Group>
    </Container>
  );
};

export default SecondStepStudent;
