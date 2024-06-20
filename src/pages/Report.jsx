import {useState} from 'react';
import Layout from '../components/Layout';

export default function Report() {
  const [image, setImage] = useState(null);

  const inputImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    e.target.parentNode.classList.add('hidden');
  };

  return (
    <Layout noSirine>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="image" className="text-center block">
          <input
            className="hidden"
            type="file"
            name="image"
            id="image"
            capture="environment"
            accept="image/*"
            onChange={inputImage}
          />
          <span className="btn ring-1 p-1 mb-3 btn-ghost btn-circle">
            <img src="/files/camera-icon.jpg" />
          </span>
        </label>
        <img src={image} className="mb-5" />
        <textarea
          className="border w-full p-2 mb-3"
          name="description"
          rows={4}
          placeholder="Tulis keterangan laporan."
        ></textarea>
        <button type="submit" className="btn btn-outline mb-20 w-full btn-info">
          Kirim
        </button>
      </form>
    </Layout>
  );
}
