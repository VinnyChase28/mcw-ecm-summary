export interface Project {
  id: string;
  fields: {
    "Project Ref": string;
    "Project Number Ref": string;
    Scope: string;
    Client: string;
    "Project Manager"?: string;
    "Project Accountant"?: string;
    "Project Accountant Linked"?: string;
    Discipline?: string;
    // Add any other fields that might be present
  };
}

export type Projects = Project[];

export type AirtableResponse = {
  records: Projects;
};
