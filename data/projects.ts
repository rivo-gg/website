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
  {
    title: "Cavescape",
    date: new Date("2021-09-01"),
    description:
      "Cavescape is a co-op survival adventure game with one of the most fun mechanics around: Grappling Hooks! You play as Fred, a miner on a mission to make it back up the cave to be reunited with his best friend, Rocky the puppy, who was violently taken from him by Gorgath, the big ugly worm monster.",
    thumbnail: {
      large: "/projects/cavescape/header.jpg",
      alt: "Cavescape",
    },
    tags: ["Game", "Singleplayer"],
    path: "/projects/cavescape",
  },
];
