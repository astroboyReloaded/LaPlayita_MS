import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmPassword, setActiveUser } from '../slices/activeUserSlice';

const useMngrPsswrd = () => {
  const { owners } = useSelector((state) => state.owners);
  const { managers } = useSelector((state) => state.managers);
  const [validManagerPassword, setValidManagerPassword] = useState(false);
  const [invalidManagerPasswordMsg, setInvalidManagerPasswordMsg] = useState('');

  const dispatch = useDispatch();

  const handleManagerPassword = (managerPassword) => {
    if (managerPassword.length === 5) {
      const manager = managers.find((manager) => manager.password === managerPassword);
      const owner = owners.find((owner) => owner.password === managerPassword);

      if (manager) {
        dispatch(setActiveUser(manager));
        dispatch(confirmPassword());
        setValidManagerPassword(true);
        setInvalidManagerPasswordMsg('');
      } else if (owner) {
        dispatch(setActiveUser(owner));
        dispatch(confirmPassword());
        setValidManagerPassword(true);
        setInvalidManagerPasswordMsg('');
      } else {
        setValidManagerPassword(false);
        setInvalidManagerPasswordMsg('Contraseña inválida');
      }
      return;
    }
    setValidManagerPassword(false);
    setInvalidManagerPasswordMsg('');
  };

  return { handleManagerPassword, validManagerPassword, invalidManagerPasswordMsg };
};

export default useMngrPsswrd;
