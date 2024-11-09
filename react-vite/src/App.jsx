import Project from './components/Project/Project';
import passions from './data/passions.jsx';
import projects from './data/projects.jsx';
import { useState } from 'react';
import tech from './data/tech.js';
import links from './data/links.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TechLabel from './components/TechLabel/TechLabel.jsx';

function App() {
  const [projectIdx, setProjectIdx] = useState(0);
  const currProject = projects[projectIdx];

  return (
    <>
      <header className='page-header'>
        <h1 className='page-title'>Joy O’Halloran</h1>
        <p className='my-title'>Full-Stack Software Engineer</p>

        <div className='presence'>
          {links.map(({ to, fa, id }) => (
            <a href={to} key={id} className={`presence-link pl-${id}`}>
              <FontAwesomeIcon icon={fa} />
            </a>
          ))}
        </div>

        <a className='resume'>Résumé</a>
      </header>

      <ul className='tech-master-list'>
        {Object.entries(tech).map(([name, i]) => (
          <TechLabel key={i} name={name} i={i} />
        ))}
      </ul>

      <Project
        project={currProject}
        setProjectIdx={setProjectIdx}
        projectsLength={projects.length}
      />

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
