import Project from './components/Project/Project';
import projects from './data/projects.jsx';
import { useState } from 'react';

function App() {
  const [project, setProject] = useState('Tatterpig');
  const currProject = projects.find(p => p.name === project);

  return (
    <>
      <h1>Joy O&apos;Halloran</h1>
      <p>Full-Stack Developer</p>
      <p>
        I love building stuff that makes people’s lives easier. I got my first
        taste of programming while wrangling Excel macros; now I’m a full-stack
        web developer.
      </p>
      <p>
        If I’m not coding or sleeping, I’m probably making AMVs, running
        tabletop RPGs, or spending time with my family.
      </p>
      <h2>Projects</h2>
      {projects.map(p => (
        <button
          key={p.name}
          onClick={() => setProject(p.name)}
          disabled={project === p.name}
        >
          {p.name}
        </button>
      ))}
      <Project project={currProject} />
    </>
  );
}

export default App;
