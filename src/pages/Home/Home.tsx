import './Home.css';
import Section from '../../shared/components/Section/Section';
import { useAnimes } from '../../features/anime/hooks/useAnimes';

export default function Home() {
  const { animes, loading: loadingAnimes } = useAnimes();
  return (
    <div className='min-h-screen bg-[#080616] py-10'>
      <Section title='Trending' animes={animes} loading={loadingAnimes} />
    </div>
  );
}
