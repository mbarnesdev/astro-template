import { query } from "@/lib/graph-ql";
import type { Post } from "@/generated/graphql";
import type { WPPostReturnWrap } from "@/types/util";

const _query = `
{
  posts {
    nodes {
      title
      excerpt
      id
    }
  }
}
`;

export const getAllPostsRSS = async () => {
  return query<WPPostReturnWrap<Post>>({ query: _query });
};
