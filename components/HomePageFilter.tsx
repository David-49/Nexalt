import { Autocomplete, Button, createStyles, Group } from '@mantine/core';
import { IconMapPin, IconSearch } from '@tabler/icons';
import { FC } from 'react';
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
    '&: hover': {
      backgroundColor: colors.secondaryBlue,
    },
  },
  inputSearchWith: {
    width: '25%',
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

  return (
    <Group>
      <Autocomplete
        classNames={{ input: classes.inputSearch }}
        className={classes.inputSearchWith}
        size="xl"
        radius={10}
        placeholder="Designer, développeur..."
        icon={<IconSearch className={classes.colorICon} />}
        data={['Développeur', 'Designer', 'Marketing']}
      />
      <Autocomplete
        classNames={{ input: classes.inputSearch }}
        className={classes.inputSearchWith}
        size="xl"
        radius={10}
        placeholder="Angers, Tours..."
        icon={<IconMapPin className={classes.colorICon} />}
        data={['Angers', 'Paris', 'Caen', 'Tour']}
      />
      <Button disabled size="xl" className={classes.btnSearch} radius={10}>
        Rechercher
      </Button>
    </Group>
  );
};
