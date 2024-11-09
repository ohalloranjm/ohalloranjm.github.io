import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TechLabel from '../TechLabel/TechLabel';

export default function Project({ project, setProjectIdx, projectsLength }) {
  const { description, type, tech, links, name, image } = project;

  const handleClickLeft = () =>
    setProjectIdx(prev => (prev ? prev : projectsLength) - 1);
  const handleClickRight = () =>
    setProjectIdx(prev => (prev + 1) % projectsLength);

  return (
    <>
      <h2 className='center'>
        <span onClick={handleClickLeft}>{'<'}</span> {name}{' '}
        <span onClick={handleClickRight}>{'>'}</span>
      </h2>
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
