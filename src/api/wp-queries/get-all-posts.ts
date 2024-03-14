import { query } from "@/lib/graph-ql";
import type { PostManyReturn } from "@/types/util";

const _query = `
{
  posts {
    nodes {
      excerpt
    }
  }
}
`;

export const getAllPosts = async () => {
  return query<PostManyReturn>({ query: _query });
};
