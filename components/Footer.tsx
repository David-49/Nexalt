import { FC } from 'react';

import Image from 'next/image';
import { createStyles, Group, List, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { IconBrandInstagram } from '@tabler/icons';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { colors } from '../theme';

interface IProps {}

const useStyles = createStyles((theme) => ({
  containerFooter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: 'transparent',
    borderTop: 'none',
    zIndex: 1,
    gap: 50,
    width: '100%',
    paddingLeft: 150,
    paddingRight: 150,
  },
  listStyle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 30,
    listStyle: 'none',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 800,
  },
  textWithLogo: {
    fontSize: 20,
    marginTop: 25,
  },
  copyright: {
    fontSize: 18,
  },
  linkMedia: {
    backgroundColor: '#fff',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
}));

export const Footer: FC<IProps> = (props) => {
  const { classes } = useStyles();

  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.containerFooter}>
      <Group
        spacing={120}
        align="flex-start"
        position="apart"
        style={{ width: '100%' }}
      >
        <Stack>
          <div>
            <Image
              src="/assets/logo_blanc.svg"
              alt="Logo de Nexalt"
              width={120}
              height={40}
            />
          </div>
          <Text color="#fff" className={classes.textWithLogo}>
            Siège social <br /> 8 rue Joseph Fourier <br /> Beaucouzé 49070
          </Text>
        </Stack>
        <Stack>
          <Title order={3} className={classes.title}>
            Informations
          </Title>
          <List className={classes.listStyle}>
            <List.Item>
              <Link href="/legalNotices">Mentions légales</Link>
            </List.Item>
            <List.Item>
              <Link href="/privacyPolicy">Politique de confidentialité</Link>
            </List.Item>
          </List>
        </Stack>
        <Stack>
          <Title order={3} className={classes.title}>
            Étudiants
          </Title>
          <List className={classes.listStyle}>
            <List.Item>
              <Link href="">Lorem ipsum dolor</Link>
            </List.Item>
            <List.Item>
              <Link href="">Lorem ipsum dolor</Link>
            </List.Item>
          </List>
        </Stack>
        <Stack>
          <Title order={3} className={classes.title}>
            Entreprises
          </Title>
          <List className={classes.listStyle}>
            <List.Item>
              <Link href="">Lorem ipsum dolor</Link>
            </List.Item>
            <List.Item>
              <Link href="">Lorem ipsum dolor</Link>
            </List.Item>
          </List>
        </Stack>
        <Stack>
          <Title order={3} className={classes.title}>
            Ressources
          </Title>
          <List className={classes.listStyle}>
            <List.Item>
              <Link href="">Lorem ipsum dolor</Link>
            </List.Item>
            <List.Item>
              <Link href="">Lorem ipsum dolor</Link>
            </List.Item>
          </List>
        </Stack>
      </Group>
      <Group position="apart" style={{ width: '100%' }}>
        <Text color="#fff" className={classes.copyright}>
          {`© ${currentYear} NEXALT. ALL RIGHT RESERVED.`}
        </Text>
        <Group spacing={25}>
          <Link href="https://www.instagram.com/nexalt_app/" passHref>
            <a target="_blank" rel="noopener" className={classes.linkMedia}>
              <IconBrandInstagram size={20} color={colors.primaryBlue} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/company/nexalt-app/" passHref>
            <a target="_blank" rel="noopener" className={classes.linkMedia}>
              <LinkedinIcon fontSize={20} color={colors.primaryBlue} />
            </a>
          </Link>
          <Link href="https://www.facebook.com/Nexaltapp" passHref>
            <a target="_blank" rel="noopener" className={classes.linkMedia}>
              <FacebookIcon color={colors.primaryBlue} fontSize={20} />
            </a>
          </Link>
        </Group>
      </Group>
    </footer>
  );
};
