import Project from './components/Project/Project';
import passions from './data/passions.jsx';
import projects from './data/projects.jsx';
import { useState } from 'react';
import tech from './data/tech.js';

function App() {
  const [project, setProject] = useState('Tatterpig');
  const currProject = projects.find(p => p.name === project);
  // const { languages, db, backend, frontend, other } = tech;

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

      <h2>Technologies</h2>
      {Object.entries(tech).map(([name, items]) => {
        return (
          <>
            <h3>{name}</h3>
            <ul>
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        );
      })}
    </>
  );
}

export default App;
