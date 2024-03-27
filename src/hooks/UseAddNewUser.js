import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewManager } from '../slices/managersSlice';
import { addNewServer } from '../slices/serversSlice';
import { addNewCook } from '../slices/cooksSlice';

const useAddNewUser = () => {
  const { activeUser } = useSelector((state) => state.activeUser);
  const { servers } = useSelector((state) => state.servers);
  const [newUser, setNewUser] = useState({});
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [invalidPasswordMsg, setInvalidPasswordMsg] = useState('');
  const [passwordNoMatchMsg, setPasswordNoMatchMsg] = useState('');
  const [formCompletedCorrectly, setFormCompletedCorrectly] = useState(false);
  const [userCreatedSuccessfully, setUserCreatedSuccessfully] = useState(false);
  const [createUserError, setCreateUserError] = useState(false);

  const dispatch = useDispatch();

  const handleUserName = (newUserName) => {
    if (servers.map((server) => server.name).includes(newUserName)) {
      setNameErrorMessage('Nombre de usuario ya existe');
      return;
    }
    setNewUser({
      ...newUser,
      name: newUserName,
    });
    setNameErrorMessage('');
  };

  const handleRoll = (newUserRoll) => {
    setNewUser({
      ...newUser,
      roll: newUserRoll,
    });
  };

  const handlePassword = (newUserPassword) => {
    const newPasswordRegex = newUser.roll === 'Gerente' ? /^\d{5}$/ : /^\d{4}$/;
    if (!newUserPassword.match(newPasswordRegex)) {
      setInvalidPasswordMsg('Contraseña debe ser número de 4 dígitos');
      return;
    }
    setNewUser({
      ...newUser,
      password: newUserPassword,
    });
    setInvalidPasswordMsg('');
  };

  const handleConfirmPassword = (confirmNewUserPassword) => {
    if (newUser.password !== confirmNewUserPassword) {
      setPasswordNoMatchMsg('Las contraseñas no coinciden');
      return;
    }
    if (newUser.name && newUser.roll && newUser.password === confirmNewUserPassword) {
      setPasswordNoMatchMsg('');
      setFormCompletedCorrectly(true);
    }
  };

  const handleCreateUser = (userCreator) => {
    const newUserData = {
      id: Date.now(),
      ...newUser,
      createdBy: userCreator.id,
    };

    const userType = newUser.roll;
    switch (userType) {
      case 'Gerente':
        dispatch(addNewManager(newUserData));
        setUserCreatedSuccessfully(true);
        break;
      case 'Mesero':
        dispatch(addNewServer(newUserData));
        setUserCreatedSuccessfully(true);
        break;
      case 'Cocina':
        dispatch(addNewCook(newUserData));
        setUserCreatedSuccessfully(true);
        break;
      default:
        setCreateUserError(true);
        break;
    }
  };

  return {
    activeUser,
    newUser,
    nameErrorMessage,
    invalidPasswordMsg,
    passwordNoMatchMsg,
    formCompletedCorrectly,
    userCreatedSuccessfully,
    handleUserName,
    handleRoll,
    handlePassword,
    handleConfirmPassword,
    handleCreateUser,
    setFormCompletedCorrectly,
    setUserCreatedSuccessfully,
    createUserError,
  };
};

export default useAddNewUser;
