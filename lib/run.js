import { xchacha20poly1305 } from "@noble/ciphers/chacha";
import { hexToBytes } from "@noble/hashes/utils";

export function run() {
  let a = new TextEncoder().encode("A");
  let b = "2ec708747ca29fe25f2ecd60a29e664530bd04ad72d2611b98451b8d57215b22";
  let c = xchacha20poly1305(hexToBytes(b), hexToBytes("A".repeat(48)));
  let d = c.encrypt(a);
  return String(d);
}
