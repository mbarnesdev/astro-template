import { query } from "@/lib/graph-ql";
import type { PostSingleReturn } from "@/types/util";

const _query = `
query GetPostById($id:ID!) {
  post(id: $id) {
    content
    excerpt
  }
}
`;

export const getPostById = async (id: string) => {
  const _variables = { id };

  return query<PostSingleReturn>({
    query: _query,
    variables: _variables,
  });
};
