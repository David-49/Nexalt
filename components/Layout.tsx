import { FC } from 'react';
import { AppShell } from '@mantine/core';
import { Header } from './Header';

interface IProps {}

export const Layout: FC<IProps> = (props) => {
  const { children } = props;
  return (
    <AppShell
      style={{ paddingLeft: '150px', paddingRight: '150px' }}
      header={<Header />}
      padding={0}
    >
      {children}
    </AppShell>
  );
};
