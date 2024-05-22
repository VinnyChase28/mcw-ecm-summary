import React, { useState } from "react";
import { getClientForRegion } from "~/lib/airtable";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  fields: {
    "Project Number Ref": string;
    "Project Ref": string;
    Scope?: string;
    "Project Accountant"?: string;
    Client?: string;
  };
}

type ProjectsByRegion = Record<string, Project[]>;

const ProjectList = async () => {
  const regions = ["Vancouver", "Edmonton", "Calgary"];
  const projectsByRegion: ProjectsByRegion = {};

  for (const region of regions) {
    const client = getClientForRegion(region);
    projectsByRegion[region] = (await client.fetchAllRecords()) as Project[];
  }

  return (
    <div>
      <Image
        src="/vancouver.jpg"
        alt="Vancouver Banner"
        width={2000}
        height={1000}
        layout="responsive"
        className="rounded-lg"
      />
      <div className="flex items-center justify-between pt-12">
        <Input placeholder="Search projects..." className="w-full max-w-md" />
        <Filter className="ml-4 h-6 w-6 text-primary hover:cursor-pointer" />
      </div>
      <Tabs defaultValue={regions[0]} className="w-full pt-4">
        <TabsList className="flex items-center justify-center">
          {regions.map((region) => (
            <TabsTrigger key={region} value={region} className="mx-2">
              {region}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(projectsByRegion).map(([region, projects]) => (
          <TabsContent key={region} value={region}>
            <div className="grid grid-cols-1 items-stretch gap-4 p-4 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {projects.slice(0, 5).map((project) => (
                <Link
                  key={project.id}
                  href={`/project/${project.fields["Project Number Ref"]?.toString()}`}
                  className="block text-gray-800 no-underline"
                >
                  <div className="flex flex-col overflow-hidden rounded-lg border shadow-lg">
                    <div className="flex-grow bg-gray-100 p-4">
                      <h2 className="line-clamp-1 text-lg font-semibold">
                        {project.fields["Project Ref"]?.toString()}
                      </h2>
                      <p className="line-clamp-2 text-sm">
                        {project.fields.Scope?.toString()}
                      </p>
                    </div>
                    <div className="flex-grow p-4">
                      <p className="line-clamp-3">
                        Manager:{" "}
                        {project.fields["Project Accountant"]?.toString()}
                      </p>
                      <p className="line-clamp-3">
                        Client: {project.fields.Client?.toString()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ProjectList;
