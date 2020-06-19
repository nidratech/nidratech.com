import { DefaultTheme } from 'styled-components';

export const COLOR_BRAND = '#d5851d';
export const COLOR_WHITE = '#ffffff';
export const COLOR_GREY_LIGHT = '#CFD2D3';
export const COLOR_GREY = '#6c757d';

const theme: DefaultTheme = {
  colors: {
    brand: COLOR_BRAND,
    white: COLOR_WHITE,
    greyLight: COLOR_GREY_LIGHT,
    grey: COLOR_GREY,
  },
  spacing: {
    navBarHeight: '5rem',
    small: '0.5rem',
    medium: '1rem',
    mediumLarge: '1.5rem',
    large: '2rem',
  },
  breakpoints: {
    mobile: '48rem',
  },
};

export default theme;
