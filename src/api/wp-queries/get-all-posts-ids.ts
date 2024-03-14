import { query } from "@/lib/graph-ql";
import type { Post } from "@/generated/graphql";
import type { WPPostReturnWrap } from "@/types/util";

const _query = `
query GetAllPostsIds {
  posts {
    nodes {
      title
      id
    }
  }
}
`;

export const getAllPostsIds = async () => {
  return query<WPPostReturnWrap<Post[]>>({ query: _query });
};
