/// <reference types="astro/client" />

interface ImportMetaEnv {
  WP_GRAPHQL_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
