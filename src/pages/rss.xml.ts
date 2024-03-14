import rss from "@astrojs/rss";
import { getAllPostsRSS } from "@/api/wp-queries/get-all-posts-rss";
import type { APIRoute } from "astro";
import type { RSSFeedItem } from "@astrojs/rss";

export const GET: APIRoute = async (context) => {
  const posts = await getAllPostsRSS();

  const items: RSSFeedItem[] = posts.map((post) => ({
    title: post.title!,
    link: `${context.site!}/posts/${post.id}/`,
    pubDate: new Date(post.date!),
  }));

  return rss({
    title: "RSS Title",
    description: "RSS Description",
    site: context.site!,
    items,
  });
};
