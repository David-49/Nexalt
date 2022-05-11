import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

interface IProps {}

export const ProtectedRoute: FC<IProps> = (props) => {
  const { children } = props;
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};
