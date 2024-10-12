import { PROJECTS_PATH, projectsPaths } from "@/lib/mdx";
import { readFile } from "node:fs/promises";
import matter from "gray-matter";
import { cache } from "react";
import path from "node:path";

export type Project = {
  content: string;
  data: {
    title: string;
    description: string;
    date: string;
    seoDate: string;
    thumbnail?: {
      large?: string;
      banner?: string;
      alt?: string;
    };
    tags: string[];
  };
  filePath: string;
};

export const getProjects = cache(async (): Promise<Project[]> => {
  const buffers = await Promise.all(
    projectsPaths.map((filePath) =>
      readFile(path.join(PROJECTS_PATH, filePath))
    )
  );
  return buffers.map((buffer, i) => {
    const { content, data } = matter(buffer);

    return {
      content,
      data,
      filePath: projectsPaths[i],
    };
  }) as Project[];
});
