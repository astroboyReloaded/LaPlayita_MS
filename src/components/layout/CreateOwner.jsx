import { useDispatch } from 'react-redux';
import { addStaff } from '../../slices/staffSlice';
import { FormProvider, useForm } from 'react-hook-form';
import PersonalInfo from '../staff/add-staff/PersonalInfo';
import UserPIN from '../staff/add-staff/UserPIN';
import SubmitButton from './submit-button/SubmitButton';
import { hashPIN } from '../staff/utils/auth';
import cOCss from '../layout/layout.module.css';

const CreateOwner = () => {
  const methods = useForm({
    defaultValues: {
      first: '',
      last: '',
      phone: '',
      email: '',
      staffName: '',
      PIN: '',
      confirmPIN: '',
    },
  });
  const dispatch = useDispatch();

  const handleCreateOwner = (data) => {
    dispatch(addStaff({
      ...data,
      role: 'owner',
      PIN: hashPIN(data.PIN),
    }));
  };

  return (
    <div className={cOCss.container}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleCreateOwner)}>
          <h2>Crear Dueño</h2>
          <PersonalInfo />
          <UserPIN />
          <SubmitButton value="Crear Dueño" />
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateOwner;
