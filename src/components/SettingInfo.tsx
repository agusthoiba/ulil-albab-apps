import stylesMD from '../StyleMarkdown';
import Markdown from 'react-native-markdown-display';

const content =`

**Assalamu'alaikum Warahmatullahi Wabarakatuhu.**

Sebelum menggunakan aplikasi ini lebih dalam kami menghimbau baca halaman ini sampai selesai.Default Rasm Al-Qur'an pada aplikasi ini menggunakan Rasm IndoPak, yaitu Rasm Al-Qur'an yang sangat familiar oleh orang Indonesia, karena penulisannya menyerupai Mushaf Al-Qur'an yang ada di rumah kita. Selain Rasm IndoPak, ada beberapa mushaf Al-Quran yang lain diantaranya Rasm Utsmani, Rasm Utsmani adalah Rasm yang biasa digunakan pada Al-Qur'an di Madinah.Yang membedakan Rasm IndoPak dengan Utsmani adalah hanya penulisannya saja, bunyinya tetap sama. Salah satu contoh perbedaannya adalah pada hukum bacaan tajwid Idgham Bighunnah, di Rasm Utsmani tidak ada tanda tasydidnya (tanda tasydid itu yang seperti huruf w di atas huruf Arabic yang berhukum tajwid Idgham Bighunnah), misalnya huruf Nun mati bertemu huruf Ya, maka tanda tasyididnya tidak ada (pada Rasm Utsmani tulisannya terlihat Faman ya'mal, padahal dibacanya adalah Famayya'mal) 

## Tips & FAQ
- Awalan Juz 4 Koq Dari Surah Ali-'Imran Ayat 92 Bukannya Dari Ali-'Imran Ayat 93? Jawab: Untuk awalan Juz memang berbeda-beda, kami mengambil patokan dari Qur'an mushaf yang ada di sekitar kami, berikut perbedaan awalan Juz pada beberapa mushaf:
    - Juz 4 (Ada yang berawal dari Ali-'Imran:92 dan ada juga yang berawal dari Ali-'Imran:93).
    - Juz 7 (Ada yang berawal dari Al-Ma'idah:82 dan ada juga yang berawal dari Al-Ma'idah:83).
    - Juz 11 (Ada yang berawal dari At-Taubah:93 dan ada juga yang berawal dari At-Taubah:94).
    - Juz 14 (Ada yang berawal dari Al-Hijr:1 dan ada juga yang berawal dari Al-Hijr:2).
    - Juz 20 (Ada yang berawal dari An-Naml:56 dan ada juga yang berawal dari An-Naml:60).
    - Juz 21 (Ada yang berawal dari Al-'Ankabut:45 dan ada juga yang berawal dari Al-'Ankabut:46).
    - Juz 23 (Ada yang berawal dari Ya sin:22 dan ada juga yang berawal dari Ya sin:28).

- **Nama Surah ke 76 Koq Al-Insan Bukannya Ad-Dahr?** Jawab: Untuk nama surah ke 76 pada Al-Qur'an memang mempunyai dua nama, yaitu Al-Insan atau Ad-Dahr, Anda bisa mengeceknya dengan membandingkan berbagai macam mushaf Al-Qur'an yang Anda temui di sekitar Anda (bisa dengan cara ke Masjid-masjid sekitar atau pinjam Al-Qur'an ke sepuluh tetangga terdekat), dan bandingkan salah satunya pasti ada yang ditulis Al-Insan dan ada juga yang ditulis Ad-Dahr. Perbedaan nama surah yang lain:
    - Surah ke 40 (Ada yang ditulis Ghafir dan ada yang ditulis Al-Mu'min).
    - Surah ke 111 (Ada yang ditulis Al-Lahab ada yang ditulis Al-Masad).

- Untuk mengetahui sejarahnya Anda bisa cek di Internet.
- **Surah At-Taubah Kenapa tidak ada Bismillah-nya?** Jawab: Karena memang surah At-Taubah tidak ada Bismillah-nya (bisa dicek di mushaf Al-Qur'an yang ada di rumah Anda).
- **Beberapa Terjemahan Sulit Dimengerti?** Jawab: Untuk default terjemahan aplikasi Al-Qur'an ini adalah menggunakan terjemahan versi Kemenag-RI, karena terjemahan versi Kemenag-RI itu adalah HARFIYAH (maksud harfiyah itu kata/kalimat Bahasa Arab langsung diartikan dan menggunakan Bahasa Indonesia yang baku), tidak demikian dengan terjemahan versi TAFSIRIYAH (kalau tafsiriyah itu kata/kalimat Bahasa Arab diterjemahkan plus makna dan maksudnya, agar orang yang bukan berbahasa Arab dapat mengerti apa makna dan maksud kata/kalimat tersebut), terjemahan versi TAFSIRIYAH yang terkenal antara lain adalah (Al-Jalalain, Ibnu Katsir, Atthobari, Al-Maraghi, Al-Kasyaf, Mujahid bin Jabr dan tafsir lainnya), namun yang sudah diterjemahkan ke dalam Bahasa Indonesia dan umum digunakan di Indonesia adalah Al-Jalalain dan Ibnu Katsir. Jadi untuk beberapa ayat pada terjemahan versi Kemenag-RI yang sulit dimengerti maknanya, Anda harus sedikit berfikir lagi untuk memaknainya yang harus serta merta dengan bimbingan ulama sekitar Anda.

## Sumber Data Aplikasi ini
Aplikasi Al-Qur'an ini dibuat dari data berupa file teks yang digabungkan dan diproses menjadi sebuah aplikasi Al-Qur'an digital yang dapat berjalan di platform Android. Data pada aplikasi ini diperoleh dari sumber yang terpercaya, yang mana berasal dari para ulama-ulama dan syaikh-syaikh Internasional dan dikembangkan oleh para developer konten Al-Qur'an seluruh dunia. Misi mereka adalah dakwah untuk menyebarkan pesan Islam dan Al-Qur'an ke seluruh pelosok bumi. Sumber data file-file teks untuk Al-Qur'an dan terjemahannya: Dari Tanzil International Qur'anic Project http://tanzil.net. 
Dikarenakan ini adalah aplikasi digital, maka janganlah aplikasi ini dijadikan 100% sebagai referensi Anda, aplikasi ini hanyalah alat untuk membantu Anda membaca dan menghafal ayat-ayat Al-Qur'an serta memahami isinya dengan bahasa Indonesia ketika tidak membawa mushaf cetakan. Kami tetap menyarankan Anda untuk menggunakan Al-Qur'an versi mushaf cetakan, karena yang namanya data teks yang dihasilkan oleh ketikan pasti tidak 100% akurat, akan ada beberapa kesalahan ketik (_typo_), jadi jika Anda menemukan kesalahan seperti "kebaikn" yang seharusnya "kebaikan", dll. Kami harapkan bantuan Anda untuk menjadikan aplikasi ini lebih baik lagi untuk melaporkannya ke alamat email kami di kontak bawah ini (harap isi subjeknya "Revisi Aplikasi Ulil Albab" dan isi deskripsinya dengan detil dan jelas, seperti nama surah, nomor ayat, apa yang salah dan apa yang harusnya benar, dll. Kalau perlu pakai screenshotnya). Nanti kami akan perbaiki laporan-laporan tentang kesalahan pada aplikasi ini yang masuk ke email kami. Kami akan berusaha semaksimal mungkin menjadikan aplikasi ini lebih baik lagi dengan mengupdate ke versi-versi berikutnya dan menambahkan fitur-fitur yang perlu diadakan atau improvisasi fitur yang sudah ada.

Kontak Kami
- Email: admin@ulil-albab.com
- Website: https://ulil-albab.com

Terima kasih.

**Wasalamu’alaikum Warahmatullahi Wabarakatuhu.**

`;

export default function InfoContent() {
    return (
        <Markdown style={stylesMD}>{content}</Markdown>
    )
}
