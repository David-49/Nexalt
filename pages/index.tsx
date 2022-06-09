import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { Layout } from '../components/Layout';

type PageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

const Home: PageWithLayout = () => (
  <div>
    <Head>
      <title>Nexalt</title>
      <meta name="description" content="Nexalt..." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Hello, it's the home page</h1>
  </div>
);

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
