import { query } from "@/lib/graph-ql";
import type { PostManyReturn } from "@/types/util";

const _query = `
{
  posts {
    nodes {
      title
      date
      id
    }
  }
}
`;

export const getAllPostsRSS = async () => {
  return query<PostManyReturn>({ query: _query });
};
