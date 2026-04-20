import type { Anime } from '../types/anime';
import { useState, useEffect } from 'react';

export function useAnimes() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/top/anime')
      .then((res) => res.json())
      .then((data: { data: Anime[] }) => {
        setAnimes(data.data);
        setLoading(false);
      });
  }, []);
  return { animes, loading };
}
