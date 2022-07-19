import { createStyles } from '@mantine/core';
import { FC } from 'react';
import { colors } from '../../theme';

interface IProps {}

const useStyles = createStyles((theme) => ({
  logoE: {
    width: 30,
    fill: colors.secondaryBackgroundColor,
    marginBottom: '2vh',
  },
}));

const Logo: FC<IProps> = (props) => {
  const { classes } = useStyles();

  return (
    <svg
      className={classes.logoE}
      version="1.1"
      id="Calque_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 29.5 30"
      xmlSpace="preserve"
    >
      <g id="Logo_nexalt" transform="translate(-22.933 -5.754)">
        <g
          id="Calque_2_00000018920333840229996180000014502121412032225202_"
          transform="translate(22.933 5.754)"
        >
          <path
            id="Tracé_16"
            d="M29.5,17v-3.2c0-0.9-0.1-1.9-0.2-2.8v0c-0.5-4.2-3.2-7.8-7-9.5h0c-0.6-0.3-1.2-0.5-1.9-0.7
                                C18.7,0.2,16.8,0,15,0c-1.7,0-3.4,0.2-5,0.8C9,1.1,8,1.5,7.2,2C5.8,2.7,4.5,3.8,3.5,5C1.1,7.8-0.1,11.4,0,15
                                c-0.1,3.8,1.4,7.5,4,10.2c2.2,2.2,5,3.7,8,4.3c1.7,0.4,3.3,0.6,5,0.6c1.8,0,3.6-0.2,5.4-0.5c1.9-0.3,3.7-1.1,5.4-2.2v-7.7h-0.3
                                c-2.3,2.3-5.9,3.5-10,3.5c-1.2,0-2.4-0.1-3.6-0.4c0,0,0,0,0,0s0,0-0.1,0c-0.9-0.2-1.7-0.5-2.5-1.1c0,0-0.1,0-0.1,0
                                c-0.1,0-0.1-0.1-0.2-0.1L11,21.3l0,0c-0.1-0.1-0.2-0.1-0.2-0.2c-0.9-0.7-1.7-1.6-2.1-2.7l0,0c0-0.1-0.1-0.1-0.1-0.2
                                c0,0,0-0.1-0.1-0.1c0,0,0,0,0-0.1c-0.5-1.1-0.7-2.3-0.7-3.6C7.6,9.8,11,6,15.2,6s7.6,3.7,7.6,8.4c0,0.9-0.1,1.8-0.4,2.6L29.5,17z"
          />
          <circle id="Ellipse_4" cx="15.4" cy="14.6" r="3" />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
