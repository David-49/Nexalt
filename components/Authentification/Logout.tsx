import { Button, createStyles } from '@mantine/core';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import { colors } from '../../theme';

const useStyles = createStyles((theme) => ({
  btn: {
    backgroundColor: colors.secondaryBlue,
    textTransform: 'uppercase',
    fontSize: 16,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 22,
    paddingRight: 22,
  },
}));

export const Logout = () => {
  const { classes } = useStyles();
  const { user, logout } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push('/auth/signin');
  };
  return (
    <Button
      radius="md"
      size="md"
      className={classes.btn}
      type="submit"
      onClick={handleLogout}
    >
      Me déconnecter
    </Button>
  );
};
