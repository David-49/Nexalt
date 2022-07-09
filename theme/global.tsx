import { Global } from '@mantine/core';
import { colors } from '.';

export const GlobalStyles = () => (
  <Global
    styles={(theme) => ({
      li: {
        listStyle: 'none',
      },
      body: {
        backgroundColor: colors.primaryBackgroundColor,
        overflowX: 'hidden',
      },
    })}
  />
);
