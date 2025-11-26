import React from "react";

const Skills = () => {
  return (
    <section className="relative z-10 text-white p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>

      <div className="grid grid-cols-2 gap-4 text-lg">
        <div>
          <h3 className="font-semibold">Technical</h3>
          <ul className="list-disc pl-4">
            <li>React + Vite</li>
            <li>Tailwind CSS</li>
            <li>Python</li>
            <li>Data Analysis</li>
            <li>Machine Learning Basics</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Tools</h3>
          <ul className="list-disc pl-4">
            <li>Google Workspace</li>
            <li>Notion</li>
            <li>Excel / Sheets</li>
            <li>PowerPoint</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Soft Skills</h3>
          <ul className="list-disc pl-4">
            <li>Communication</li>
            <li>Multitasking</li>
            <li>Problem Solving</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
