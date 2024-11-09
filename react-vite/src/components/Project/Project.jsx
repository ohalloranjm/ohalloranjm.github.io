import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TechLabel from '../TechLabel/TechLabel';

export default function Project({ project }) {
  const { description, type, tech, links, name, image } = project;
  return (
    <>
      <h2 className='center'>
        {'<'} {name} {'>'}
      </h2>
      <div>
        <FontAwesomeIcon icon={faUpRightFromSquare} />{' '}
        <FontAwesomeIcon icon={faGithub} /> {type}
      </div>
      <img src={image} />
      {tech.map(name => (
        <TechLabel name={name} />
      ))}
      <p>{description}</p>
      {links && null}
    </>
  );
}
