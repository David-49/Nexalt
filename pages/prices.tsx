import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import { Header } from '../components/Header';

type HomePageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

const Prices: HomePageWithLayout = () => (
  <h1>Hello, c'est la page des offres et tarifs</h1>
);

Prices.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export default Prices;
