import Project from './components/Project/Project';
import passions from './data/passions.jsx';
import projects from './data/projects.jsx';
import { useState } from 'react';
import tech from './data/tech.js';
import links from './data/links.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [project, setProject] = useState('Tatterpig');
  const currProject = projects.find(p => p.name === project);

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
    </>
  );
}

export default App;
