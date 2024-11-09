import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import techList from '../../data/tech';
import TechLabel from '../TechLabel/TechLabel';

export default function Project({ project }) {
  const { description, type, tech, links, name } = project;
  return (
    <>
      <h2 className='center'>
        {'<='} {name} {'=>'}
      </h2>
      <div>
        <FontAwesomeIcon icon={faUpRightFromSquare} />{' '}
        <FontAwesomeIcon icon={faGithub} /> {type}
      </div>
      <img src='https://github.com/ohalloranjm/tatterpig/raw/main/images/landing-page.png' />
      {tech.map(name => (
        <TechLabel name={name} />
      ))}
      <p>{description}</p>
      {links && null}
    </>
  );
}
