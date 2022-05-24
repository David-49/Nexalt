import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Group, Header as HeaderApp } from '@mantine/core';

interface IProps {}

export const Header: FC<IProps> = (props) => (
  <HeaderApp height={60}>
    <Image
      src="/assets/Logo.svg"
      alt="Logo de Nexalt"
      width={100}
      height={30}
    />
    <nav>
      <Group>
        <li>
          <Link href="/about">
            <a>Qui sommes-nous ?</a>
          </Link>
        </li>
        <li>
          <Link href="/plans">
            <a>Offres et tarifs</a>
          </Link>
        </li>
        <li>
          <Link href="/resources">
            <a>Ressources</a>
          </Link>
        </li>
      </Group>
    </nav>
  </HeaderApp>
);
