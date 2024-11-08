export default function Project({ project }) {
  const { description, type, tech, links } = project;
  return (
    <>
      {links.map(link => (
        <a href={link.to} key={link.name}>
          {link.name}
        </a>
      ))}
      <div>{type}</div>
      <div>{tech.join(', ')}</div>
      <p>{description}</p>
    </>
  );
}
