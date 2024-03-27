import React from 'react';
import TextInput from '../../layout/text-input/TextInput';
import {
  firstName,
  lastName,
  cellphone,
  email,
} from '../utils/validateAddStaff';

const PersonalInfo = () => (
  <fieldset>
    <legend>Info Personal</legend>
    <TextInput {...firstName} />
    <TextInput {...lastName} />
    <TextInput {...cellphone} />
    <TextInput {...email} />
  </fieldset>
);

export default PersonalInfo;
