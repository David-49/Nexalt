import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useAuth } from '../context/AuthContext';
import LogosGoogleIcon from './LogosGoogleIcon';

interface IProps {
  label: string;
}

export const GoogleButtonConnection: FC<IProps> = (props) => {
  const { label } = props;
  const router = useRouter();
  const { signInWithGoogle } = useAuth();

  const handleSignupWithGoogle = async () => {
    await signInWithGoogle();
    router.push('/');
  };

  return (
    <Button
      variant="outline"
      leftIcon={<LogosGoogleIcon />}
      onClick={handleSignupWithGoogle}
    >
      {label}
    </Button>
  );
};
