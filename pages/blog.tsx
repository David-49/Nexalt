import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import { Header } from '../components/Header';

type HomePageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

const Blog: HomePageWithLayout = () => <h1>Hello, c'est la page du blog</h1>;

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

export default Blog;
