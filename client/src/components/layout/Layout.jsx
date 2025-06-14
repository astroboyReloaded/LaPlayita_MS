import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchStaff } from '../staff/staffSlice';
import layout from './layout.module.css';
import CreateOwner from './CreateOwner';
import { Loading } from './loading/Loading';

const Layout = () => {
  const staff = useSelector((state) => state.staff);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStaff());
  }, []);

  
    return (
      <div className={layout.container}>
        {staff.loading && <Loading />}
        {staff.error && (<h1>Error: {staff.error}</h1>)}
        {/* {staff.staff.length === 0 && !staff.loading && !staff.error && (
          <CreateOwner />
        )} */}
        {/* {staff.staff.length > 0 && (
          <Outlet />
        )} */}
        {!staff.loading && !staff.error && <Outlet />}
      </div>
    );
};

export default Layout;
