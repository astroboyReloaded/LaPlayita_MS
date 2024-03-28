import TextInput from '../../layout/text-input/TextInput';
import PINInput from '../../layout/PIN-input/PINInput';
import { staffName, staffPIN, confirmPIN } from '../utils/validateAddStaff';

const UserPIN = () => (
  <fieldset>
    <legend>Usuario y Contraseña</legend>
    <TextInput {...staffName} />
    <PINInput {...staffPIN} />
    <PINInput {...confirmPIN} />
  </fieldset>
);

export default UserPIN;
