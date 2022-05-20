import { FC } from 'react';
import { AppShell } from '@mantine/core';
import { Header } from './Header';

interface IProps {}

export const Layout: FC<IProps> = (props) => {
  const { children } = props;
  return <AppShell header={<Header />}>{children}</AppShell>;
};
