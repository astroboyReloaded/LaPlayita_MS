const shift = [3, 6, 9, 6, 3];

export function hashPIN(pin) {
  const salt = (Math.random() * 100000).toFixed(0).split('');
  let hashedPIN = '';
  pin.split('').map((char, i) => {
    const shifted = parseInt(char) + shift[i];
    hashedPIN += shifted + salt[i];
  });
  return hashedPIN;
}

export function validatePIN(hashedPIN) {
  let unhashedPIN = '';
  hashedPIN.split('').forEach((char, i) => {
    if (i % 2 === 0) {
      const unshifted = parseInt(char) - shift[i / 2];
      unhashedPIN += unshifted;
    }
  });
  return unhashedPIN;
}

export function authorization() {
  return false;
}
