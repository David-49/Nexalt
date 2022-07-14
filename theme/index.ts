import { MantineThemeOverride } from '@mantine/core';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat';
import '@fontsource/poppins';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/800.css';

export const mantineTheme: MantineThemeOverride = {
  fontFamily: 'Poppins, sans-serif',
  colors: {
    brand: ['#5E48FF', '#4333B4', '#F6F5FF'],
  },
  primaryColor: 'brand',
};

export const colors = {
  primaryBlue: '#5E48FF',
  secondaryBlue: '#4333B4',
  primaryBackgroundColor: '#F6F5FF',
};
