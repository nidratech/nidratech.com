import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brand: string;
      white: string;
      greyLight: string;
      grey: string;
    };
    spacing: {
      navBarHeight: string;
      small: string;
      medium: string;
      mediumLarge: string;
      large: string;
    };
    breakpoints: {
      mobile: string;
    };
  }
}
