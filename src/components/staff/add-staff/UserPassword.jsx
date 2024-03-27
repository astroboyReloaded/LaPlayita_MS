import TextInput from '../../layout/text-input/TextInput';
import PasswordInput from '../../layout/password-input/PasswordInput';
import { staffName, staffPassword, confirmPassword } from '../utils/validateAddStaff';

const UserPassword = () => (
  <fieldset>
    <legend>Usuario y Contraseña</legend>
    <TextInput {...staffName} />
    <PasswordInput {...staffPassword} />
    <PasswordInput {...confirmPassword} />
  </fieldset>
);

export default UserPassword;
