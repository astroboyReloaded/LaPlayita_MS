import { FormProvider } from 'react-hook-form';
import TextInput from '../../layout/text-input/TextInput';

const PersonalInfo = (firstName,
  lastName,
  cellphone,
  email,) => (
  <fieldset>
    <FormProvider>
      <legend>Info Personal</legend>
      <TextInput {...firstName} />
      <TextInput {...lastName} />
      <TextInput {...cellphone} />
      <TextInput {...email} />
    </FormProvider>
  </fieldset>
);

export default PersonalInfo;
