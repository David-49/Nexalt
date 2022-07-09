import { FC } from 'react';

import { createStyles } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';
import { colors } from '../../theme';

interface IProps {
  src: StaticImageData;
  height: number;
  width: number;
}

const useStyles = createStyles((theme) => ({
  containerLogo: {
    backgroundColor: colors.primaryBlue,
    width: 252,
    height: 85,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const LogoCard: FC<IProps> = (props) => {
  const { classes } = useStyles();
  const { src, height, width } = props;

  return (
    <div className={classes.containerLogo}>
      <Image src={src} width={width} height={height} />
    </div>
  );
};
