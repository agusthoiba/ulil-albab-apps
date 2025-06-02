import stylesMD from '../StyleMarkdown';
import Markdown from 'react-native-markdown-display';

const content =`

Saat Anda menggunakan aplikasi kami, Anda mempercayai kami dengan informasi Anda. Karena kami sangat fokus dengan privasi Anda, maka Kebijakan Privasi ini dimaksudkan untuk membantu Anda memahami data apa yang kami kumpulkan dan mengapa kami memerlukannya. Ini penting; Kami harap Anda meluangkan waktu untuk membacanya dengan saksama. Kami akan menjelaskannya dengan sesederhana mungkin.

**Google Firebase Analytics**
Aplikasi Ulil-Albab: Qur'an ini menggunakan Google Firebase Analytics (salah satu produk milik Google) untuk mengumpulkan informasi, seperti: model perangkat, versi sistem operasi dan fitur apa saja yang sering dibuka pada aplikasi ini. Informasi ini kami gunakan agar kami mengetahui pengalaman pengguna di aplikasi ini, supaya aplikasi ini bisa menjadi lebih baik lagi pada update berikutnya. Anda harus tahu, hampir seluruh aplikasi mobile yang ada di Apple Store dan Google Play Store menggunakan Google Firebase Analytics.

**Informasi Keamanan**
Kami telah menerapkan pengamanan administratif dan teknis yang diyakini sangat advance untuk melindungi privasi Anda.

_Terakhir direvisi pada 2 Juni 2025._

`;

export default function SettingPrivacy() {
    return (
        <Markdown style={stylesMD}>{content}</Markdown>
    )
}
