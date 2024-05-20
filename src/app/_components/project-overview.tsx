import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

interface ProjectFields {
  "Project Ref"?: string;
  Scope?: string;
  "Project Manager"?: string;
  "Project Accountant"?: string;
  "Project Accountant Linked"?: string;
  Discipline?: string;
  Client?: string;
}

interface ProjectOverviewProps {
  project: {
    fields: ProjectFields;
  };
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Project Ref:
          </div>
          <div className="text-sm">
            {project.fields["Project Ref"] ?? "N/A"}
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Scope:
          </div>
          <div className="text-sm">{project.fields.Scope ?? "N/A"}</div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Project Manager:
          </div>
          <div className="text-sm">
            {project.fields["Project Manager"] ?? "N/A"}
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Project Accountant:
          </div>
          <div className="text-sm">
            {project.fields["Project Accountant"] ?? "N/A"}
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Project Accountant Linked:
          </div>
          <div className="text-sm">
            {project.fields["Project Accountant Linked"] ?? "N/A"}
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Discipline:
          </div>
          <div className="text-sm">{project.fields.Discipline ?? "N/A"}</div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Client:
          </div>
          <div className="text-sm">{project.fields.Client ?? "N/A"}</div>
        </div>
      </CardContent>
    </Card>
  );
}
