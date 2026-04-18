import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Watchlist from './pages/Watchlist/Watchlist';
import AnimeCatalog from './pages/AnimeCatalog/AnimeCatalog';
import AnimeDetails from './pages/AnimeDetails/AnimeDetails';
import CharacterCatalog from './pages/CharacterCatalog/CharacterCatalog';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import NotFound from './pages/NotFound/NotFound';
import Layout from './shared/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/watchlist',
        element: <Watchlist />,
      },
      {
        path: '/animecatalog',
        element: <AnimeCatalog />,
      },
      {
        path: '/animedetails/:id',
        element: <AnimeDetails />,
      },
      {
        path: '/charactercatalog',
        element: <CharacterCatalog />,
      },
      {
        path: '/characterdetails',
        element: <CharacterDetails />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
