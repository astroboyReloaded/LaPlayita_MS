import { validatePIN, authorization } from './auth';

const staffAuthorization = {
  id: 'authorize',
  inputName: 'authorize',
  label: 'Authorization',
  maxLength: 5,
  validation: {
    validPIN: () => validatePIN() || 'Contraseña inválida',
    noCredentials: () => authorization() || 'No tienes accesso a esta sección.',
  },
};

export default staffAuthorization;
