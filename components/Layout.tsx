import { FC } from 'react';
import { AppShell } from '@mantine/core';
import { Header } from './Header';
import { Footer } from './Footer';

interface IProps {}

export const Layout: FC<IProps> = (props) => {
  const { children } = props;
  return (
    <AppShell header={<Header />} footer={<Footer />}>
      {children}
    </AppShell>
  );
};
