import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import { Header } from '../components/Header';

type HomePageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

const LegalNotices: HomePageWithLayout = () => (
  <h1>Hello, c'est la page des mentions légales</h1>
);

LegalNotices.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export default LegalNotices;
