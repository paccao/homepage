import "astro:content";

declare module "astro:content" {
    interface InferEntrySchema {
        // keep existing collections, extend "blog" to include figCaption
        blog: {
            // keep other fields as-is, extend with figCaption
            [key: string]: any;
            figCaption?: string;
        };
    }
}
