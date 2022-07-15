import { ReactNode } from 'react';

import '../styles/globals.css';
import '../config/firebase';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { MantineProvider } from '@mantine/core';
import { NextPage } from 'next';
import { AuthContextProvider } from '../context/AuthContext';
import { ProtectedRoute } from '../components/Authentification/ProtectedRoute';
import { mantineTheme } from '../theme';
import { GlobalStyles } from '../theme/global';

type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const noAuthRequired = [
    '/auth/signup',
    '/auth/signin',
    '/',
    '/auth/reset_password',
    '/legalNotices',
    '/privacyPolicy',
    '/about',
    '/prices',
    '/blog',
    '/dashboard',
    '/research',
  ];
  const router = useRouter();

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <AuthContextProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <GlobalStyles />
        {noAuthRequired.includes(router.pathname) ? (
          getLayout(<Component {...pageProps} />)
        ) : (
          <ProtectedRoute>
            {getLayout(<Component {...pageProps} />)}
          </ProtectedRoute>
        )}
      </MantineProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
