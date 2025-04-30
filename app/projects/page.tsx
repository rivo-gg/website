import { ProjectList } from "@/components/projects/project-list";
import { ProjectListSkeleton } from "@/components/projects/project-list-skeleton";
import { Suspense } from "react";

const ProjectPage = async () => {
	return (
		<main className="w-full mx-auto max-w-7xl mt-8">
			<h1 className="text-4xl font-bold text-primary flex justify-center">Projects</h1>
			<div className="mt-12 flex flex-col gap-4">
				<Suspense fallback={<ProjectListSkeleton />}>
					<ProjectList />
				</Suspense>
			</div>
		</main>
	);
};

export default ProjectPage;
