import { FC } from 'react';

import { Button, createStyles } from '@mantine/core';
import { useRouter } from 'next/router';
import { useAuth } from '../../../context/AuthContext';
import LogosGoogleIcon from './LogosGoogleIcon';
import { colors } from '../../../theme';

interface IProps {
  label: string;
}

const useStyles = createStyles((theme) => ({
  btn: {
    color: '#a7a4b4',
    marginBottom: 50,
    fontWeight: 'normal',
    transition: 'ease 0.3s',
    ':hover': {
      backgroundColor: colors.secondaryBlue,
      color: '#fff',
      transition: 'ease 0.3s',
    },
  },
}));

export const GoogleButtonConnection: FC<IProps> = (props) => {
  const { label } = props;
  const router = useRouter();
  const { classes } = useStyles();
  const { signInWithGoogle } = useAuth();

  const handleSignupWithGoogle = async () => {
    await signInWithGoogle();
    router.push('/account_configuration');
  };

  return (
    <Button
      radius={10}
      variant="filled"
      leftIcon={<LogosGoogleIcon fontSize={30} />}
      onClick={handleSignupWithGoogle}
      fullWidth
      className={classes.btn}
      size="lg"
    >
      {label}
    </Button>
  );
};
