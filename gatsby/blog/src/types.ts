import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

export interface BlogPostFrontMatter {
  date: Date;
  slug: string;
  // TODO: I'm just guessing at the type for the image here, can't find the documentation
  splashImage?: FileNode;
  summary: string;
  title: string;
}
