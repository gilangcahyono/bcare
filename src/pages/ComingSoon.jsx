import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';

export default function ComingSoon() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, [useParams()]);

  return (
    <Layout>
      <div
        className="mt-[4.3rem] opacity-75 bg-center bg-contain bg-no-repeat h-[75vh] w-full grid place-items-center"
        style={{backgroundImage: 'url("/logo.png")'}}
      >
        <marquee
          className="text-3xl font-bold"
          behavior="scroll"
          direction=" left"
        >
          Coming Soon
        </marquee>
        <dialog className={open ? 'modal modal-open' : 'modal'}>
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Coming Soon!!</h3>
            <div className="modal-action border">
              <button className="btn w-full" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </Layout>
  );
}
