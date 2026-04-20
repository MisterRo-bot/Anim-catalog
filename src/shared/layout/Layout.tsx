import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SearchBar from '../components/searchBar';
import './layout.css';
import ShowResults from '../components/ShowResults';
import { NavLink } from 'react-router-dom';
export default function Layout() {
  return (
    <div className='flex flex-col  min-h-screen'>
      <header className='px-10 shadow-xl border-white bg-[#080616] h-[60px] flex flex-row  items-center  text-[#EEEEEE] '>
        <Link to='/' className=''>
          <h1 className='mx-10 text-lg'>Catanime</h1>
        </Link>
        <div>
          <SearchBar />
          <ShowResults />
        </div>
        <div className='flex gap-4'>
          <NavLink to='/animecatalog'>Animes</NavLink>
          <NavLink to='/charactercatalog'>Characters</NavLink>
          <NavLink to='/watchlist'>Watchlist</NavLink>
        </div>
      </header>
      <main className='min-h-screen'>
        <Outlet />
      </main>
    </div>
  );
}
