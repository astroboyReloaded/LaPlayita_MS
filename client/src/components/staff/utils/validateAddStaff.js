export const role = {
  id: 'rl',
  inputName: 'role',
  label: 'Rol',
  validate: {
    required: { value: true, message: 'El rol es requerido.' },
    validate: (value) =>
      role.selectOptions.includes(value) || 'EL rol es requerido.',
  },
  selectOptions: ['Owner', 'Cheff', 'Manager', 'Server', 'Cook', 'Assistant'],
};

export const firstName = {
  id: 'fN',
  inputName: { ref: 'first' },
  label: 'Nombre(s)',
  type: 'text',
  validate: {
    required: {
      value: true,
      message: 'Necesitamos tu nombre.',
    },
    minLength: {
      value: 2,
      message: 'Este nombre está muy corto!',
    },
    pattern: {
      value: /^[A-Z][a-zñáéíóú]*(?: [A-Z][a-zñáéíóú]*)?$/,
      message: 'La primera con mayúscula.',
    },
  },
};

export const lastName = {
  id: 'lN',
  inputName: { ref: 'last' },
  label: 'Apellido(s)',
  type: 'text',
  required: 'Necesitmos tus apellidos.',
  validate: {
    maxLength: {
      value: 30,
      message: 'No tan largo!.',
    },
    pattern: {
      value: /^[A-Z][a-zñáéíóú]*(?: [A-Z][a-zñáéíóú]*)?$/,
      message: 'La primera con mayúscula.',
    },
  },
};

export const cellphone = {
  id: 'cl',
  inputName: 'phone',
  label: 'Celular',
  type: 'tel',
  required: 'Tu cel aquí.',
  validate: {
    pattern: {
      value: /^[0-9]{10}$/,
      message: '10 digitos.',
    },
  },
};

export const email = {
  id: 'em',
  inputName: 'email',
  label: 'Correo Electrónico',
  type: 'email',
  required: 'El correo es requerido.',
  validate: {
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Correo invalido.',
    },
  },
};

export const staffName = {
  id: 'sN',
  inputName: 'staffName',
  label: 'Tu nombre de Staff',
  type: 'text',
  required: 'Cómo te gusta que te digan?',
  validate: {
    minLength: {
      value: 2,
      message: 'Debe tener de 2 a 16 caracteres.',
    },
    pattern: {
      value: /^[A-Z][a-zñáéíóú]*(?: [A-Z]+)?$/,
      message: 'La primera con mayúscula.',
    },
  },
};

export const staffPIN = {
  id: 'sP',
  inputName: 'PIN',
  label: 'Crea tu PIN de 5 dígitos',
  type: 'number',
  required: 'Debes crear tu PIN.',
  validate: {
    maxLength: {
      value: 5,
      message: 'El PIN debe tener 5 dígitos.',
    },
    validate: {
      noRepeats: (value) => {
        const numbers = value.split('');
        const numbersSet = new Set(numbers);
        return (
          numbersSet.size === numbers.length || 'Nungún número se debe repetir.'
        );
      },
      noConsecutive: (value) => {
        const numbers = value.split('');
        for (let i = 0; i < numbers.length - 1; i += 1) {
          if (parseInt(numbers[i], 10) + 1 === parseInt(numbers[i + 1], 10)) {
            return 'No debe tener dos o más números consecutivos.';
          }
        }
        return true;
      },
    },
  },
};

export const confirmPIN = {
  id: 'cP',
  inputName: 'confirmPIN',
  label: 'Confirma tu PIN',
  type: 'number',
  maxLength: 5,
  validate: {
    required: 'Debes confirmar tu PIN.',
    validate: (value, { PIN }) => value === PIN || 'Los PINs no coinciden.',
  },
};
