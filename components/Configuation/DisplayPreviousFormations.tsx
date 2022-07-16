import { FC, useState } from 'react';

import { Group, TextInput, ActionIcon, Text, Tooltip } from '@mantine/core';
import { IconCheck, IconPencil, IconX } from '@tabler/icons';
import { colors } from '../../theme';
import { IFormation } from '../../types/Formation';

interface IProps {
  onSetPreviousFormations: (data: IFormation[]) => void;
  previousFormations: IFormation[];
  previousFormation: IFormation;
}

const DisplayPreviousFormations: FC<IProps> = (props) => {
  const { onSetPreviousFormations, previousFormations, previousFormation } =
    props;
  const [valueFormation, setValueFormation] = useState(
    previousFormation.label ?? ''
  );

  const handleEditPreviousFormations = (id: number) => {
    const updatedPreviousFormationsList = previousFormations.map(
      (formation) => {
        if (formation.id === id) {
          return { ...formation, edit: true };
        }
        return formation;
      }
    );
    onSetPreviousFormations(updatedPreviousFormationsList);
  };

  const handleUpdateFormation = (id: number) => {
    const updatedPreviousFormationsList = previousFormations.map(
      (formation) => {
        if (formation.id === id) {
          return { ...formation, edit: false, label: valueFormation };
        }
        return formation;
      }
    );
    onSetPreviousFormations(updatedPreviousFormationsList);
  };

  const handleRemoveFormation = (id: number) => {
    onSetPreviousFormations(previousFormations.filter((exp) => exp.id !== id));
  };

  return (
    <Group
      position="apart"
      align="center"
      p={5}
      pl={10}
      pr={10}
      style={{
        width: '100%',
        backgroundColor: colors.primaryBackgroundColor,
        borderRadius: 10,
        border: `solid 2px ${colors.primaryBlue}`,
      }}
    >
      {previousFormation.edit ? (
        <TextInput
          autoFocus
          variant="unstyled"
          value={valueFormation}
          onChange={(e) => setValueFormation(e.target.value)}
        />
      ) : (
        <Text style={{ color: colors.secondaryBlue }}>
          {previousFormation.label}
        </Text>
      )}
      <Group>
        {previousFormation.edit ? (
          <Tooltip label="Valider la modification">
            <ActionIcon
              style={{ color: 'green' }}
              onClick={() => handleUpdateFormation(previousFormation.id)}
            >
              <IconCheck />
            </ActionIcon>
          </Tooltip>
        ) : (
          <Tooltip label="Modifier l'information">
            <ActionIcon
              style={{ color: colors.primaryBlue }}
              onClick={() => handleEditPreviousFormations(previousFormation.id)}
            >
              <IconPencil />
            </ActionIcon>
          </Tooltip>
        )}
        <Tooltip label="Retirer de la liste">
          <ActionIcon
            style={{ color: colors.secondaryBlue }}
            onClick={() => handleRemoveFormation(previousFormation.id)}
          >
            <IconX />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Group>
  );
};

export default DisplayPreviousFormations;
