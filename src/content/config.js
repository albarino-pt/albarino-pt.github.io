import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		dateFormatted: z.string(),
	}),
});

const projectsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		heroImage: z.string(),
		description: z.string(),
		dateFormatted: z.string().optional(),
	}),
});

export const collections = {
	updates: postCollection,
	projects: projectsCollection,
};
