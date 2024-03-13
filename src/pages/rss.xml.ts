import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import type { RSSFeedItem } from "@astrojs/rss";

const getPosts = async (): Promise<RSSFeedItem[]> => {
  return new Promise((resolve) => resolve([]));
};

export const GET: APIRoute = async (context) => {
  const posts = await getPosts();

  return rss({
    title: "RSS Title",
    description: "RSS Description",
    site: context.site!,
    items: posts,
  });
};
