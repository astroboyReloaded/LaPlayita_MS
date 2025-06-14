import PropTypes from 'prop-types';
import validation from './validation.module.css';

const ValidationError = ({ errorMessage = '', isValid }) => (
  <span className={validation.container}>
    {errorMessage && (
    <p
      className={validation.errorMessage}
    >
      <i aria-hidden="true">
        &lt;-&nbsp;
      </i>
      {errorMessage}
    </p>
    )}
    {isValid && (
      <p
        className={validation.valid}
      >
        ✓
      </p>
    )}
  </span>
);

ValidationError.propTypes = {
  errorMessage: PropTypes.string,
  isValid: PropTypes.bool.isRequired,
};

ValidationError.defaultProps = {
  errorMessage: '',
};

export default ValidationError;
