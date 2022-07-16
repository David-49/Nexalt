/* eslint-disable no-console */
import { FC, useEffect, useState } from 'react';

import {
  Container,
  createStyles,
  Group,
  Text,
  MantineTheme,
  useMantineTheme,
  Badge,
  Autocomplete,
  MultiSelect,
  Box,
  CloseButton,
  MultiSelectValueProps,
  Textarea,
} from '@mantine/core';
import { Dropzone, DropzoneStatus } from '@mantine/dropzone';
import { IconPhoto, TablerIcon, IconUpload, IconX } from '@tabler/icons';
import { colors } from '../../theme';
import { IProfil } from '../../types/Profil';

interface IProps {
  onSetProfilInfos: (data: IProfil) => void;
  profilInfos: IProfil;
}

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
  },
  form: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 50,
  },
  formLeftSide: { width: '50%' },
  formRightSide: {
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
    ':focus-within': {
      border: `solid 2px ${colors.primaryBlue}`,
    },
  },
}));

const getIconColor = (status: DropzoneStatus, theme: MantineTheme) =>
  status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 1 : 1]
    : status.rejected
    ? theme.colors.red[theme.colorScheme === 'dark' ? 1 : 1]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : colors.primaryBlue;

const ImageUploadIcon = ({
  status,
  ...props
}: React.ComponentProps<TablerIcon> & { status: DropzoneStatus }) => {
  if (status.accepted) {
    return <IconUpload {...props} />;
  }

  if (status.rejected) {
    return <IconX {...props} />;
  }

  return <IconPhoto {...props} />;
};

const ItemValue = ({
  value,
  label,
  onRemove,
  classNames,
  ...others
}: MultiSelectValueProps & { value: string }) => (
  <div {...others}>
    <Box
      sx={(theme) => ({
        display: 'flex',
        cursor: 'default',
        alignItems: 'center',
        color: '#fff',
        backgroundColor: colors.primaryBlue,
        paddingLeft: 10,
        borderRadius: 4,
      })}
    >
      <Box sx={{ lineHeight: 1, fontSize: 12 }}>{label}</Box>
      <CloseButton
        onMouseDown={onRemove}
        variant="transparent"
        style={{ color: '#fff' }}
        size={22}
        iconSize={14}
        tabIndex={-1}
      />
    </Box>
  </div>
);

