import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import { Header } from '../../components/Header';

type PageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

const ResetPassword: PageWithLayout = () => (
  <h1>Hello, c'est la page pour réinitialiser son mot de passe</h1>
);

ResetPassword.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export default ResetPassword;
