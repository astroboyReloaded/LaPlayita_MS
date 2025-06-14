import { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import selectInput from './selectInput.module.css';
import ValidationError from '../validation-error/ValidationError';

const SelectInput = ({
  id,
  inputName,
  label,
  validation,
  selectOptions,
}) => {
  const {
    register,
    trigger,
    getFieldState,
    formState: { errors },
  } = useFormContext({
    defaultValues: {
      [inputName]: 'Selecciona uno',
    },
  });
  const { invalid } = getFieldState(inputName);
  const [wasVisited, setWasVisited] = useState(false);
  const handleBlur = () => {
    trigger(inputName);
    setWasVisited(true);
  };

  return (
    <div className={selectInput.container}>
      <label htmlFor={id}>
        {`${label}:`}
      </label>
      <select
        {...register(inputName, validation)}
        id={id}
        name={inputName}
        onBlur={handleBlur}
        onClick={() => { trigger(inputName); }}
        onSubmit={handleBlur}
        aria-invalid={wasVisited && invalid}
      >
        <option>
          Selecciona uno
        </option>
        {selectOptions.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
      {wasVisited && (
        <ValidationError
          errorMessage={errors[inputName]?.message}
          isValid={!invalid}
        />
      )}
    </div>
  );
};

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validation: PropTypes.shape({
    required: PropTypes.bool,
  }).isRequired,
  selectOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectInput;
