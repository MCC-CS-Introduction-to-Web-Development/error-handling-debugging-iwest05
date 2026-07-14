import type { CodegenConfig } from "@graphql-codegen/cli";

const codegenConfiguration: CodegenConfig = {
  overwrite: true,
  schema: "https://graphqlzero.almansi.me/api",
  documents: "schoolFolder/**/*.graphql",
  generates: {
    "src/__generated__/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        apolloReactHooksImportFrom: "@apollo/client/react",
      },
    },
  },
};

export default codegenConfiguration;
