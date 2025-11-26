import React from "react";

const Projects = () => {
  return (
    <section className="relative z-10 text-white p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Japanese Study App (React + Tailwind)</li>
        <li>Digital Medical Prescription Platform</li>
        <li>Vehicle Detection Model (RF-DETR + CIFAR)</li>
        <li>Smart Surveillance – EDSA Busway (Faster R-CNN)</li>
      </ul>
    </section>
  );
};

export default Projects;
