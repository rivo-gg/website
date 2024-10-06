"use server";

import { Project, getProjects } from "../actions";
import Image from "next/image";
import Link from "next/link";

export async function ProjectList() {
  const projects = await getProjects();

  const projectPath = (project: Project) => {
    return `/projects/${project.filePath.replace(/\.mdx?$/, "")}`;
  };

  if (projects.length === 0) {
    return (
      <p className="text-lg text-foreground/70">
        There are no projects projects yet.
      </p>
    );
  }

  return (
    <>
      {projects.map((project) => (
        <Link
          href={projectPath(project)}
          key={project.filePath}
          className="w-fit relative flex flex-col items-start justify-between rounded-lg bg-accent text-foreground/70 transition-all duration-300 hover:bg-foreground/10 sm:flex-row sm:gap-6 gap-4 overflow-hidden p-4"
        >
          {project.data.thumbnail?.large && (
            <Image
              src={project.data.thumbnail.large}
              alt={project.data.thumbnail.alt || project.data.title}
              className="flex rounded-lg  w-[250px] h-[300px] object-cover object-left"
              width={1920}
              height={1080}
            />
          )}
          <div className="flex flex-col items-start gap-2 w-full max-w-lg">
            <div className="flex w-full flex-wrap items-center gap-2">
              {project.data.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="flex items-center rounded bg-foreground/5 px-2 py-1 text-xs text-foreground/70 hover:bg-foreground/10 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-xl text-foreground">
              {project.data.title}
            </span>
            <span className="text-sm max-w-xs line-clamp-4">
              {project.data.description}
            </span>
          </div>
        </Link>
      ))}
    </>
  );
}
