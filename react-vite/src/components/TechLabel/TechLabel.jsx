import tech from '../../data/tech';

export default function TechLabel({ name, i }) {
  return <div className={`techbox gradient-${i ?? tech[name]}`}>{name}</div>;
}
