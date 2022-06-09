import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';

export const Logout = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };
  return (
    <button disabled={!user} type="submit" onClick={handleLogout}>
      Me déconnecter
    </button>
  );
};
