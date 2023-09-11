import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx}'],
  // Files to exclude
  exclude: [],
  // Useful for theme customization
  theme: {
    extend: {},
  },
  // The output directory for your css system
  outdir: 'styled-system',
  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0,
      fontSize: '16px',
    },
  },
  jsxFramework: 'react',
  jsxStyleProps: 'none',
});
