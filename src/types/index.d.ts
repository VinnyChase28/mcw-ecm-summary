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

export type AirtableResponse = {
  records: Projects;
};
