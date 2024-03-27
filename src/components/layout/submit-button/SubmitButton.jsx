import PropTypes from 'prop-types';
import submit from './submit.module.css';

const SubmitButton = ({ value }) => (
  <button
    type="submit"
    className={submit.button}
  >
    {value}
  </button>
);

SubmitButton.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SubmitButton;
