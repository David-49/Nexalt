import '../styles/globals.css';
import '../config/firebase';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { MantineProvider } from '@mantine/core';
import { AuthContextProvider } from '../context/AuthContext';
import { Logout } from '../components/Authentification/Logout';
import { ProtectedRoute } from '../components/Authentification/ProtectedRoute';
import { mantineTheme } from '../theme/index';
import { GlobalStyles } from '../theme/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  const noAuthRequired = ['/auth/signup', '/auth/login'];
  const router = useRouter();

  return (
    <AuthContextProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <GlobalStyles />
        <Logout />
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </MantineProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
