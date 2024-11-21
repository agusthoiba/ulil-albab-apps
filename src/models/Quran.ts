export type Surah = {
    Surah: string;
    Ayat: string;
    Terjemahan: string;
    Jumlah_Ayat: string;
    Ayat_Arab: string;
}

export type Ayat = {
    Surah: string;
    Ayat: number;
    Arab: string;
    Terjemahan: string;
}

export type Juz = {
    id: number;
    start: string;
}

export type Company = {
    ID: number;
    NAME: string;
}
