import { Outlet } from 'react-router-dom';

import { Sidebar } from 'layouts/sidebar';
import { Navbar } from 'layouts/navbar';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Dashboard;
