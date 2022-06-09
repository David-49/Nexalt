import { FC } from 'react';
import { Footer as FooterApp } from '@mantine/core';

interface IProps {}

export const Footer: FC<IProps> = (props) => (
  <FooterApp height={70}>
    <p>Ceci est un pied de page</p>
  </FooterApp>
);
