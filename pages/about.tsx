import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import { Header } from '../components/Header';

type HomePageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

const About: HomePageWithLayout = () => <h1>Hello, it's an about page</h1>;

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export default About;
