import { query } from "@/lib/graph-ql";
import type { Post } from "@/generated/graphql";
import type { WPPostReturnWrap } from "@/types/util";

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

  return query<WPPostReturnWrap<Post>>({
    query: _query,
    variables: _variables,
  });
};
