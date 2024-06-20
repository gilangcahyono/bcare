import {Link} from 'react-router-dom';
import {TbReport} from 'react-icons/tb';

export default function BottomNav() {
  return (
    <div className="btm-nav w-full border">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </Link>
      <Link
        to="/report"
        className={location.pathname === '/report' ? 'active' : ''}
      >
        <TbReport size={20} />
      </Link>
      <Link
        to="/support-psikologi"
        className={location.pathname === '/support-psikologi' ? 'active' : ''}
      >
        <img src="/files/counseling-icon.svg" className="h-6 w-6" alt="" />
      </Link>
      <Link
        to="/support-community"
        className={location.pathname === '/support-community' ? 'active' : ''}
      >
        <img src="/files/support-community.jpg" className="h-6 w-6" alt="" />
      </Link>
    </div>
  );
}
