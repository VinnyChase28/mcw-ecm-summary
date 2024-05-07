// components/ProjectList.server.jsx
import React from "react";
import { api } from "~/trpc/server";
import Link from "next/link";

export type Project = {
  id: string;
  createdTime: string;
  fields: {
    "Project Ref": string;
    "Project Number Ref": string;
    Scope: string;
    Manager: string;
    Client: string;
  };
};

export type Projects = Project[];

const ProjectList: React.FC = async () => {
  const projects: Projects = await api.airtable.fetchRecords();

  return (
    <div className="grid grid-cols-1 items-stretch gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {projects.slice(0, 10).map((project) => (
        <Link
          key={project.id}
          href={`/project/${project.id}`}
          className="block text-gray-800 no-underline"
        >
          <div className="flex flex-col overflow-hidden rounded-lg border shadow-lg">
            <div className="flex-grow bg-gray-100 p-4">
              <h2 className="line-clamp-1 text-lg font-semibold">
                {project.fields["Project Ref"]}
              </h2>
              <p className="line-clamp-2 text-sm">{project.fields.Scope}</p>
            </div>
            <div className="flex-grow p-4">
              <p className="line-clamp-3">Manager: {project.fields.Manager}</p>
              <p className="line-clamp-3">Client: {project.fields.Client}</p>
            </div>
            <div className="bg-gray-200 p-4">
              <p className="text-xs">
                Created on: {new Date(project.createdTime).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
