import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Passion.css';

export default function Passion({ passion }) {
  const { name, details, fa } = passion;
  return (
    <div className='passion'>
      <div className='passion-icon center'>
        <FontAwesomeIcon icon={fa} />
      </div>
      <h3 className='passion-name center'>{name}</h3>
      <div className='passion-details'>{details}</div>
    </div>
  );
}
