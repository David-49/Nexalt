import { Global } from '@mantine/core';

export const GlobalStyles = () => (
  <Global
    styles={(theme) => ({
      li: {
        listStyle: 'none',
      },
    })}
  />
);
