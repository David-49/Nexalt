import { MantineThemeOverride } from '@mantine/core';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat';
import '@fontsource/poppins';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

export const mantineTheme: MantineThemeOverride = {
  fontFamily: 'Poppins, sans-serif',
  colors: {
    brand: ['#5E48FF', '#4333B4', '#F6F5FF', '#c2b9ff', '#FFFFFF', '#1D1D1D'],
  },
  primaryColor: 'brand',
};

export const colors = {
  primaryBlue: '#5E48FF',
  secondaryBlue: '#4333B4',
  tertiaryBlue: '#c2b9ff',
  primaryBackgroundColor: '#F6F5FF',
  secondaryBackgroundColor: '#FFFFFF',
  blackText: '#1D1D1D',
};
