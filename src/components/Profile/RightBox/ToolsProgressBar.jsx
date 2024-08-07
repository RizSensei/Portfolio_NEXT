"use client";
import React from "react";
import ProgressBar from "../../Basic/ProgressBar";

const ToolsProgressBar = () => {
  const tools = [
    { name: "ReactJS", progress: 25 },
    { name: "Figma", progress: 20 },
    { name: "Tailwind", progress: 60 },
    { name: "NextJS", progress: 5 },
    { name: "Material UI", progress: 30 },
    { name: "Framer Motion", progress: 5 },
  ];
  return (
    <main className="flex flex-col gap-5">
      {tools.map((tool, index) => {
        return <ProgressBar key={index} tool={tool.name} progress={tool.progress} />;
      })}
    </main>
  );
};

export default ToolsProgressBar;
