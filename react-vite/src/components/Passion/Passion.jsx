import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Passion.css';

export default function Passion({ passion }) {
  const { name, details, fa } = passion;
  return (
    <>
      <div className='passion-icon center'>
        <FontAwesomeIcon icon={fa} />
      </div>
      <h3 className='center'>{name}</h3>
      {details}
    </>
  );
}
