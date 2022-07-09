import { FC } from 'react';

import { createStyles, Group, Stack, Title } from '@mantine/core';
import Link from 'next/link';
import { IconBrandInstagram } from '@tabler/icons';
import { colors } from '../../theme';
import { FacebookIcon } from '../icons/FacebookIcon';
import { TwitterIcon } from '../icons/TwitterIcon';

interface IProps {}

const useStyles = createStyles((theme) => ({
  title: {
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
        <Link href="https://twitter.com/NEXALT_app" passHref>
          <a target="_blank" rel="noopener" className={classes.linkMedia}>
            <TwitterIcon fontSize={80} color="#fff" />
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
