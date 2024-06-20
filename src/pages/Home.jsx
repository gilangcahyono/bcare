import {useState} from 'react';
import Carousel from '../components/Carousel';
import Layout from '../components/Layout';

export default function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Contoh kekerasan seksual pada remaja',
      body: '<p>Orang yang seharusnya memberikan perlindungan, justru melakukan kejahatan’ – Bagaimana kasus pencabulan anak SMP di Surabaya oleh ayah, kakak dan dua pamannya bisa terjadi</p><br><p>Polrestabes Surabaya di Jawa Timur menetapkan empat anggota keluarga sebagai tersangka atas kasus pelecehan seksual terhadap korban berusia 13 tahun. Kasat Reskrim Polrestabes Surabaya AKBP Hendro Sukmono menyatakan bahwa korban telah mengalami pelecehan seksual sejak tahun 2020 oleh ayah kandung, kakak kandung, dan dua paman.</p><br><p>Kejadian pelecehan seksual dilakukan sejak korban masih kelas 3 SD dan baru terungkap setelah pihak eksternal keluarga melapor pada 5 Januari 2024. Kasus kemudian ditingkatkan menjadi pemerkosaan setelah pemeriksaan menunjukkan luka pada kemaluan korban, dan polisi menangkap empat tersangka lima hari setelah laporan.</p><br><p>Komisi Perlindungan Anak Indonesia (KPAI) menyatakan perlunya memprioritaskan perlindungan korban dalam menangani kasus ini. Selain itu, Ketua KPAI, Ai Maryati Solihah, menekankan bahwa pelanggaran hak anak oleh anggota keluarga, termasuk kekerasan seksual, merupakan alarm yang serius.</p><br><p>Saat ini, korban menerima pendampingan dari Dinas Sosial untuk pemulihan psikis dan keamanan.</p>',
      thumbnail: '/files/article1.jpeg',
    },
    {
      id: 2,
      title: 'Pengertian tentang remaja',
      body: '<p>Perkembangan manusia sejak lahir sampai meninggal dapat dikelompokkan menjadi beberapa kategori. Manusia dapat dikategorikan berdasarkan usia, yakni bayi, anak-anak, remaja, dan dewasa. </p><br><p>Masa perkembangan manusia yang paling menonjol dan cukup krusial adalah masa remaja. Di masa remaja, manusia beralih dari masa anak-anak menuju dewasa.Oleh sebab itu, remaja membutuhkan pendampingan dalam masa pertumbuhannya. </p><br><p>Berikut akan dibahas mengenai pengertian remaja sampai karakteristik yang dimiliki remaja.Masa Remaja sebagai Periode yang Penting Ketika anak-anak mulai memasuki masa remaja maka akan disertai dengan perkembangan yang cepat. </p><br><p>Masa Remaja sebagai Masa Perubahan Ada beberapa jenis perubahan yang terjadi pada remaja. Karena, biasanya, perubahan emosi terjadi lebih cepat selama awal masa remaja. Ketiga, perubahan nilai-nilai yang dipengaruhi oleh perubahan minat dan pola perilaku remaja. </p><br><p>Masa Remaja sebagai Usia Mencari Identitas Remaja dalam tahap ini mulai mencari jati diri atau esensi dia hidup. Masa Remaja sebagai Masa yang Tidak Realistis Remaja akan mudah kecewa dan sakit hati jika rencana atau tujuannya tidak tercapai. </p><br><p>Misalnya mimpi-mimpi atau cita-cita yang tidak sesuai dengan kemampuan diri ataupun ekonomi. Hal ini menimbulkan tingginya emosi yang menjadi salah satu ciri dari fase awal masa remaja.</p>',
      thumbnail: '/files/article2.jpeg',
    },
  ]);
  const [videos, setVideos] = useState([
    {
      id: 1,
      source: '/files/video1.mp4',
      thumbnail: '/files/thumbnailvideo1.jpeg',
    },
    {
      id: 2,
      source: '/files/video2.mp4',
      thumbnail: '/files/thumbnailvideo2.jpeg',
    },
  ]);

  return (
    <Layout>
      <Carousel source="posts" datas={posts} />
      <Carousel source="videos" datas={videos} />
    </Layout>
  );
}
