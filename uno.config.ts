import extractorSvlete from '@unocss/extractor-svelte';
import { presetFluidSizing } from 'unocss-preset-fluid-sizing';
import { defineConfig, presetTypography, presetWind4, presetWebFonts } from 'unocss';

export default defineConfig({
  presets: [
    presetFluidSizing(),
    presetWebFonts({
      themeKey: 'font',
      fonts: {
        //epic: 'Almendra SC',
        //book: 'Felipa',
        //pro: 'Simonetta',
        middle: 'Eagle Lake',
        //original: 'Cinzel',
        cap: 'Cinzel Decorative'
      }
    }),
    presetTypography(),
    presetWind4({
      reset: true,
    }),
  ],
  extractors: [
    extractorSvlete()
  ]
})
