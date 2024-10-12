import { mdxComponents } from "./mdxComponents";
import { compileMDX, CompileMDXResult } from "next-mdx-remote/rsc";
import { readFile } from "node:fs/promises";
import { PROJECTS_PATH } from "@/lib/mdx";
import { cache } from "react";
import path from "node:path";

export interface FrontMatter {
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
  toc?: string[];
}

export const getProjects = cache(
  async (slug: string): Promise<CompileMDXResult<FrontMatter>> => {
    const projectsFilePath = path.join(PROJECTS_PATH, `${slug}.mdx`);
    const source = await readFile(projectsFilePath);

    return await compileMDX({
      source: source,
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
      },
    });
  }
);
