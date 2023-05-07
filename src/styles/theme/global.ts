import { createGlobalStyle } from 'styled-components';
import { WondersoftCursor } from '../cursors';
import { ArcadepixPlusFont, KarmaticArcadeFont } from '../fonts';
import { DefaultFontFamily, DefaultFontSize } from '../variables';

export const GlobalStyle = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  ${ArcadepixPlusFont}

  ${KarmaticArcadeFont}

  ${WondersoftCursor}

  body {
    margin: 0;
    padding: 0;

    font-family: ${DefaultFontFamily};
    font-size: ${DefaultFontSize};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
