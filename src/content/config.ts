import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.string(),
    categories: z.array(z.string()),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

export const collections = {
  articles: articlesCollection,
};
