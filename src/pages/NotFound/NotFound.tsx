import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-[#080616]'>
      <h1>Not Found </h1>
      <Link to='/'>Accueil</Link>
    </div>
  );
}