const FirstStepStudent: FC<IProps> = (props) => {
  const { classes } = useStyles();
  const { profilInfos, onSetProfilInfos } = props;
  const [localization, setLocalization] = useState(profilInfos.localization);
  const [searchZone, setSearchZone] = useState<string[]>(
    profilInfos.searchZone!
  );
  const [skills, setSkills] = useState<string[]>(profilInfos.skill!);
  const [description, setDescription] = useState(profilInfos.description);

  useEffect(() => {
    onSetProfilInfos({
      ...profilInfos,
      localization,
      searchZone,
      skill: skills,
      description,
    });
  }, [localization, searchZone, skills, description]);

  const dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme) => (
    <Group
      position="center"
      spacing="sm"
      style={{ minHeight: 180, pointerEvents: 'none' }}
    >
      <ImageUploadIcon
        status={status}
        style={{ color: getIconColor(status, theme) }}
        size={80}
      />

      <div>
        <Text size="sm" inline align="center">
          Faites glisser l'image ici ou cliquez pour sélectionner le fichier
          (max: 5mb)
        </Text>
      </div>
    </Group>
  );

  const theme = useMantineTheme();

  return (
    <Container className={classes.container} fluid>
      <form className={classes.form}>
        <Group direction="column" spacing={50} className={classes.formLeftSide}>
          <Autocomplete
            data={['Angers', 'Paris', 'Nantes']}
            classNames={{
              label: classes.label,
              description: classes.description,
              input: classes.input,
            }}
            label="Votre localisation"
            description="Indiquez la ville dans laquelle vous vivez actuellement."
            placeholder="Ex : Paris, Lyon, Marseille..."
            variant="filled"
            size="lg"
            value={localization}
            className={classes.containerInput}
            onChange={(city) => setLocalization(city)}
          />
          <MultiSelect
            data={['Angers', 'Paris', 'Nantes']}
            classNames={{
              label: classes.label,
              description: classes.description,
              input: classes.input,
            }}
            value={searchZone}
            onChange={(cities: string[]) => setSearchZone(cities)}
            searchable
            valueComponent={ItemValue}
            label="Votre zone de recherche"
            description="Indiquez la/les ville(s) dans laquelle/lesquelles vous recherchez une alternance."
            placeholder="Ex : Tours, Angers, Rennes…"
            variant="filled"
            size="lg"
            className={classes.containerInput}
          />
          <div className={classes.containerInput}>
            <MultiSelect
              classNames={{
                label: classes.label,
                description: classes.description,
                input: classes.input,
              }}
              data={['Wordpress', 'Développeur', 'Marketing', 'Photoshop']}
              searchable
              onChange={(skillsSelected: string[]) => setSkills(skillsSelected)}
              valueComponent={ItemValue}
              value={skills}
              label="Vos compétences"
              description="Ajoutez vos compétences, outils, livrables et frameworks que vous maîtrisez."
              placeholder="Ex : Wordpress, Webdesign, Marketing..."
              variant="filled"
              size="lg"
              className={classes.containerInput}
            />
            <Group direction="row" spacing={4} mt={14} noWrap>
              <Text style={{ whiteSpace: 'nowrap' }}>Suggestions :</Text>
              <Group spacing={5}>
                <Badge
                  styles={{
                    light: {
                      color: colors.primaryBlue,
                      backgroundColor: '#F6F5FF',
                    },
                    inner: { padding: 5 },
                  }}
                  radius={10}
                  variant="light"
                >
                  Wordpress
                </Badge>
                <Badge
                  radius={10}
                  styles={{
                    light: {
                      color: colors.primaryBlue,
                      backgroundColor: '#F6F5FF',
                    },
                    inner: { padding: 5 },
                  }}
                  variant="light"
                >
                  Webdesign
                </Badge>
                <Badge
                  radius={10}
                  styles={{
                    light: {
                      color: colors.primaryBlue,
                      backgroundColor: '#F6F5FF',
                    },
                    inner: { padding: 5 },
                  }}
                  variant="light"
                >
                  Marketing
                </Badge>
                <Badge
                  styles={{
                    light: {
                      color: colors.primaryBlue,
                      backgroundColor: '#F6F5FF',
                    },
                    inner: { padding: 5 },
                  }}
                  variant="light"
                >
                  Photoshop
                </Badge>
              </Group>
            </Group>
          </div>
        </Group>
        <Group className={classes.formRightSide} spacing={50}>
          <Textarea
            classNames={{
              label: classes.label,
              description: classes.description,
              input: classes.input,
            }}
            styles={{
              wrapper: { height: 100 },
              input: { height: '100%' },
            }}
            value={description}
            label="Votre description"
            onChange={(e) => setDescription(e.target.value)}
            description="Indiquez ce que vous voulez faire savoir aux entreprises qui vont vous recruter."
            placeholder="Ex : Je suis dans le Webdesign depuis 3 ans..."
            variant="filled"
            size="sm"
            className={classes.containerInput}
          />
          <Group>
            <Group spacing={0}>
              <Text weight={800} style={{ fontSize: 24 }}>
                Votre portfolio
              </Text>
              <Text color="dimmed" style={{ fontSize: 16 }}>
                Insérez des images de projet que vous avez réalisé au cours de
                votre parcours.
              </Text>
            </Group>
            <Group grow>
              <Dropzone
                onDrop={(files) => console.log(files[0].name)}
                onReject={(files) => console.log(files[0].errors[0].code)}
                maxSize={3 * 1024 ** 2}
                multiple={false}
                accept={['image/png', 'image/jpeg', 'image/gif']}
              >
                {(status) => dropzoneChildren(status, theme)}
              </Dropzone>

              <Dropzone
                onDrop={(files) => console.log(files[0].name)}
                onReject={(files) => console.log(files[0].errors[0].code)}
                maxSize={3 * 1024 ** 2}
                multiple={false}
                accept={['image/png', 'image/jpeg', 'image/gif']}
              >
                {(status) => dropzoneChildren(status, theme)}
              </Dropzone>
              <Dropzone
                onDrop={(files) => console.log(files[0].name)}
                onReject={(files) => console.log(files[0].errors[0].code)}
                maxSize={3 * 1024 ** 2}
                multiple={false}
                accept={['image/png', 'image/jpeg', 'image/gif']}
              >
                {(status) => dropzoneChildren(status, theme)}
              </Dropzone>
            </Group>
          </Group>
        </Group>
      </form>
    </Container>
  );
};

export default FirstStepStudent;
