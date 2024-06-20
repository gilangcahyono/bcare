import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';
import Report from './pages/Report';
import VideoPlayer from './pages/VideoPlayer';
import ViewPost from './pages/ViewPost';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/posts',
    element: <ViewPost />,
  },
  {
    path: '/videos',
    element: <VideoPlayer />,
  },
  {
    path: '/report',
    element: <Report />,
  },
  {
    path: '/support-psikologi',
    element: <ComingSoon />,
  },
  {
    path: '/support-community',
    element: <ComingSoon />,
  },
];
