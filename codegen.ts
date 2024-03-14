import "dotenv/config";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.WP_GRAPHQL_ENDPOINT,
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
