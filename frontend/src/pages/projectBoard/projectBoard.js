import React, { useState } from "react";

const ProjectBoard = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    { id: 0, name: "Project 0" },
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
  ];

  const ideas = [
    {
      id: 0,
      title: "Idea 0",
      content: " ",
    },
    {
      id: 1,
      title: "Idea 1",
      content: " ",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f1dc99" }}>
      <div className="flex">
        <div className="w-64 bg-white p-6 min-h-screen shadow-lg">
          <div className="mb-8">
            <h1
              className="text-2xl font-bold mb-2"
              style={{ color: "#6a4026" }}
            >
              SEEDS IDEA BOARD:
            </h1>
            <h2 className="text-xl" style={{ color: "#6a4026" }}>
              PROJECT 0
            </h2>
            <button
              className="mt-4 text-white px-4 py-2 rounded-lg text-sm font-medium"
              style={{ backgroundColor: "#6a951f" }}
            >
              ADMIN PANEL
            </button>
          </div>

          <div className="mb-8">
            <button
              className="text-white px-4 py-2 rounded-lg flex items-center space-x-2 mb-6"
              style={{ backgroundColor: "#91b472" }}
            >
              <span>IDEA</span>
            </button>
          </div>

          <div className="mb-8">
            <h3 className="font-bold mb-4" style={{ color: "#6a4026" }}>
              PROJECT BOARDS:
            </h3>
            <div className="space-y-2">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className={`w-full p-3 rounded-lg text-left font-medium ${
                    selectedProject === project.id
                      ? "text-white"
                      : "hover:opacity-80"
                  }`}
                  style={{
                    backgroundColor:
                      selectedProject === project.id ? "#6a951f" : "#f1dc99",
                    color: selectedProject === project.id ? "white" : "#6a4026",
                  }}
                >
                  {project.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <button
              className="w-full text-white p-3 rounded-lg flex items-center justify-center space-x-2"
              style={{ backgroundColor: "#91b472" }}
            >
              <span>TIME TRACKING</span>
            </button>
            <button
              className="w-full text-white p-3 rounded-lg flex items-center justify-center space-x-2"
              style={{ backgroundColor: "#91b472" }}
            >
              <span>DRAFTS</span>
            </button>
          </div>
        </div>

        <div className="flex-1 p-8" style={{ backgroundColor: "#f1dc99" }}>
          <div className="space-y-6">
            {ideas.map((idea) => (
              <div
                key={idea.id}
                className="rounded-lg p-6 shadow-lg"
                style={{ backgroundColor: "#6a4026" }}
              >
                <h3
                  className="text-center text-lg font-medium mb-4"
                  style={{ color: "#e8c352" }}
                >
                  {idea.title}
                </h3>
                <div className="bg-white rounded-lg p-8 min-h-48">
                  <div
                    className="whitespace-pre-line leading-relaxed"
                    style={{ color: "#6a4026" }}
                  >
                    {idea.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;
