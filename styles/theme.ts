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
  fontSize: {
    small: '1em',
    medium: '1.25em',
    mediumLarge: '1.5em',
    large: '2.5em',
  },
  spacing: {
    navBarHeight: '5rem',
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
};

export default theme;
