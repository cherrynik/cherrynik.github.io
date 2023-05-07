// Bug with importing fonts in the bundler, so I have to use this workaround:
const KarmaticArcadeEot = '@assets/fonts/KarmaticArcade/KarmaticArcade.eot';
const KarmaticArcadeTtf = '@assets/fonts/KarmaticArcade/KarmaticArcade.ttf';
const KarmaticArcadeWoff = '@assets/fonts/KarmaticArcade/KarmaticArcade.woff';
const KarmaticArcadeWoff2 = '@assets/fonts/KarmaticArcade/KarmaticArcade.woff2';

export const KarmaticArcadeFontFamily = 'Karmatic Arcade';

export const KarmaticArcadeFont = `
  @font-face {
    font-family: ${KarmaticArcadeFontFamily}};
    src: url('${KarmaticArcadeEot}');
    src: url(${KarmaticArcadeEot}?#iefix) format('embedded-opentype');
        url(${KarmaticArcadeWoff2}) format('woff2'),
        url(${KarmaticArcadeWoff}) format('woff'),
        url(${KarmaticArcadeTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;
