import React from "react";
import { api } from "~/trpc/server";
import { Project } from "~/types";
import ProjectOverview from "@/components/project-overview";
import Products from "@/components/products";

const ProjectPage = async ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;
  const regions: Array<"Vancouver" | "Edmonton" | "Calgary"> = [
    "Vancouver",
    "Edmonton",
    "Calgary",
  ];
  let project: Project | null = null;

  for (const region of regions) {
    try {
      const fetchedProject = await api.airtable.fetchProjectById({
        region,
        projectId,
      });
      project = fetchedProject as Project;
      if (project) break;
    } catch (error) {
      console.error(`Error fetching project in region ${region}:`, error);
    }
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <div className="p-4">
        <ProjectOverview project={project} />
        <Products />
      </div>
    </div>
  );
};

export default ProjectPage;