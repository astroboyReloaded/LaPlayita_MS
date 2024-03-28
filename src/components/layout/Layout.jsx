import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchStaff } from '../../slices/staffSlice';
import layout from './layout.module.css';
import CreateOwner from './CreateOwner';

const Layout = () => {
  const staff = useSelector((state) => state.staff);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStaff());
  }, [staff]);


  if (staff.loading) {
    return (
      <div className={layout.container}>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (staff.error) {
    return (
      <div className={layout.container}>
        <h1>Error: {staff.error}</h1>
      </div>
    );
  }
  if (staff.staff.length === 0) {
    return (
      <div className={layout.container}>
        <CreateOwner />
      </div>
    );
  }
  return (
    <div className={layout.container}>
      <Outlet />
    </div>
  );
};

export default Layout;
