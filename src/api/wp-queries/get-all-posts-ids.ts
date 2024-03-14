import { query } from "@/lib/graph-ql";
import type { PostManyReturn } from "@/types/util";

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
  return query<PostManyReturn>({ query: _query });
};
