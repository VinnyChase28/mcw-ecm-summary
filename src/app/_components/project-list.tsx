// components/ProjectList.server.jsx
import React from "react";
import { api } from "~/trpc/server";
import Link from "next/link";

const ProjectList: React.FC = async () => {
  const filterFormula = `OR(FIND('4596', {Project Ref}) > 0, FIND('5366', {Project Ref}) > 0, FIND('3524', {Project Ref}) > 0, FIND('5233', {Project Ref}) > 0, FIND('6229', {Project Ref}) > 0)`;
  6316;
  const projectsContainingRichmond =
    await api.airtable.fetchRecordsByFilter(filterFormula);

  return (
    <div>
      <div className="grid grid-cols-1 items-stretch gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projectsContainingRichmond.map((project) => (
          <Link
            key={project["Project Number Ref"]?.toString()}
            href={`/project/${project["Project Number Ref"]?.toString()}`}
            className="block text-gray-800 no-underline"
          >
            <div className="flex flex-col overflow-hidden rounded-lg border shadow-lg">
              <div className="flex-grow bg-gray-100 p-4">
                <h2 className="line-clamp-1 text-lg font-semibold">
                  {project["Project Ref"]?.toString()}
                </h2>
                <p className="line-clamp-2 text-sm">
                  {project.Scope?.toString()}
                </p>
              </div>
              <div className="flex-grow p-4">
                <p className="line-clamp-3">
                  Manager: {project.Manager?.toString()}
                </p>
                <p className="line-clamp-3">
                  Client: {project.Client?.toString()}
                </p>
              </div>
              <div className="bg-gray-200 p-4">
                <p className="text-xs">
                  Created on:{" "}
                  {typeof project.createdTime === "string" ||
                  typeof project.createdTime === "number"
                    ? new Date(project.createdTime).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;