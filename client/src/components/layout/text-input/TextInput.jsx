import { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import textInput from './textInput.module.css';
import ValidationError from '../validation-error/ValidationError';

const TextInput = ({
  id,
  inputName,
  label,
  type,
  maxLength,
  validate,
}) => {
  const {
    register,
    trigger,
    getFieldState,
    setError,
    formState: { errors },
  } = useFormContext();
  const { ref } = inputName;
  const { invalid, error } = getFieldState(inputName);
  const [wasVisited, setWasVisited] = useState(false)

  return (
    <div className={textInput.container}>
      <label htmlFor={id}>
        {`${label}:`}
      </label>
      <input
        {...register(inputName, validate)}
        id={id}
        name={inputName}
        type={type}
        ref={ref}
        onBlur={() => { setWasVisited(true), (invalid && setError(inputName, {
          message: error.message
        })) }}
        onSubmit={() => { setWasVisited(true); }}
        onKeyUp={async () => {
          await trigger(inputName);
        }}
        maxLength={maxLength}
        aria-invalid={wasVisited && invalid}
        autoComplete="off"
      />
      {wasVisited && (
        <ValidationError
          errorMessage={errors[inputName]?.message}
          isValid={!invalid}
        />
      )}
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  validate: PropTypes.object.isRequired,
};

TextInput.defaultProps = {
  maxLength: 30,
};

export default TextInput;
