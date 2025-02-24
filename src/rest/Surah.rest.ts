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

    async getAllAyah () {
        console.log("Im here surah rest")
        try {
          const response = await fetch(`${this.baseUrl}/quran/ayat`);
          const data = await response.json();
          console.log('data ayat w--',  data);
          return data;
        } catch (error) {
          console.error('Error fetching surahs:', error);
          return [];
        }
    };

    async getAyahBySuraId (surahId: number) {
        console.log("Im here ayah rest by surah id:", surahId);
        try {
          const response = await fetch(`${this.baseUrl}/quran/ayat/${surahId}`);
          const data = await response.json();
          console.log('data ayat w--',  data);
          return data;
        } catch (error) {
          console.error('Error fetching surahs:', error);
          return [];
        }
    };
}

export default Surah;
