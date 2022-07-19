import { FC, useState } from 'react';

import { Autocomplete, Button, createStyles, Group } from '@mantine/core';
import { IconMapPin, IconSearch } from '@tabler/icons';
import { useRouter } from 'next/router';
import { colors } from '../theme';

interface IProps {}

const useStyles = createStyles((theme) => ({
  btnSearch: {
    backgroundColor: colors.primaryBlue,
    fontSize: 20,
    fontFamily: 'Montserrat, sans-serif',
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 35,
    paddingRight: 35,
    transition: 'ease 0.3s',
    '&: hover': {
      backgroundColor: colors.secondaryBlue,
      transition: 'ease 0.3s',
    },
    flexGrow: 1,
  },
  inputSearchWith: {
    width: '25%',
    '@media (max-width: 1215px)': {
      width: '45%',
    },
    flexGrow: 2,
  },
  inputSearch: {
    borderColor: colors.primaryBlue,
    borderWidth: 2,
    '&: focus': {
      borderColor: colors.secondaryBlue,
    },
  },
  colorICon: {
    color: colors.primaryBlue,
  },
}));

export const HomePageFilter: FC<IProps> = (props) => {
  const { classes } = useStyles();
  const [postValue, setPostValue] = useState('');
  const [city, setCity] = useState('');
  const router = useRouter();

  const handleClickFilter = () => {
    router.push('/research');
  };

  return (
    <Group>
      <Autocomplete
        classNames={{ input: classes.inputSearch }}
        className={classes.inputSearchWith}
        size="xl"
        radius={10}
        onChange={(postName) => setPostValue(postName)}
        placeholder="Designer, développeur..."
        icon={<IconSearch className={classes.colorICon} />}
        data={['Développeur', 'Designer', 'Marketing']}
      />
      <Autocomplete
        classNames={{ input: classes.inputSearch }}
        className={classes.inputSearchWith}
        size="xl"
        onChange={(cityName) => setCity(cityName)}
        radius={10}
        placeholder="Angers, Tours..."
        icon={<IconMapPin className={classes.colorICon} />}
        data={['Angers', 'Paris', 'Caen', 'Tour']}
      />
      <Button
        disabled={!postValue && !city}
        size="xl"
        className={classes.btnSearch}
        radius={10}
        onClick={() => handleClickFilter()}
      >
        Rechercher
      </Button>
    </Group>
  );
};
