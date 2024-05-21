import React from "react";
import { api } from "~/trpc/server";
import { Project } from "~/types";
import ProjectOverview from "@/components/project-overview";
import Products from "@/components/products";
import Chat from "@/components/chat-ai";
import { Separator } from "@/components/ui/separator";

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
        <div className="py-5">
          <Separator />
        </div>
        <Products />
        <div className="py-5">
          <Separator />
        </div>
        <Chat />
      </div>
    </div>
  );
};

export default ProjectPage;