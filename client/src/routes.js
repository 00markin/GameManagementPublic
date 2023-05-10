import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import User from './pages/User';
import Game from './pages/Game';
import GameTemplate from './pages/GameTemplate';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import DashboardGeneral from './pages/DashboardGeneral';
import Lottery from './pages/Lottery';
import Partner from './pages/Partner';
import Role from './pages/Role';
import Setting from './pages/Setting';
import Shop from './pages/Shop';
import Statement from './pages/Statement';
import Ticket from './pages/Ticket';
import Wallet from './pages/Wallet';
import Zone from './pages/Zone';

const admin = true;

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'general', element: <DashboardGeneral /> },
      ],
    },
    {
      path: '/management',
      element: <DashboardLayout />,
      children: [
        { path: 'user', element: admin ? <User /> : <Navigate to="/404" /> },
        { path: 'game', element: admin ? <Game /> : <Navigate to="/404" /> },
        { path: 'template', element: admin ? <GameTemplate /> : <Navigate to="/404" /> },
        { path: 'lottery', element: admin ? <Lottery /> : <Navigate to="/404" /> },
        { path: 'partner', element: admin ? <Partner /> : <Navigate to="/404" /> },
        { path: 'role', element: admin ? <Role /> : <Navigate to="/404" /> },
        { path: 'setting', element: admin ? <Setting /> : <Navigate to="/404" /> },
        { path: 'shop', element: admin ? <Shop /> : <Navigate to="/404" /> },
        { path: 'statement', element: admin ? <Statement /> : <Navigate to="/404" /> },
        { path: 'ticket', element: admin ? <Ticket /> : <Navigate to="/404" /> },
        { path: 'wallet', element: admin ? <Wallet /> : <Navigate to="/404" /> },
        { path: 'zone', element: admin ? <Zone /> : <Navigate to="/404" /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/general" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
