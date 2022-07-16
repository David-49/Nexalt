import { FC } from 'react';

import { createStyles, Group, Stack, Title } from '@mantine/core';
import Link from 'next/link';
import { IconBrandInstagram } from '@tabler/icons';
import { colors } from '../../theme';
import { FacebookIcon } from '../icons/FacebookIcon';
import { LinkedinIcon } from '../icons/LinkedinIcon';

interface IProps {}

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 40,
    fontWeight: 800,
    marginBottom: 80,
  },
  linkMedia: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    transition: 'background-color .2s',
    ':hover': {
      backgroundColor: '#725FFE',
      transition: 'background-color .2s',
    },
  },
}));

export const SocialMedia: FC<IProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Stack align="center">
      <Title order={3} className={classes.title}>
        Suivez-nous sur les réseaux
      </Title>
      <Group spacing={60}>
        <Link href="https://www.instagram.com/nexalt_app/" passHref>
          <a target="_blank" rel="noopener" className={classes.linkMedia}>
            <IconBrandInstagram size={80} color="#fff" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/company/nexalt-app/" passHref>
          <a target="_blank" rel="noopener" className={classes.linkMedia}>
            <LinkedinIcon fontSize={80} color="#fff" />
          </a>
        </Link>
        <Link href="https://www.facebook.com/Nexaltapp" passHref>
          <a target="_blank" rel="noopener" className={classes.linkMedia}>
            <FacebookIcon color="#fff" fontSize={80} />
          </a>
        </Link>
      </Group>
    </Stack>
  );
};
