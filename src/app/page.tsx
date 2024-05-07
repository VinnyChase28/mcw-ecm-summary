import React from "react";
import Nav from "./_components/navigation/nav";
import ProjectList from "./_components/project-list";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <div className="w-1/4">
        <Nav /> {/* Sidebar (Nav component) */}
      </div>
      <div className="container mx-auto w-3/4 py-10">
        <ProjectList />
      </div>
    </main>
  );
}
