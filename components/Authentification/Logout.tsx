import { Button, createStyles } from '@mantine/core';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import { colors } from '../../theme';

const useStyles = createStyles((theme) => ({
  btn: {
    backgroundColor: colors.secondaryBlue,
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: 16,
    height: 46,
    transition: 'background-color .2s',
    ':hover': {
      backgroundColor: colors.primaryBlue,
      transition: 'background-color .2s',
    },
  },
}));

export const Logout = () => {
  const { classes } = useStyles();
  const { logout } = useAuth();
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
