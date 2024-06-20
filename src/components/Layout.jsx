import BottomNav from './BottomNav';
import Navbar from './Navbar';
import Sirine from './Sirine';

export default function Layout({children, noSirine}) {
  return (
    <div className="md:hidden">
      <Navbar />
      <div className="pt-16 px-5">{children}</div>
      <BottomNav />
      {noSirine ? null : <Sirine />}
    </div>
  );
}
