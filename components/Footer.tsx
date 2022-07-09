import { FC } from 'react';
import Image from 'next/image';
import {
  createStyles,
  Footer as FooterApp,
  Group,
  List,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import Link from 'next/link';

interface IProps {}

const useStyles = createStyles((theme) => ({
  containerFooter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    borderTop: 'none',
    zIndex: 1,
  },
  listStyle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 30,
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
}));

export const Footer: FC<IProps> = (props) => {
  const { classes } = useStyles();

  const currentYear = new Date().getFullYear();

  return (
    <FooterApp height={270} className={classes.containerFooter}>
      <Group spacing={120} align="flex-start" noWrap>
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
      <Text color="#fff" className={classes.copyright}>
        {`© ${currentYear} NEXALT. ALL RIGHT RESERVED.`}
      </Text>
    </FooterApp>
  );
};
