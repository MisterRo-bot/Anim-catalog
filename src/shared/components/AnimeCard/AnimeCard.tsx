import type { Anime } from '../../../features/anime/types/anime.ts';
import './AnimeCard.css';
import { Link } from 'react-router-dom';
interface AnimeCardProps {
  anime: Anime;
}
export default function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <div>
      <Link to='/animesdetails/:id'>
        <img src={anime.images.jpg.image_url} alt={anime.title} />
      </Link>
      <div>
        <h3>{anime.title}</h3>
        <p>{anime.score} </p>
      </div>
    </div>
  );
}
