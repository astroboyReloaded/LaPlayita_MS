import PropTypes from 'prop-types';
import { adminStaff } from './utils/adminStaffActions';
import CSS from './adminStaffOptions.module.css';

const AdminStaffOptions = ({
  handleOptionChange,
  selectedOption,
}) => (
  <form className={CSS.selectContainer}>
    {adminStaff.map((action) => (
      <label key={action.id} htmlFor={action.id}>
        <input
          type="radio"
          id={action.id}
          name="adminStaff"
          value={action.value}
          onChange={handleOptionChange}
          checked={selectedOption === action.value}
        />
        {action.label}
      </label>
    ))}
  </form>
);

AdminStaffOptions.propTypes = {
  handleOptionChange: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
};

export default AdminStaffOptions;
