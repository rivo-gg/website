import { readdirSync } from "fs";
import path from "path";

export const PROJECTS_PATH = path.join(process.cwd(), "projects");

export const projectsPaths = readdirSync(PROJECTS_PATH)
  .filter((path) => path.charAt(0) !== "_")
  .filter((path) => /\.mdx?$/.test(path));
