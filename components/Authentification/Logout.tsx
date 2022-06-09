import { Button, createStyles } from '@mantine/core';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import { colors } from '../../theme';

const useStyles = createStyles((theme) => ({
  btn: {
    backgroundColor: colors.secondaryBlue,
    textTransform: 'uppercase',
  },
}));

export const Logout = () => {
  const { classes } = useStyles();
  const { user, logout } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };
  return (
    <Button
      radius="md"
      className={classes.btn}
      type="submit"
      onClick={handleLogout}
    >
      Me déconnecter
    </Button>
  );
};
