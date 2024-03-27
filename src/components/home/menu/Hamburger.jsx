import PropTypes from 'prop-types';
import hamburger from './hamburger.module.css';

const Hamburger = ({ open, toggle }) => (
  <button
    className={hamburger.container}
    onClick={toggle}
    aria-expanded={open}
    type="button"
  >
    <span className={hamburger.bar} />
  </button>
);

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Hamburger;
