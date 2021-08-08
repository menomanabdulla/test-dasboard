import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      body: string;
    };
    colors: {
        black: string;
        white: string;
        bgPrimary: string;
        bgSecondary: string;
        colorPrimary: string;
        colorSecondary: string;
        colorActive: string;
        colorActiveTwo: string;
    };
  }
}
