import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      cta: string;
      accent: string;
    };
    border: string;
  }
}
