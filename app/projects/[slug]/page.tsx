import { MainContent } from "./components/MainContent";
import { TableOfContents } from "./components/TableOfContents";
import { getProjects } from "./actions";
import { projectsPaths } from "@/lib/mdx";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { frontmatter } = await getProjects(slug);
  const title = frontmatter.title + "- Would You Bot";

  return {
    title,
    description: frontmatter.description,
    metadataBase: new URL("https://wouldyoubot.gg/"),
    openGraph: {
      title,
      publishedTime: frontmatter.seoDate,
      type: "article",
      description: frontmatter.description,
      tags: frontmatter.tags,
      images: frontmatter.thumbnail?.large,
    },
  };
}

export function generateStaticParams() {
  return projectsPaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ slug }));
}

const ProjectsProjects = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const result = await getProjects(slug);
  const { frontmatter: frontMatter } = result;

  return (
    <>
      <div className="w-full max-w-8xl mx-auto px-8 text-foreground/70">
        <Link
          href="/projects"
          className="text-foreground/70 transition-all hover:text-foreground"
        >
          <p className="mb-4">&larr; Back</p>
        </Link>
        {frontMatter.thumbnail?.banner && (
          <Image
            src={frontMatter.thumbnail.banner}
            alt={frontMatter.title + "- Would You Bot"}
            width={1000}
            height={200}
            className="mb-4 h-auto w-full rounded-lg"
          />
        )}
        <h1 className="text-4xl font-bold text-foreground">
          {frontMatter.title}
        </h1>
        <p className="mt-4">{frontMatter.description}</p>
        <div className="my-4 flex flex-wrap gap-1 border-b border-b-foreground/50 pb-4">
          {frontMatter.tags.map((tag) => (
            <p
              key={tag}
              className="min-w-fit rounded-full border border-foreground/50 px-2 py-1 text-xs text-foreground/70"
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="xl: relative left-0 top-0 mb-10 flex border-b border-foreground/50 pb-5 xl:fixed xl:left-4 xl:top-40 xl:border-b-0">
          <TableOfContents toc={frontMatter.toc ?? []} />
        </div>
      </div>

      <MainContent source={result} />
    </>
  );
};

export default ProjectsProjects;
