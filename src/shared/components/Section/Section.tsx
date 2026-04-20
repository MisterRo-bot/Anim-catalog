import AnimeCard from '../AnimeCard/AnimeCard';
import './Section.css';

import type { Anime } from '../../../features/anime/types/anime';

interface AnimeSectionProps {
  animes: Anime[];
  title: string;
  loading: boolean;
}
export default function Section({ animes, title, loading }: AnimeSectionProps) {
  if (loading) return <p>Chargement...</p>;
  return (
    <div className='text-white'>
      <>
        <h2>{title}</h2>
        <div className='flex flex-wrap'>
          {animes.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      </>
    </div>
  );
}
