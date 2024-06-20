import {Link, useSearchParams} from 'react-router-dom';
import {useState} from 'react';

export default function ViewPost() {
  const [searchParams] = useSearchParams();
  const [post, setPost] = useState(JSON.parse(searchParams.get('data')));

  return (
    <div className="max-w-lg mx-auto px-4 py-4 md:hidden">
      {/* Judul postingan */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

      {/* Info penulis dan tanggal unggah */}
      <div className="flex items-center text-gray-600 mb-4">
        <img
          src="/logo.png"
          alt="Penulis"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span>BCare</span>
        <span className="mx-2">•</span>
        <span>24 April 2024</span>
      </div>

      {/* Gambar postingan */}
      <img src={post.thumbnail} alt="Gambar Postingan" className="mb-4" />

      {/* Konten postingan */}
      <div
        className="prose prose-sm md:prose-lg mb-5"
        dangerouslySetInnerHTML={{__html: post.body}}
      />

      <Link to="/" className="btn  btn-warning w-full">
        Kembali ke Home
      </Link>
    </div>
  );
}
