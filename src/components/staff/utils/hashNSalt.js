import crypto from 'crypto';
// Function to hash PIN with salt
function hashPIN(pin) {
  // Function to generate a random salt
  const salt = function generateSalt() {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let salt = '';
    for (let i = 0; i < 10; i++) {
      salt += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return salt;
  };

  const combinedString = pin + salt();
  // Use a strong hashing algorithm like SHA-256
  const hashedPIN = crypto
    .createHash('sha256')
    .update(combinedString)
    .digest('hex');
  console.log(hashedPIN);
  return hashedPIN;
}

export default hashPIN;
