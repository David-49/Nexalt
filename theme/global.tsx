import { Global } from '@mantine/core';
import { colors } from '.';

export const GlobalStyles = () => (
  <Global
    styles={(theme) => ({
        html: {
            scrollBehavior: 'smooth',
        },
        body: {
            backgroundColor: colors.primaryBackgroundColor,
        },
    })}
  />
);
