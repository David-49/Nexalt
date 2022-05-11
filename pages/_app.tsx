import '../styles/globals.css';
import '../config/firebase';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { MantineProvider } from '@mantine/core';
import { AuthContextProvider } from '../context/AuthContext';
import Logout from '../components/Logout';
import { ProtectedRoute } from '../components/ProtectedRoute';

function MyApp({ Component, pageProps }: AppProps) {
  const noAuthRequired = ['/auth/signup', '/auth/login'];
  const router = useRouter();

  return (
    <AuthContextProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
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
