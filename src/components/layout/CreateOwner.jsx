import { useDispatch } from 'react-redux';
import { addStaff } from '../../slices/staffSlice';
import { FormProvider, useForm } from 'react-hook-form';
import PersonalInfo from '../staff/add-staff/PersonalInfo';
import UserPIN from '../staff/add-staff/UserPIN';
import SubmitButton from './submit-button/SubmitButton';

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
      role: 'owner',
      ...data,
    }));
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleCreateOwner)}>
          <h1>Crear Dueño</h1>
          <PersonalInfo />
          <UserPIN />
          <SubmitButton value="Crear Dueño" />
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateOwner;
