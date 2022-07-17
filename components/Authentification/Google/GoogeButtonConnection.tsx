import { FC, useEffect, useState } from 'react';

import { Button, createStyles } from '@mantine/core';
import { useRouter } from 'next/router';
import { useAuth } from '../../../context/AuthContext';
import LogosGoogleIcon from './LogosGoogleIcon';
import { colors } from '../../../theme';
import { useStatusUser } from '../../../context/UserStatusContext';

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
  const { signInWithGoogle, user } = useAuth();
  const { userStatus } = useStatusUser();
  const [wasClicked, setWasClicked] = useState(false);

  useEffect(() => {
    const updateData = async () => {
      if (user && wasClicked) {
        const name = user.displayName.split(' ');
        fetch('/api/inscription', {
          method: 'POST',
          body: JSON.stringify({
            firstname: name[0],
            lastname: name[1] ?? '',
            email: user.email,
          }),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });

        if (userStatus) {
          router.push('/profilePage');
        } else {
          router.push('/account_configuration');
        }
      }
    };
    try {
      updateData();
    } catch (error: any) {
      throw new Error(error);
    }
  }, [userStatus]);

  const handleSignupWithGoogle = async () => {
    await signInWithGoogle();
    setWasClicked(true);
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
