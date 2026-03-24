import { LastRead, SurahResp } from "../models/Quran";

class Surah {
  private readonly baseUrl: string;

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get() {
    try {
      const response = await fetch(`${this.baseUrl}/quran/surah`)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      return response.json()
    } catch (error) {
      throw new Error(`error: ${error}`);
    }
  }

  async fetchSurahs(): Promise<SurahResp[]> {
    try {
      const response = await fetch(`${this.baseUrl}/quran/surah`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching surahs:', error);
      return [];
    }
  };

  async getAllAyah() {
    try {
      const response = await fetch(`${this.baseUrl}/quran/ayat`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching ayahs:', error);
      return [];
    }
  };

  async getAyahBySuraId(surahId: number) {
    try {
      const response = await fetch(`${this.baseUrl}/quran/ayat/${surahId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching surahs:', error);
      return [];
    }
  };

  async getLastRead(token: string): Promise<LastRead | undefined> {
    try {
      const response = await fetch(`${this.baseUrl}/quran/last-read`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        console.error(response.body);
        throw new Error(`Response status: ${response.status}`);
      }

      const data: LastRead = await response.json()
      return data;
    } catch (error) {
      console.error('Error fetching last-read:', error);
    }
  };

  async putLastRead(token: string, surahId: number, verseId: number, ayahId: number) {
    try {
      const response = await fetch(`${this.baseUrl}/quran/last-read`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          suraId: surahId,
          verseId: verseId,
          ayahId: ayahId,
         }),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();

      return data;
    } catch (error) {
      console.error('Error updating last-read:', error);
    }
  };
}

export default Surah;
