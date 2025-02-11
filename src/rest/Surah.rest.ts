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
}

export default Surah;
