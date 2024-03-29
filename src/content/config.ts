import { defineCollection, z } from "astro:content";

const posts = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const events = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { posts, events };
