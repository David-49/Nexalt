import { FC } from 'react';

import { createStyles, Group,} from '@mantine/core';
import { CardPrice } from './CardPrice';
import { colors } from '../../theme';

interface IProps {}

const useStyles = createStyles(({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans-serif',
    color: '#fff',
    marginBottom: 20,
  },
  leftSide: {
    width: '40%',
  },
  btn: {
    backgroundColor: '#fff',
    color: colors.secondaryBlue,
    width: 314,
    height: 65,
    fontSize: 25,
    marginTop: 45,
  },
  text: {
    width: '80%',
  },
}));

export const PricesPlansPresentationOnly: FC<IProps> = (props) => {
  const {} = useStyles();
  return (
    <Group direction="row">
      <Group spacing={65} align="flex-end" noWrap>
        <CardPrice
          linkUrl="/auth/signup"
          cardTitle="Formule Étudiante"
          price="0"
          labelBtn="Je m'inscris"
          listData={[
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
          ]}
        />
        <CardPrice
          linkUrl="/prices"
          cardTitle="Formule Entreprise"
          price="200-1000"
          labelBtn="Voir les tarifs"
          listData={[
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
          ]}
        />
      </Group>
    </Group>
  );
};
