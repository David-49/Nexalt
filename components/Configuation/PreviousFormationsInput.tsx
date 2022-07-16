import { FC, useState } from 'react';

import { createStyles, Group, TextInput, Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons';
import { colors } from '../../theme';
import { IFormation } from '../../types/Formation';
import DisplayPreviousFormations from './DisplayPreviousFormations';

interface IProps {
  onSetPreviousFormations: (data: IFormation[]) => void;
  previousFormations: IFormation[];
}

const useStyles = createStyles((theme) => ({
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

const PreviousFormationsInput: FC<IProps> = (props) => {
  const { classes } = useStyles();
  const { onSetPreviousFormations, previousFormations } = props;
  const [valueFormation, setValueFormation] = useState('');

  const handleAddNewFormation = () => {
    onSetPreviousFormations([
      ...previousFormations,
      { id: Math.floor(Math.random() * 1000), label: valueFormation },
    ]);
  };

  return (
    <Group direction="column" style={{ width: '100%' }}>
      <TextInput
        classNames={{
          label: classes.label,
          description: classes.description,
          input: classes.input,
        }}
        label="Vos formations terminées"
        description="Indiquez vos formations terminées"
        placeholder="Ex : Lycée Chevrollier…"
        variant="filled"
        size="lg"
        className={classes.containerInput}
        onChange={(e) => setValueFormation(e.target.value)}
      />
      <Group direction="column" spacing={5} style={{ width: '100%' }}>
        {previousFormations.map((formation) => (
          <div key={formation.id} style={{ width: '100%' }}>
            <DisplayPreviousFormations
              onSetPreviousFormations={onSetPreviousFormations}
              previousFormations={previousFormations}
              previousFormation={formation}
            />
          </div>
        ))}
      </Group>
      <Button
        radius={15}
        size="md"
        style={{
          backgroundColor: colors.primaryBlue,
          color: '#fff',
          alignSelf: 'flex-end',
        }}
        onClick={() => handleAddNewFormation()}
        leftIcon={<IconPlus />}
      >
        Ajouter une formation
      </Button>
    </Group>
  );
};

export default PreviousFormationsInput;
