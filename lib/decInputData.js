import crypto from 'crypto';
import { data } from './inputData';
let decryptedData = null;
const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.DECRYPTION_KEY, 'hex');

function decrypt(encryptedText) {
  const [ivHex, encryptedHex] = encryptedText.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const encryptedData = Buffer.from(encryptedHex, 'hex');

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedData);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

if (!decryptedData) {
  decryptedData = decrypt(data);
}

export function getInputData() {
  return decryptedData;
}
