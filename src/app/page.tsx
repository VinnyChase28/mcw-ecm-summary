import React from "react";
import { Sidebar } from "./_components/navigation/side-nav";
import ProjectList from "./_components/project-list";
import Topbar from "./_components/navigation/top-nav";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="grid min-h-screen grid-cols-1 pt-20 md:grid-cols-4">
        {/* Sidebar, hidden on mobile and always visible on desktop */}
        <Sidebar className="hidden pt-12 md:col-span-1 md:block" />

        {/* Main Content Area */}
        <div className="container mx-auto flex-1 px-4 py-10 md:col-span-3 lg:px-10">
          <ProjectList />
        </div>
      </div>
    </div>
  );
}