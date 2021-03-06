import { FC } from 'react';

import { Card, createStyles, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons';

interface IProps {
  contentCard: string;
  backgroundColor: string;
  textColor: string;
  iconColor: string;
  boxShadow?: string;
}

const useStyles = createStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 10,
    flex: '1 1 220px',
    padding: '35px !important',
  },
  icon: {
    flexShrink: 0,
  },
}));

export const StrongPointsCard: FC<IProps> = (props) => {
  const { classes } = useStyles();
  const { contentCard, backgroundColor, textColor, iconColor, boxShadow } =
    props;

  return (
    <Card
      radius={25}
      className={classes.card}
      style={{ backgroundColor, boxShadow }}
    >
      <IconSearch size={40} color={iconColor} className={classes.icon} />
      <Text color={textColor}>{contentCard}</Text>
    </Card>
  );
};
