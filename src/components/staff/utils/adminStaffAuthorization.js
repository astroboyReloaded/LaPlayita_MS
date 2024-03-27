const adminStafAuthorizationValidation = {
  id: 'authorize',
  inputName: 'authorize',
  label: 'Authorization',
  maxLength: 5,
  validation: {
    required: 'Debes crear una contraseña.',
    validate: () => true,
  },
};

export default adminStafAuthorizationValidation;
