import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AddStaff from './add-staff/AddStaff';
import staffCSS from './staff.module.css';
import EditStaff from './edit-staff/EditStaff';
import RemoveStaff from './remove-staff/RemoveStaff';
import AdminStaffOptions from './AdminStaffOptions';

const Staff = () => {
  const [selectedOption, setSelectedOption] = useState('add');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <main className={staffCSS.main}>
      <header>
        <h1>Administrar Staff</h1>
        <NavLink to="/">X</NavLink>
      </header>
      <div className={staffCSS.container}>
        <AdminStaffOptions
          handleOptionChange={handleOptionChange}
          selectedOption={selectedOption}
        />
        <div className={staffCSS.actionContainer}>
          {selectedOption === 'add' && <AddStaff />}
          {selectedOption === 'edit' && <EditStaff />}
          {selectedOption === 'remove' && <RemoveStaff />}
        </div>
      </div>
    </main>
  );
};

export default Staff;
