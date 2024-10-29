import { readdirSync, statSync } from "fs";
import path from "path";

export const PROJECTS_PATH = path.join(process.cwd(), "projects");

export const projectsPaths = readdirSync(PROJECTS_PATH).filter((name) => {
  const fullPath = path.join(PROJECTS_PATH, name);
  return statSync(fullPath).isDirectory() && name.charAt(0) !== "_";
});
