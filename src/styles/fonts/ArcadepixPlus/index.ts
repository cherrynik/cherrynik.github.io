import ArcadepixPlusEot from '@/assets/fonts/ArcadepixPlus/ArcadepixPlus.eot';
import ArcadepixPlusOtf from '@/assets/fonts/ArcadepixPlus/ArcadepixPlus.otf';
import ArcadepixPlusSvg from '@/assets/fonts/ArcadepixPlus/ArcadepixPlus.svg';
import ArcadepixPlusTtf from '@/assets/fonts/ArcadepixPlus/ArcadepixPlus.ttf';
import ArcadepixPlusWoff from '@/assets/fonts/ArcadepixPlus/ArcadepixPlus.woff';
import ArcadepixPlusWoff2 from '@/assets/fonts/ArcadepixPlus/ArcadepixPlus.woff2';

export const ArcadepixPlusFontFamily = 'Arcadepix Plus';

export const ArcadepixPlusFont = `
@font-face {
  font-family: ${ArcadepixPlusFontFamily};
  src: url(${ArcadepixPlusEot});
  src: url(${ArcadepixPlusEot}?#iefix) format('embedded-opentype'),
      url(${ArcadepixPlusOtf}) format('otf'),
      url(${ArcadepixPlusSvg}#ArcadepixPlus) format('svg'),
      url(${ArcadepixPlusWoff2}) format('woff2'),
      url(${ArcadepixPlusWoff}) format('woff'),
      url(${ArcadepixPlusTtf}) format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`;
