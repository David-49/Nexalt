import { FC } from 'react';

import { createStyles, Group, Text } from '@mantine/core';
import MdsLogo from '../../public/assets/images/mds@2x.png';
import UbisoftLogo from '../../public/assets/images/ubisoft@2x.png';
import OpenClassroomLogo from '../../public/assets/images/OpenClassroom_LOGO@2x.png';
import MicrosoftLogo from '../../public/assets/images/microsoft@2x.png';
import { LogoCard } from './LogoCard';

interface IProps {}

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 40,
    marginBottom: 50,
    textAlign: 'center',
  },
}));

export const PartnerCompanies: FC<IProps> = (props) => {
  const { classes } = useStyles();
  return (
    <Group direction="column" align="center">
      <Text color="#0F0C29" weight="bold" className={classes.title}>
        Plus de 200 entreprises partenaires
      </Text>
      <Group style={{ justifyContent: 'center' }} spacing={33}>
        <LogoCard src={MdsLogo} width={110} height={40} />
        <LogoCard src={UbisoftLogo} width={164} height={68} />
        <LogoCard src={MdsLogo} width={110} height={40} />
        <LogoCard src={OpenClassroomLogo} width={203} height={24} />
        <LogoCard src={MdsLogo} width={110} height={40} />
        <LogoCard src={MicrosoftLogo} width={161} height={72} />
        <LogoCard src={UbisoftLogo} width={164} height={68} />
        <LogoCard src={MicrosoftLogo} width={161} height={72} />
        <LogoCard src={OpenClassroomLogo} width={203} height={24} />
      </Group>
    </Group>
  );
};
