import type { Post } from "@/generated/graphql";

type WPManyReturn<K extends string, V> = {
  [P in K]: {
    nodes: V;
  };
};

type WPSingleReturn<K extends string, V> = {
  [P in K]: V;
};

export type PostManyReturn = WPManyReturn<"posts", Post[]>;
export type PostSingleReturn = WPSingleReturn<"post", Post>;
