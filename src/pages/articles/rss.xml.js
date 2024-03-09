import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  let articles = (await getCollection("articles")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  articles = articles.slice(0,5);

  let items = articles.map((post) => ({
    title: post.data.title,
    pubDate: post.data.pubDate,
    description: post.data.description,
    link: `/articles/${post.slug}/`
  }));

  return rss({
    title: "Статьи | awilum.ru",
    description: "Про разработку программного обеспечения, образование и IT в целом.",
    site: context.site,
    items: items,
    stylesheet: '/rss.styles.xsl',
  });
}