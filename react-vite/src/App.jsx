import Project from './components/Project/Project';
import passions from './data/passions.jsx';
import projects from './data/projects.jsx';
import { useState } from 'react';

function App() {
  const [project, setProject] = useState('Tatterpig');
  const currProject = projects.find(p => p.name === project);

  return (
    <>
      <h1>Joy O’Halloran</h1>
      <p>Full-Stack Developer</p>

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

      <h2>Passions</h2>

      {passions.map(p => (
        <>
          <h3>{p.name}</h3>
          {p.details}
        </>
      ))}
    </>
  );
}

export default App;
