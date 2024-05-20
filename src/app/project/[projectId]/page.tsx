import React from "react";
import { api } from "~/trpc/server";
import { Project } from "~/types";
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
      <h1 className="text-2xl font-bold">{project.fields["Project Ref"]}</h1>
      <p className="mt-2">{project.fields.Scope}</p>
      <p className="mt-2">
        Manager: {project.fields["Project Manager"] ?? "N/A"}
      </p>
      <p className="mt-2">
        Accountant: {project.fields["Project Accountant"] ?? "N/A"}
      </p>
      <p className="mt-2">
        Accountant Linked:{" "}
        {project.fields["Project Accountant Linked"] ?? "N/A"}
      </p>
      <p className="mt-2">Discipline: {project.fields.Discipline ?? "N/A"}</p>
      <p className="mt-2">Client: {project.fields.Client}</p>
    </div>
    </div>
  );
};

export default ProjectPage;
