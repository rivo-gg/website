import { Project } from "@/interfaces/projects";

export const projects: Project[] = [
  {
    title: "Would You Bot",
    date: new Date("2021-09-01"),
    description:
      "Would you lets you play Would You Rather, Never Have I Ever, Higher or Lower, Truth or Dare and What Would You Do on Discord!",
    thumbnail: {
      large: "/projects/would-you/showcase.png",
      alt: "Would You Bot",
    },
    tags: ["React", "Node.js", "MongoDB"],
    path: "/projects/would-you",
  },
];
