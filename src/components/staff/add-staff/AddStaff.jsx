import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addStaff } from '../../../slices/staffSlice';
import aScss from './addStaff.module.css';
import SelectInput from '../../layout/slect-input/SelectInput';
import { role } from '../utils/validateAddStaff';
import PersonalInfo from './PersonalInfo';
import UserPIN from './UserPIN';
import SubmitButton from '../../layout/submit-button/SubmitButton';
import Authorization from '../../layout/authorization/Authorization';
import { hashPIN } from '../utils/auth';

const AddStaff = () => {
  const methods = useForm({
    defaultValues: {
      role: 'Selecciona uno',
      first: '',
      last: '',
      phone: '',
      email: '',
      staffName: '',
      PIN: '',
      confirmPIN: '',
    },
  });
  const [state, setState] = useState({
    newMember: {},
    reqAuthorization: false,
    authorizationApproved: false,
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const hashedPIN = hashPIN(data.PIN);
    setState({
      ...state,
      newMember: {
        ...data,
        PIN: hashedPIN,
      },
      reqAuthorization: true,
    });
  };

  useEffect(() => {
    if (state.authorizationApproved) dispatch(addStaff(state.newMember));
  }, [state.authorizationApproved]);

  return (
    <section className={aScss.container}>
      <h2>Agregar Staff</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <SelectInput {...role} />
          <PersonalInfo />
          <UserPIN />
          <Authorization
            reqAuthorization={state.reqAuthorization}
            setState={setState}
          />
          <SubmitButton value="Agregar Staff" />
        </form>
      </FormProvider>
    </section>
  );
};

export default AddStaff;
