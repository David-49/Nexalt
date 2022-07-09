import { FC, useEffect } from 'react';

import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';

interface IProps {}

export const ProtectedRoute: FC<IProps> = (props) => {
  const { children } = props;
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth/signin');
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};
