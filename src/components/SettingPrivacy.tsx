import stylesMD from '../StyleMarkdown';
import Markdown from 'react-native-markdown-display';

const content =`

Saat Anda menggunakan aplikasi kami, Anda mempercayai kami dengan informasi Anda. Karena kami sangat fokus dengan privasi Anda, maka Kebijakan Privasi ini dimaksudkan untuk membantu Anda memahami data apa yang kami kumpulkan dan mengapa kami memerlukannya. Ini penting; Kami harap Anda meluangkan waktu untuk membacanya dengan saksama. Kami akan menjelaskannya dengan sesederhana mungkin.

**Google Firebase Analytics**
Aplikasi Ulil-Albab: Qur'an ini menggunakan Google Firebase Analytics (salah satu produk milik Google) untuk mengumpulkan informasi, seperti: model perangkat, versi sistem operasi dan fitur apa saja yang sering dibuka pada aplikasi ini. Informasi ini kami gunakan agar kami mengetahui pengalaman pengguna di aplikasi ini, supaya aplikasi ini bisa menjadi lebih baik lagi pada update berikutnya. Anda harus tahu, hampir seluruh aplikasi mobile yang ada di Apple Store dan Google Play Store menggunakan Google Firebase Analytics.

**Informasi Keamanan**
Kami telah menerapkan pengamanan administratif dan teknis yang diyakini sangat advance untuk melindungi privasi Anda.

**Mengumpulkan Informasi Akun**
Aplikasi Al-Qur'an Indonesia ini menggunakan Google Firebase Authentication untuk "Sign-In" di aplikasi ini. Jadi secara tidak langsung alamat Email Anda akan tersimpan ke dashboard Firebase. Anda harus tahu, Firebase adalah salah satu produk milik Google, Google tidak akan mengizinkan seluruh developer (termasuk kami) untuk mengetahui kata sandi (password) Anda dengan cara apa pun, jadi tidak perlu khawatir takut akan kehilangan akun Email Anda karena "Sign-In" di aplikasi kami, kami hanya mengumpulkan (Nama, Email, dan UserID) saja untuk mempermudah identifikasi data Terakhir Baca dan Bookmark milik Anda, kami juga tidak akan membagikan alamat Email Anda kepada siapa pun untuk tujuan apa pun.


_Terakhir direvisi pada 21 Maret 2026._

`;

export default function SettingPrivacy() {
    return (
        <Markdown style={stylesMD}>{content}</Markdown>
    )
}
