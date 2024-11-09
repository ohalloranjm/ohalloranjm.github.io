import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Project({ project }) {
  const { description, type, tech, links, name } = project;
  return (
    <>
      <h2>{name}</h2>
      {/* {links.map(link => (
        <a href={link.to} key={link.name}>
          {link.name}
        </a>
      ))} */}
      <div>
        <FontAwesomeIcon icon={faUpRightFromSquare} />{' '}
        <FontAwesomeIcon icon={faGithub} /> {type}
      </div>
      <img src='https://github.com/ohalloranjm/tatterpig/raw/main/images/landing-page.png' />
      <div>{tech.join(', ')}</div>
      <p>{description}</p>
      {links && null}
    </>
  );
}
