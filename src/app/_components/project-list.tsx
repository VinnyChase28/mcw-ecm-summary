// components/ProjectList.server.jsx
import React from "react";
import { api } from "~/trpc/server";

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
    <div>
      <h1>Project List</h1>
      <ul>
        {projects.slice(0, 10).map((project) => (
          <li key={project.id}>
            <strong>{project.fields["Project Ref"]}</strong> -{" "}
            {project.fields.Scope}
            <br />
            Manager: {project.fields.Manager}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
