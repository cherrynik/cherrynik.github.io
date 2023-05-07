export const importSelf = async (name: string) => {
  await Promise.all(
    ['ttf', 'otf', 'svg', 'woff', 'woff2'].map(async (ext) => {
      return await require(`@/assets/fonts/${name}.${ext}`);
    })
  );
};

export { ArcadepixPlusFont } from './ArcadepixPlus';
export { KarmaticArcadeFont } from './KarmaticArcade';
