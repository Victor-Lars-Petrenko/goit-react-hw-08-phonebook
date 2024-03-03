import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
