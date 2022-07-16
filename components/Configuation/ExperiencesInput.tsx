import { FC, useState } from 'react';

import {
  createStyles,
  Group,
  TextInput,
  Textarea,
  Autocomplete,
  Button,
  ActionIcon,
  Tooltip,
} from '@mantine/core';
import { IconDeviceFloppy, IconPlus, IconX } from '@tabler/icons';
import { colors } from '../../theme';
import { IExperience } from '../../types/Experience';

interface IProps {
  edit?: boolean;
  onSetExperiences: (data: IExperience[]) => void;
  experiences: IExperience[];
  experience?: IExperience;
}

const useStyles = createStyles((theme) => ({
  styleAdd: {
    backgroundColor: colors.primaryBackgroundColor,
    borderRadius: 15,
    border: `solid 2px ${colors.secondaryBlue}`,
    width: '100%',
  },
  styleEdit: {
    backgroundColor: colors.primaryBackgroundColor,
    borderRadius: 15,
    border: `solid 2px ${colors.primaryBlue}`,
    width: '100%',
  },
  btnAdd: { backgroundColor: '#fff', color: colors.secondaryBlue },
  btnEdit: { backgroundColor: '#fff', color: colors.primaryBlue },
  inputAdd: {
    borderWidth: 2,
    ':focus': {
      borderWidth: 2,
      borderColor: colors.secondaryBlue,
    },
  },
  inputEdit: {
    borderWidth: 2,
    ':focus': {
      borderWidth: 2,
      borderColor: colors.primaryBlue,
    },
  },
}));

const ExperiencesInput: FC<IProps> = (props) => {
  const { classes } = useStyles();
  const { edit, onSetExperiences, experiences, experience } = props;
  const [company, setCompany] = useState(experience?.company ?? '');
  const [post, setPost] = useState(experience?.post ?? '');
  const [localization, setLocalization] = useState(
    experience?.localization ?? ''
  );
  const [duration, setDuration] = useState(experience?.duration ?? '');
  const [description, setDescription] = useState(experience?.description ?? '');

  const handleAddNewExperience = () => {
    if (edit) {
      const updatedExperience = experiences.map((exp) => {
        if (exp.id === experience?.id) {
          return {
            ...experience,
            company,
            post,
            localization,
            description,
            duration,
            edit: false,
          };
        }
        return exp;
      });
      return onSetExperiences(updatedExperience);
    }
    return onSetExperiences([
      ...experiences,
      {
        id: Math.floor(Math.random() * 1000),
        company,
        post,
        localization,
        duration,
        description,
        edit: false,
      },
    ]);
  };

  const handleCancelUpdate = () => {
    const updatedExperience = experiences.map((exp) => {
      if (exp.id === experience?.id) {
        return {
          ...experience,
          edit: false,
        };
      }
      return exp;
    });
    onSetExperiences(updatedExperience);
  };

  const handleRemoveExperience = () => {
    onSetExperiences(experiences.filter((exp) => exp.id !== experience?.id));
  };

  return (
    <Group
      direction="column"
      p={15}
      className={edit ? classes.styleEdit : classes.styleAdd}
    >
      <Group position="apart" style={{ width: '100%' }}>
        <TextInput
          styles={{ filledVariant: { backgroundColor: '#fff' } }}
          style={{ width: '48%' }}
          size="lg"
          variant="filled"
          onChange={(e) => setCompany(e.target.value)}
          value={company}
          classNames={{ input: edit ? classes.inputEdit : classes.inputAdd }}
          placeholder="Entreprise..."
        />
        <TextInput
          styles={{ filledVariant: { backgroundColor: '#fff' } }}
          style={{ width: '48%' }}
          onChange={(e) => setPost(e.target.value)}
          value={post}
          size="lg"
          classNames={{ input: edit ? classes.inputEdit : classes.inputAdd }}
          variant="filled"
          placeholder="Poste occupé..."
        />
      </Group>
      <Group position="apart" style={{ width: '100%' }}>
        <Autocomplete
          styles={{ filledVariant: { backgroundColor: '#fff' } }}
          style={{ width: '48%' }}
          size="lg"
          variant="filled"
          classNames={{ input: edit ? classes.inputEdit : classes.inputAdd }}
          data={['Angers', 'Paris', 'Nantes']}
          onChange={(city) => setLocalization(city)}
          limit={6}
          value={localization}
          placeholder="Localisation..."
        />
        <TextInput
          styles={{ filledVariant: { backgroundColor: '#fff' } }}
          classNames={{ input: edit ? classes.inputEdit : classes.inputAdd }}
          style={{ width: '48%' }}
          size="lg"
          onChange={(e) => setDuration(e.target.value)}
          value={duration}
          variant="filled"
          placeholder="Durée..."
        />
      </Group>
      <Textarea
        variant="filled"
        classNames={{ input: edit ? classes.inputEdit : classes.inputAdd }}
        size="lg"
        styles={{
          filledVariant: { backgroundColor: '#fff' },
          wrapper: { height: 150 },
          input: { height: '100%' },
        }}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        style={{ width: '100%' }}
        placeholder="Description..."
      />
      <Group
        align="center"
        position={edit ? 'apart' : 'right'}
        style={{ width: '100%' }}
      >
        {edit && (
          <Tooltip label="Retirer l'expérience">
            <ActionIcon
              style={{ color: colors.secondaryBlue }}
              onClick={() => handleRemoveExperience()}
            >
              <IconX />
            </ActionIcon>
          </Tooltip>
        )}
        <Group>
          {edit && (
            <Button
              radius={10}
              className={edit ? classes.btnEdit : classes.btnAdd}
              onClick={() => handleCancelUpdate()}
            >
              Annuler
            </Button>
          )}
          <Button
            radius={10}
            leftIcon={edit ? <IconDeviceFloppy /> : <IconPlus />}
            className={edit ? classes.btnEdit : classes.btnAdd}
            onClick={() => handleAddNewExperience()}
          >
            {!edit ? 'Ajouter une expérience' : 'Mettre à jour'}
          </Button>
        </Group>
      </Group>
    </Group>
  );
};

export default ExperiencesInput;
