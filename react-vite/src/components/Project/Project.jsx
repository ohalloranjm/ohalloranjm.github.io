export default function Project({ project }) {
  const { name, description, type, tech, links } = project;
  console.log(links);
  return (
    <>
      <h3>{name}</h3>
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
