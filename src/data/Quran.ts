type Surah = {
    id: string;
    no: number;
    name: string;
    nameIndo: string;
    turun: string;
    ayatCount: number;
}

type Juz = {
    id: number;
    start: string;
}

const DATA_SURAH: Surah[] = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            no: 1,
            name: 'Al-Fatihah',
            nameIndo: 'Pembuka',
            turun: 'Mekah',
            ayatCount: 7
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            no: 2,
            name: 'Al-Baqarah',
            nameIndo: 'Sapi Betina',
            turun: 'Madinah',
            ayatCount: 286
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            no: 3,
            name: "Ali 'Imran",
            nameIndo: "Keluaga 'Imran",
            turun: 'Madinah',
            ayatCount: 200
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            no: 4,
            name: "An-Nisa'",
            nameIndo: "Wanita",
            turun: 'Madinah',
            ayatCount: 176
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d74',
            no: 5,
            name: "Al-Maidah",
            nameIndo: "Jamuan",
            turun: 'Madinah',
            ayatCount: 120
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d75',
            no: 6,
            name: "Al-An'am",
            nameIndo: "Hewan Ternak",
            turun: 'Mekah',
            ayatCount: 105
        }
]

const DATA_JUZ: Juz[] = [
    {
        id: 1,
        start: 'Al-Fatihah Ayat 1',
    },
    {
        id: 2,
        start: 'Al-Baqarah Ayat 142'
    },
    {
        id: 3,
        start: 'Al-Baqarah Ayat 253'
    },
    {
        id: 4,
        start: "Ali 'Imran Ayat 92"
    },
    {
        id: 5,
        start: "An-Nisa' Ayat 24"
    },
    {
        id: 6,
        start: "An-Nisa' Ayat 148"
    },
    {
        id: 7,
        start: "Al-Ma'idah Ayat 83"
    },
    {
        id: 8,
        start: "Al-An'am Ayat 111"
    },
    {
        id: 9,
        start: "Al-A'raf Ayat 88"
    },
    {
        id: 10,
        start: "Al-Anfal Ayat 41"
    },
    {
        id: 11,
        start: "At-Taubah Ayat 94"
    },
    {
        id: 12,
        start: "Hud Ayat 6"
    },
    {
        id: 13,
        start: "Yusuf Ayat 53"
    },
    {
        id: 14,
        start: "Al-Hijr Ayat 2"
    },
    {
        id: 15,
        start: "Al-Isra' Ayat 1"
    },
    {
        id: 16,
        start: "Al-Kahf Ayat 75"
    },
    {
        id: 17,
        start: "Al-Anbiya Ayat 1"
    },
    {
        id: 18,
        start: "Al-Mu'minun Ayat 1"
    },
    {
        id: 19,
        start: "Al-Furqan Ayat 21"
    },
    {
        id: 20,
        start: "An-Naml Ayat 60"
    },
    {
        id: 21,
        start: "Al-'Ankabut Ayat 45"
    },
    {
        id: 22,
        start: "Al-Ahzab Ayat 31"
    },
    {
        id: 23,
        start: "Ya-Sin Ayat 22"
    },
    {
        id: 24,
        start: "Az-Zumar Ayat 32"
    },
    {
        id: 25,
        start: "Fussilat Ayat 47"
    },
    {
        id: 26,
        start: "Al-Jasiyah Ayat 33"
    },
    {
        id: 27,
        start: "Adz-Dzariyat Ayat 31"
    },
    {
        id: 28,
        start: "Al-Mujadalah Ayat 1"
    },
    {
        id: 29,
        start: "Al-Mulk Ayat 1"
    },
    {
        id: 30,
        start: "An-Naba' Ayat 1"
    }
]

export {
    DATA_SURAH, DATA_JUZ
}
