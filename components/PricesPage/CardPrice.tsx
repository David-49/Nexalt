import { FC } from 'react';

import { Button, createStyles, Group, Text } from '@mantine/core';
import Link from 'next/link';
import { colors } from '../../theme';
import { Checked } from '../Checked';

interface IProps {
  labelBtn: string;
  price: string;
  cardTitle: string;
  listData: string[];
  linkUrl: string;
}

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: 335,
    boxShadow: '0px 0px 30px #00000029',
    '@media (max-width: 1300px)': {
      display: "none",
    }
  },
  title: {
    fontSize: 24,
    whiteSpace: 'nowrap',
  },
  text: {
    fontSize: 40,
    whiteSpace: 'nowrap',
  },
  btn: {
    textTransform: 'uppercase',
    backgroundColor: colors.primaryBlue,
    color: colors.secondaryBackgroundColor,
    height: 64,
    fontSize: 24,
    marginTop: 30,
    fontWeight: 800,
    transition: 'background-color .2s',
    ':hover': {
      backgroundColor: '#725FFE',
      transition: 'background-color .2s',
    },
  },
}));

export const CardPrice: FC<IProps> = (props) => {
  const { labelBtn, price, cardTitle, listData, linkUrl } = props;

  const { classes } = useStyles();

  return (
    <Group direction="column" align="center" className={classes.container}>
      <Text weight={800} className={classes.title}>
        {cardTitle}
      </Text>
      <Text weight={800} color={colors.primaryBlue} className={classes.text}>
        {price} €
      </Text>
      <Group direction="column">
        {listData.map((item, index) => (
          <Group key={index}>
            <Checked />
            {item}
          </Group>
        ))}
      </Group>
      <Link href={linkUrl} passHref>
        <Button component="a" radius={10} className={classes.btn}>
          {labelBtn}
        </Button>
      </Link>
    </Group>
  );
};
