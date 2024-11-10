import {
  faChevronLeft,
  faChevronRight,
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
        <hgroup className='center'>
          <h3 className='project-name'>{name}</h3>
          <div className='project-type'>{type}</div>
        </hgroup>
        <button onClick={handleClickRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <img className='project-image' src={image} />

      <ul className='project-tech'>
        {tech.map(name => (
          <TechLabel key={name} name={name} />
        ))}
      </ul>

      <p>{description}</p>

      <div className='project-links'>
        {links.map(({ name, fa, to }) => (
          <a key={name} href={to}>
            <FontAwesomeIcon icon={fa}></FontAwesomeIcon> {name}
          </a>
        ))}
      </div>
    </>
  );
}
