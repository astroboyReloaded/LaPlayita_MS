import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOwner } from '../slices/ownersSlice';

const CreateOwner = () => {
  const { owners } = useSelector((state) => state.owners);
  const [ownerName, setOwnerName] = useState('');
  const [ownerNameErrorMsg, setOwnerNameErrorMsg] = useState('');
  const [ownerPassword, setOwnerPassword] = useState('');
  const [ownerPasswordErrorMsg, setOwnerPasswordErrorMsg] = useState('');
  const [ownerConfirmPasswordErrorMsg, setOwnerConfirmPasswordErrorMsg] = useState('');
  const [formCompletedCorrectly, setFormCompletedCorrectly] = useState(false);
  const [ownerCreatedSuccessfully, setOwnerCreatedSuccessfully] = useState(false);

  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const dispatch = useDispatch();

  const handleOwnerName = (name) => {
    console.log(owners[name]);
    if (owners[name]) {
      setOwnerNameErrorMsg('Dueño ya existe');
    } else if (name.length) {
      setOwnerName(name);
      setOwnerNameErrorMsg('');
    }
  };

  const handleOwnerPassword = (password) => {
    const passwordRegex = /^\d{5}$/;
    if (!password.match(passwordRegex)) {
      setOwnerPasswordErrorMsg('Contraseña debe ser número de 5 dígitos');
    } else {
      setOwnerPasswordErrorMsg('');
      setOwnerPassword(password);
    }
  };

  const handleOwnerConfirmPassword = (confirmPassword) => {
    if (ownerName && ownerPassword === confirmPassword) {
      setOwnerConfirmPasswordErrorMsg('');
      setFormCompletedCorrectly(true);
    } else {
      setOwnerConfirmPasswordErrorMsg('Las contraseñas no coinciden');
    }
  };

  const handleCreateOwner = () => {
    dispatch(createOwner({
      id: Date.now(),
      name: ownerName,
      password: ownerPassword,
      roll: 'Dueño',
    }));
    setOwnerCreatedSuccessfully(true);
  };
  return (
    <form className={COcss.formContainer}>
      <h1>Crear Dueño</h1>
      <label htmlFor="owner-name">
        Nombre:
        <input
          onChange={() => handleOwnerName(nameRef.current.value)}
          ref={nameRef}
          id="owner-name"
          type="text"
        />
      </label>
      {ownerNameErrorMsg && <small>{ownerNameErrorMsg}</small>}
      <label htmlFor="owner-password">
        Contraseña:
        <input
          onChange={() => handleOwnerPassword(passwordRef.current.value)}
          ref={passwordRef}
          id="owner-password"
          type="password"
        />
      </label>
      {ownerPasswordErrorMsg && <small>{ownerPasswordErrorMsg}</small>}
      <label htmlFor="owner-confirm-password">
        Confirmar Contraseña:
        <input
          onChange={() => handleOwnerConfirmPassword(confirmPasswordRef.current.value)}
          ref={confirmPasswordRef}
          id="owner-confirm-password"
          type="password"
        />
      </label>
      {ownerConfirmPasswordErrorMsg && <small>{ownerConfirmPasswordErrorMsg}</small>}
      <button
        type="button"
        onClick={handleCreateOwner}
        disabled={!formCompletedCorrectly}
      >
        Crear Dueño
      </button>
      {ownerCreatedSuccessfully && <span>Dueño creado exitosamente</span>}
    </form>
  );
};

export default CreateOwner;
