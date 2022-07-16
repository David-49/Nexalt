import { FC } from 'react';

import { Group, ActionIcon, Text, Tooltip } from '@mantine/core';
import { IconPencil, IconX } from '@tabler/icons';
import { colors } from '../../theme';
import { IExperience } from '../../types/Experience';

interface IProps {
  onSetExperiences: (data: IExperience[]) => void;
  experiences: IExperience[];
  experience: IExperience;
}

const DisplayExperienceItem: FC<IProps> = (props) => {
  const { onSetExperiences, experiences, experience } = props;

  const handleRemoveExperience = (id: number) => {
    onSetExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const handleEditExperience = (id: number) => {
    const updatedExperience = experiences.map((exp) => {
      if (exp.id === id) {
        return { ...exp, edit: true };
      }
      return exp;
    });
    onSetExperiences(updatedExperience);
  };

  return (
    <Group
      direction="row"
      position="apart"
      style={{
        width: '100%',
        borderRadius: 15,
        backgroundColor: colors.primaryBackgroundColor,
        border: `solid 2px ${colors.primaryBlue}`,
        padding: 15,
      }}
    >
      <Text weight={800} color={colors.primaryBlue}>
        {experience.post} {experience.edit && 'true'}
      </Text>
      <Group spacing={10}>
        <Tooltip label="Mettre à jour">
          <ActionIcon
            onClick={() => handleEditExperience(experience.id)}
            style={{
              color: colors.primaryBlue,
            }}
          >
            <IconPencil />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Retirer l'expérience">
          <ActionIcon
            style={{ color: colors.secondaryBlue }}
            onClick={() => handleRemoveExperience(experience.id)}
          >
            <IconX />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Group>
  );
};

export default DisplayExperienceItem;
