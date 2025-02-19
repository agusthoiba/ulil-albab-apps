/*interface NameArab {
    String: string;
    Valid: boolean;
}*/

import { SurahResp } from "../models/Quran";

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

    async fetchSurahs (): Promise<SurahResp[]> {
        try {
          const response = await fetch(`${this.baseUrl}/quran/surah`);
          const data = await response.json();
          console.log('data--',  data);
          return data;
        } catch (error) {
          console.error('Error fetching surahs:', error);
          return [];
        }
      };
}

export default Surah;
