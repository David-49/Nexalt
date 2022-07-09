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
    width: 371,
    height: 223,
    padding: '35px !important',
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
      <IconSearch style={{ flexShrink: 0 }} size={40} color={iconColor} />
      <Text color={textColor}>{contentCard}</Text>
    </Card>
  );
};
