import {useEffect, useRef, useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';

export default function VideoPlayer() {
  const [searchParams] = useSearchParams();
  const [video, setVideo] = useState({});
  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
    playVideoFullScreen();

    return () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    };
  }, []);

  const getVideo = () => {
    const video = JSON.parse(searchParams.get('data'));
    setVideo(video);
  };

  const playVideoFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  return (
    <div className="md:hidden">
      <video
        className="w-full"
        ref={videoRef}
        src={video.source}
        controls
        autoPlay
        disablePictureInPicture
        controlsList="nodownload noremoteplayback noplaybackrate"
        onLoad={(e) => console.log(e.target)}
      />
      <div className="container mx-auto w-full px-3">
        <Link to="/" className="btn btn-warning mt-3  w-full">
          Kembali ke Home
        </Link>
      </div>
      {/* <div className="flex items-center justify-between mt-5 mb-3 mx-4">
        <h2 className="text-lg font-bold">Deskripsi</h2>
        <Link to="/">
          <RiArrowGoBackFill size={21} />
        </Link>
      </div>
      <hr />
      <div className="mx-4 my-3">
        <h3 className="uppercase font-semibold">{video.title}</h3>
        <div className="flex justify-evenly my-4">
          <div className="text-center">
            <p className="font-bold text-xl">3.8k</p>
            <p className="text-sm">Like</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-xl">{video.views}</p>
            <p className="text-sm">Views</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-xl">25 Apr</p>
            <p className="text-sm">2024</p>
          </div>
        </div>
        <p className="text-sm p-3 bg-slate-100 rounded-xl">
          {video.description}
        </p>
      </div> */}
    </div>
  );
}
