import KarmaticArcadeEot from '../../../assets/fonts/KarmaticArcade/KarmaticArcade.eot';
import KarmaticArcadeOtf from '../../../assets/fonts/KarmaticArcade/KarmaticArcade.otf';
import KarmaticArcadeSvg from '../../../assets/fonts/KarmaticArcade/KarmaticArcade.svg';
import KarmaticArcadeTtf from '../../../assets/fonts/KarmaticArcade/KarmaticArcade.ttf';
import KarmaticArcadeWoff from '../../../assets/fonts/KarmaticArcade/KarmaticArcade.woff';
import KarmaticArcadeWoff2 from '../../../assets/fonts/KarmaticArcade/KarmaticArcade.woff2';

export const KarmaticArcadeFontFamily = 'Karmatic Arcade';

export const KarmaticArcadeFont = `
@font-face {
  font-family: ${KarmaticArcadeFontFamily};
  src: url(${KarmaticArcadeEot});
  src: url(${KarmaticArcadeEot}?#iefix) format('embedded-opentype'),
       url(${KarmaticArcadeOtf}) format('otf'),
       url(${KarmaticArcadeSvg}#KarmaticArcade) format('svg'),
       url(${KarmaticArcadeTtf}) format('truetype'),
       url(${KarmaticArcadeWoff}) format('woff'),
       url(${KarmaticArcadeWoff2}) format('woff2');
}
`;
