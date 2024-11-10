import Project from './components/Project/Project';
import passions from './data/passions.jsx';
import projects from './data/projects.jsx';
import { useState } from 'react';
import tech from './data/tech.js';
import links from './data/links.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TechLabel from './components/TechLabel/TechLabel.jsx';
import Passion from './components/Passion/Passion.jsx';

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

      <section className='block tech-block'>
        <ul className='tech-master-list'>
          {Object.entries(tech).map(([name, i]) => (
            <TechLabel key={i} name={name} i={i} />
          ))}
        </ul>
      </section>

      <section className='block project-block'>
        <h2>My Projects</h2>
        <Project
          project={currProject}
          setProjectIdx={setProjectIdx}
          projectsLength={projects.length}
        />
      </section>

      <section className='block passions-block'>
        <h2>My Passions</h2>
        {passions.map(p => (
          <Passion key={p.name} passion={p} />
        ))}
      </section>
    </>
  );
}

export default App;
