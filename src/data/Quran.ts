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
        start: 'Al-Fatihah Ayat 1'
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
    }
]

export {
    DATA_SURAH, DATA_JUZ
}
