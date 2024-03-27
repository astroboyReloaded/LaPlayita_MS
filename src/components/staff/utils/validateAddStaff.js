export const firstName = {
  id: 'fN',
  inputName: 'first',
  label: 'Nombre(s)',
  type: 'text',
  validation: {
    required: 'Campo necesario.',
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
  inputName: 'last',
  label: 'Apellido(s)',
  type: 'text',
  validation: {
    required: 'Campo necesario.',
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

export const role = {
  id: 'rl',
  inputName: 'role',
  label: 'Rol',
  validation: {
    required: true,
    validate: (value) => role.selectOptions.includes(value) || 'EL rol es requerido.',
  },
  selectOptions: ['owner', 'manager', 'server', 'cook', 'assistant'],
};

export const cellphone = {
  id: 'cl',
  inputName: 'phone',
  label: 'Celular',
  type: 'tel',
  validation: {
    required: 'EL cel es requerido.',
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
  validation: {
    required: 'El correo es requerido.',
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
  validation: {
    required: 'Cómo te gusta que te digan?',
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

export const staffPassword = {
  id: 'sP',
  inputName: 'password',
  label: 'Crea tu contraseña de 5 dígitos',
  type: 'number',
  maxLength: 5,
  validation: {
    required: 'Debes crear una contraseña.',
    validate: {
      length: (value) => value.length === 5 || 'Debe tener 5 números.',
      noRepeats: (value) => {
        const numbers = value.split('');
        const numbersSet = new Set(numbers);
        return numbersSet.size === numbers.length || 'Nungún número se debe repetir.';
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

export const confirmPassword = {
  id: 'cP',
  inputName: 'confirmPassword',
  label: 'Confirma tu Contraseña',
  type: 'number',
  maxLength: 5,
  validation: {
    required: 'Debes confirmar tu contraseña.',
    validate: (value, { password }) => value === password || 'Las contraseñas no coinciden.',
  },
};
