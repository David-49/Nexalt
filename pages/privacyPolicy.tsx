import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import { Header } from '../components/Header';

type HomePageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

const PrivacyPolicy: HomePageWithLayout = () => (
  <h1>Hello, c'est la page des politiques de confidentialité</h1>
);

PrivacyPolicy.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export default PrivacyPolicy;
