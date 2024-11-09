import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronLeft,
  faChevronRight,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TechLabel from '../TechLabel/TechLabel';
import './Project.css';

export default function Project({ project, setProjectIdx, projectsLength }) {
  const { description, type, tech, links, name, image } = project;

  const handleClickLeft = () =>
    setProjectIdx(prev => (prev ? prev : projectsLength) - 1);
  const handleClickRight = () =>
    setProjectIdx(prev => (prev + 1) % projectsLength);

  return (
    <>
      <div className='project-scroll'>
        <button onClick={handleClickLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h2 className='center'>{name} </h2>
        <button onClick={handleClickRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div>
        <FontAwesomeIcon icon={faUpRightFromSquare} />{' '}
        <FontAwesomeIcon icon={faGithub} /> {type}
      </div>
      <img src={image} />
      {tech.map(name => (
        <TechLabel key={name} name={name} />
      ))}
      <p>{description}</p>
      {links && null}
    </>
  );
}
