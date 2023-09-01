import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'schema.graphqls',
  documents: 'src/app/**/*.graphql',
  generates: {
    'src/types.generated.ts': { plugins: ['typescript'] },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'types.generated.ts',
      },
      plugins: ['typescript-operations', 'typed-document-node'],
      hooks: { afterOneFileWrite: ['prettier --write'] },
    },
  },
};

export default config;
