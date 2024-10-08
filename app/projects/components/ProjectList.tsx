"use server";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project, getProjects } from "../actions";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProjectArrow } from "@/icons";

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
    <div className="w-full relative flex flex-col items-start overflow-hidden gap-[2px]">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-52 bg-gradient-to-t from-background z-20"></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-8 h-52 bg-gradient-to-b from-background z-20"></div>
      {projects.map((project, index) => (
        <div
          key={project.filePath}
          className="flex col-span-3 gap-2 justify-between w-full"
        >
          <div className="flex flex-col justify-center w-fit relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full border border-foreground/25 border-dashed"></div>
            <div className="w-5 h-5 rounded-full bg-primary z-30 relative">
              <span
                className={cn(
                  "absolute whitespace-nowrap",
                  index % 2 === 0 ? "left-8" : "right-8"
                )}
              >
                {project.data.date}
              </span>
              <ProjectArrow
                className={cn(
                  "w-28 h-28 absolute text-foreground/50",
                  index % 2 === 0
                    ? "-bottom-6 right-6 rotate-90"
                    : "-top-6 left-6 -rotate-90"
                )}
              />
            </div>
          </div>
          <div
            className={cn(
              "relative flex flex-wrap items-center justify-between rounded-lg sm:flex-row sm:gap-6 gap-4 overflow-hidden group w-full max-w-[475px] h-[200px]",
              index % 2 === 0 ? "order-last" : "order-first"
            )}
          ></div>
          <Link
            href={projectPath(project)}
            className={cn(
              "relative flex flex-wrap items-center justify-between rounded-lg bg-accent text-foreground/70 transition-all duration-300 hover:bg-foreground/10 sm:gap-6 gap-4 overflow-hidden group w-full max-w-[475px] h-[200px] mb-6",
              index % 2 === 0
                ? "order-first flex-row-reverse text-end"
                : "order-last flex-row text-start"
            )}
          >
            <div
              className={cn(
                "flex flex-col items-start gap-2 w-full max-w-[300px] py-4 px-6 z-20"
              )}
            >
              <div
                className={cn(
                  "flex w-full flex-wrap items-center gap-2",
                  index % 2 === 0 ? "justify-end" : "justify-start"
                )}
              >
                {project.data.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center rounded bg-foreground/5 px-2 py-1 text-xs text-foreground/70 hover:bg-foreground/10 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xl text-foreground line-clamp-2">
                {project.data.title}
              </span>
              <span className="text-sm max-w-xs line-clamp-3">
                {project.data.description}
              </span>
            </div>
            {project.data.thumbnail?.large && (
              <>
                <Image
                  src={project.data.thumbnail.large}
                  alt={project.data.thumbnail.alt || project.data.title}
                  className={cn(
                    "absolute right-0 top-0 w-auto h-[200px] object-cover group-hover:opacity-80 group-hover:brightness-75 transition-all duration-300",
                    index % 2 === 0 ? "left-0" : "right-0"
                  )}
                  width={1920}
                  height={1080}
                />
                <div
                  className={cn(
                    "absolute flex items-center p-8 w-full h-full from-accent from-60%",
                    index % 2 === 0
                      ? "bg-gradient-to-l justify-start"
                      : "bg-gradient-to-r justify-end"
                  )}
                >
                  {index % 2 === 0 ? (
                    <ArrowLeft className="w-10 h-10 text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  ) : (
                    <ArrowRight className="w-10 h-10 text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  )}
                </div>
              </>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
