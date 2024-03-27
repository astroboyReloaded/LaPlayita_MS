import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchStaff } from '../../slices/staffSlice';
import layout from './layout.module.css';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStaff());
  });

  return (
    <div className={layout.container}>
      <Outlet />
    </div>
  );
};

export default Layout;
