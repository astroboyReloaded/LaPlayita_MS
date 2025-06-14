import { useState } from 'react';
import Hamburger from './Hamburger';
import Navigation from './Nav';
import menu from './menu.module.css';

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={menu.units}>
      <Hamburger
        toggle={toggleMenu}
        open={isOpen}
      />
      <Navigation open={isOpen} />
    </div>
  );
};

export default Menu;
