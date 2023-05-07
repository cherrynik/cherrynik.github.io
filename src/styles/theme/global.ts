import { createGlobalStyle } from 'styled-components';
import { KarmaticArcadeFont } from '../fonts';
import { DefaultFontFamily, DefaultFontSize } from '../variables';

export const GlobalStyle = createGlobalStyle`
  ${KarmaticArcadeFont}

  body {
    margin: 0;
    padding: 0;

    font-family: ${DefaultFontFamily};
    font-size: ${DefaultFontSize};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
