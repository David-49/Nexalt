import { Global } from '@mantine/core';
import { colors } from '.';

export const GlobalStyles = () => (
  <Global
    styles={(theme) => ({
      body: {
        backgroundColor: colors.primaryBackgroundColor,
        overflowX: 'hidden',
      },
      li: {
        listStyle: 'none',
      },
    })}
  />
);
