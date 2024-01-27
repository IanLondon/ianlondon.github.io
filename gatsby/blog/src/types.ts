import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

// TODO: derive from GraphQL??? See gatsby-node.ts
export interface BlogPostFrontMatter {
  category: "blog" | "project";
  comments?: boolean; // allow comments for the page if true
  date: Date;
  slug: string;
  tags: string[];
  // TODO: I'm just guessing at the type for the image here, can't find the documentation
  splashImage?: FileNode | null;
  summary?: string;
  title: string;
}
