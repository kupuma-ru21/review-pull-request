import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://fragrant-shadow-9470.fly.dev/',
  documents: 'components/**/*.graphql',
  generates: {
    'src/components/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
