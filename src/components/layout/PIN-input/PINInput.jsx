import { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import textInput from '../text-input/textInput.module.css';
import ValidationError from '../validation-error/ValidationError';

const PINInput = ({
  id,
  inputName,
  label,
  maxLength,
  validation,
}) => {
  const {
    register,
    watch,
    getFieldState,
    trigger,
    formState: { errors },
  } = useFormContext();
  const { ref } = register(inputName);
  const value = watch(inputName);
  const { invalid } = getFieldState(inputName);
  const [wasVisited, setWasVisited] = useState(false);

  const handleKeyDown = (e) => {
    const { key, keyCode, which } = e;
    const KeyCode = keyCode || which;
    const allowedKeys = [8, 9, 12, 13, 16, 17, 18];
    const numericRegex = /^[0-9]$/;

    if (!numericRegex.test(key) && !allowedKeys.includes(KeyCode)) {
      e.preventDefault();
    }
  };

  return (
    <div className={textInput.container}>
      <label htmlFor={id}>
        {`${label}:`}
      </label>
      <input
        {...register(inputName, validation)}
        id={id}
        name={inputName}
        type="password"
        ref={ref}
        onKeyDown={handleKeyDown}
        onKeyUp={() => {
          trigger(inputName);
        }}
        onBlur={() => { setWasVisited(true); }}
        onSubmit={() => { setWasVisited(true); }}
        maxLength={maxLength}
        aria-invalid={wasVisited && invalid}
        autoComplete="off"
      />
      {(wasVisited || value?.length >= 5) && (
        <ValidationError
          errorMessage={errors[inputName]?.message}
          isValid={!invalid}
        />
      )}
    </div>
  );
};

PINInput.propTypes = {
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  validation: PropTypes.object.isRequired,
};

PINInput.defaultProps = {
  maxLength: 30,
};

export default PINInput;
