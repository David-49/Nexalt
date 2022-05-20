import '../styles/globals.css';
import '../config/firebase';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';
import { NextPage } from 'next';
import { AuthContextProvider } from '../context/AuthContext';
import { Logout } from '../components/Logout';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { mantineTheme } from '../theme/index';

type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const noAuthRequired = ['/auth/signup', '/auth/login'];
  const router = useRouter();

  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <AuthContextProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <Logout />
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
