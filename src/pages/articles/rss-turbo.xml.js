import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  let articles = (await getCollection("articles")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  let items = articles.map((post) => ({
    title: post.data.title,
    pubDate: post.data.pubDate,
    description: post.data.description,
    link: `/articles/${post.slug}/`,
    content: post.body
  }));

  return rss({
    title: "Статьи | awilum.ru",
    description: "Про разработку программного обеспечения, образование и IT в целом.",
    site: context.site,
    items: items,
  });
}