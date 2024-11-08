import Project from './components/Project/Project';
import passions from './data/passions.jsx';
import projects from './data/projects.jsx';
import { useState } from 'react';
import tech from './data/tech.js';
import links from './data/links.js';

function App() {
  const [project, setProject] = useState('Tatterpig');
  const currProject = projects.find(p => p.name === project);

  return (
    <div className='all'>
      <h1>Joy O’Halloran</h1>
      <p>Full-Stack Developer</p>

      {Object.entries(links).map(([name, link]) => (
        <a href={link} key={name}>
          {name}
        </a>
      ))}

      <h2>{currProject.name}</h2>
      <Project project={currProject} />
      <div className='project-buttons'>
        {projects.map(p => (
          <button
            key={p.name}
            onClick={() => setProject(p.name)}
            disabled={project === p.name}
          >
            {p.name}
          </button>
        ))}
      </div>

      <h2>Passions</h2>

      {passions.map(p => (
        <>
          <h3>{p.name}</h3>
          {p.details}
        </>
      ))}

      <h2>Technologies</h2>
      <ul>
        {tech.map((items, index) => {
          return (
            <>
              {items.map((item, i) => (
                <li className={`techbox gradient-${index}`} key={i}>
                  {item}
                </li>
              ))}
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
