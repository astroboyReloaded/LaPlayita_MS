import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import PINInput from '../PIN-input/PINInput';
import { useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import staffAuthorization from '../../staff/utils/staffAuthorization';

const Authorization = ({ reqAuthorization }) => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const { staff } = useSelector(state => state.staff);
  console.log(staff);
  const dialogRef = useRef(null);
  useEffect(() => {
    if (reqAuthorization) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [reqAuthorization]);

  return (<dialog ref={dialogRef}>
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        AUTH
        <PINInput {...staffAuthorization} />
      </form>
    </FormProvider>
  </dialog>);
};

Authorization.propTypes = {
  reqAuthorization: PropTypes.bool.isRequired,
  // setState: PropTypes.func.isRequired,
};

export default Authorization;
