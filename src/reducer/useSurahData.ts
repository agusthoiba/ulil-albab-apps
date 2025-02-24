import { useState, useEffect } from 'react';
import Surah  from '../rest/Surah.rest';
import { SurahResp } from '../models/Quran';

export const useSurahData = () => {
  const surahObj = new Surah(process.env.EXPO_PUBLIC_API_URL)

  const [surahs, setSurahs] = useState<SurahResp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSurahs = async () => {
      try {
        const data = await surahObj.fetchSurahs();
        setSurahs(data);
      } catch (err) {
        setError('Failed to load surahs');
      } finally {
        setLoading(false);
      }
    };

    loadSurahs();
  }, []);

  return { surahs, loading, error };
};
