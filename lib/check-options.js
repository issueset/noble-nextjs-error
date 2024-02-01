import { checkOpts } from '@noble/ciphers/utils';

import { bytesToHex, randomBytes } from '@noble/hashes/utils';

import {encrypt} from "kiss-crypto"
import { xchacha20poly1305 } from '@noble/ciphers/chacha';

export function encrypt2() {
  return encrypt("hello", "world");
}

export function generateRandomKey(length) {
    const randomValues = randomBytes(length);
    return bytesToHex(randomValues);
}


/**
 * Generates a random key in hex format
 * @returns A string key in hex format
 */
export function generateEncryptionKey() {
  return generateRandomKey(32);
}


export function checkOptions(opts) {
  try {
    return JSON.stringify(checkOpts(opts));
  } catch (error) {
    return String(error);
  }
}


